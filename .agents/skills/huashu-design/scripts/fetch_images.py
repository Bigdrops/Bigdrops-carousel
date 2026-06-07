#!/usr/bin/env python3
"""
Fetch real images from Wikimedia Commons (public domain / CC), for huashu-design "content-driven design using real images" (Phase 3.5).

Why this script: content-driven design (parrot/coffee/Malaysia…) must use real images, cannot fake with CSS color blocks.
Having the model write fetch logic from scratch each time is both slow and error-prone (forgets to clear proxy → TLS failure / forgets compliant UA → 429). This is solidified here so next time we only change keywords.

Usage:
  python3 scripts/fetch_images.py --query "Petronas Towers" "Langkawi beach" "George Town street" \
      --out project/assets/img --count 2 --width 1600

Each query fetches the first count images, scales to width, downloads to out, and prints a manifest (path | license | author | source page) for honesty verification.
If all fail → exit code 1, with a prompt to fall back to Phase 3.5's three-level image retrieval (Unsplash/Pexels → AI generation → honest placeholder).
"""
import argparse, json, os, re, sys, urllib.parse, urllib.request

# ① Clear proxy: local curl/urllib using proxy causes TLS failure (see memory feedback_gemini_proxy)
for _k in ("ALL_PROXY", "all_proxy", "HTTP_PROXY", "http_proxy", "HTTPS_PROXY", "https_proxy"):
    os.environ.pop(_k, None)

API = "https://commons.wikimedia.org/w/api.php"
# ② Compliant User-Agent is mandatory, otherwise Wikimedia returns 429
UA = "huashu-design-image-fetcher/1.0 (https://huasheng.ai; skill contact)"


def _api_get(params):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def _safe(name):
    return re.sub(r"[^\w\-.]", "_", name)[:60]


def fetch(query, out, count, width):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": query, "gsrnamespace": 6, "gsrlimit": count,
        "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": width,
    }
    try:
        data = _api_get(params)
    except Exception as e:
        print(f"[FAIL search] {query}: {e}", file=sys.stderr)
        return []
    pages = (data.get("query", {}) or {}).get("pages", {})
    got = []
    for p in list(pages.values())[:count]:
        ii = (p.get("imageinfo") or [{}])[0]
        thumb = ii.get("thumburl") or ii.get("url")
        if not thumb:
            continue
        meta = ii.get("extmetadata", {}) or {}
        lic = (meta.get("LicenseShortName", {}) or {}).get("value", "?")
        artist = re.sub("<[^>]+>", "", (meta.get("Artist", {}) or {}).get("value", "?")).strip()
        ext = os.path.splitext(thumb)[1].split("?")[0] or ".jpg"
        fn = _safe(query) + "_" + _safe(p.get("title", "img").replace("File:", ""))
        fn = os.path.splitext(fn)[0][:55] + ext
        path = os.path.join(out, fn)
        try:
            req = urllib.request.Request(thumb, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r, open(path, "wb") as f:
                f.write(r.read())
            got.append(path)
            print(f"[OK] {path}  | {lic} | {artist} | {ii.get('descriptionurl','')}")
        except Exception as e:
            print(f"[FAIL dl] {thumb}: {e}", file=sys.stderr)
    if not got:
        print(f"[EMPTY] No results for '{query}' — try different keywords, or use Phase 3.5 fallback", file=sys.stderr)
    return got


def main():
    ap = argparse.ArgumentParser(description="Wikimedia Commons real image fetcher (huashu-design Phase 3.5)")
    ap.add_argument("--query", nargs="+", required=True, help="One or more English keywords (English has higher hit rate)")
    ap.add_argument("--out", required=True, help="Output directory (suggest project/assets/img)")
    ap.add_argument("--count", type=int, default=2, help="Number of images to fetch per keyword (default 2)")
    ap.add_argument("--width", type=int, default=1600, help="Scale width px (default 1600)")
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    allgot = []
    for q in a.query:
        allgot += fetch(q, a.out, a.count, a.width)
    print(f"\n=== Downloaded {len(allgot)} images to {a.out} ===")
    print("⚠️ Honesty check: verify each image's info for attribution, license compatibility, and suitability. Remove inappropriate ones.")
    if not allgot:
        print("❌ All failed → use Phase 3.5 three-level image fallback (Unsplash/Pexels → AI generation → honest placeholder, don't block the pipeline)", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
