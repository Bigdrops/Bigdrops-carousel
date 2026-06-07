/**
 * narration_stage.jsx · Narration-driven Stage
 *
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  🛑 Before using this tool, read: references/voiceover-pipeline.md║
 * ║                                                                  ║
 * ║  Iron Law #1: The whole piece is a continuous motion narrative,  ║
 * ║          not a set of independent scenes.                        ║
 * ║          You are not making 7 slides. You are directing 1 movie.║
 * ║                                                                  ║
 * ║  Iron Law #2: The hero element persists across scenes.           ║
 * ║          Don't create a new layout for each segment.             ║
 * ║                                                                  ║
 * ║  Iron Law #3: No hard cuts between scenes (opacity 1→0/0→1)     ║
 * ║          Morph, don't cut.                                       ║
 * ║                                                                  ║
 * ║  Failure Mode #1 (from huashu v1 production):                   ║
 * ║          Each Scene with independent layout + cues using         ║
 * ║          fade-up + scene transitions.                            ║
 * ║          Full-page opacity switching = PowerPoint with           ║
 * ║          voiceover = zero production value.                      ║
 * ║                                                                  ║
 * ║  Correct approach: Place hero directly as <NarrationStage> child║
 * ║          (not inside Scene). Use useNarration() in hero to read  ║
 * ║          time/scene/cue state. Hero determines its own form      ║
 * ║          based on current time → continuous motion across scenes║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * Usage (inline in HTML <script type="text/babel">):
 *   const { NarrationStage, Scene, Cue, useNarration } = NarrationStageLib;
 *
 *   const App = () => (
 *     <NarrationStage timeline={TIMELINE} audioSrc="voiceover.mp3"
 *                     width={1920} height={1080}>
 *       <Scene id="intro">
 *         <h1>What is a token</h1>
 *         <Cue id="question">
 *           {(triggered) => triggered && <p>↑ This is the question</p>}
 *         </Cue>
 *       </Scene>
 *       <Scene id="token-2">
 *         <Cue id="split">
 *           {(triggered, progress) => (
 *             <div style={{opacity: triggered ? 1 : 0.3}}>...</div>
 *           )}
 *         </Cue>
 *       </Scene>
 *     </NarrationStage>
 *   );
 *
 * Time source (auto-select):
 *   - Video recording mode (window.__recording === true): uses window.__time (external driver pushes frames)
 *   - Live playback mode: uses <audio>.currentTime (syncs strictly with audio when user clicks play)
 *
 * Compatible with render-video.js:
 *   - First tick sets window.__ready = true
 *   - When recording, detects window.__recording to force no audio, uses window.__time
 *   - Exposes window.__totalDuration to the driver for total frame count
 *
 * Dependencies: React 18 + ReactDOM 18 + Babel standalone (same as animations.jsx)
 */

const NarrationStageLib = (() => {
  const NarrationContext = React.createContext({
    time: 0,
    scene: null,
    sceneTime: 0,
    isCueTriggered: () => false,
    cueProgress: () => 0,
  });

  /**
   * Main component: takes timeline + audio, provides context
   *
   * Props:
   *   timeline       timeline.json object (required)
   *   audioSrc       voiceover.mp3 path (required)
   *   width/height   Stage dimensions, default 1920x1080
   *   background     Default '#0e0e0e'
   *   controls       Show bottom playback bar, default true
   *   children       Animation content (organized with <Scene>/<Cue>)
   */
  function NarrationStage({
    timeline,
    audioSrc,
    width = 1920,
    height = 1080,
    background = '#0e0e0e',
    controls = true,
    children,
  }) {
    const audioRef = React.useRef(null);
    const [time, setTime] = React.useState(0);
    const [playing, setPlaying] = React.useState(false);
    const recording = typeof window !== 'undefined' && window.__recording === true;

    // Expose to render-video.js
    React.useEffect(() => {
      if (typeof window === 'undefined') return;
      window.__totalDuration = timeline.totalDuration;
      window.__ready = true;
    }, [timeline.totalDuration]);

    // Time tick
    React.useEffect(() => {
      let raf;
      if (recording) {
        // Seek-render (render-video-seek.js injects window.__seekRender): freeze self-driven clock,
        // external window.__seek(t) advances frame by frame. Each frame is a deterministic seek, no rAF.
        if (typeof window !== 'undefined' && window.__seekRender) {
          window.__seek = (t) => setTime(Math.min(t, timeline.totalDuration));
          return;
        }
        // Recording mode: rAF wall-clock self-drive from 0
        // Compatible with render-video.js (depends on natural animation advancement + window.__seek reset)
        let startedAt = null;
        const tick = (now) => {
          if (startedAt === null) startedAt = now;
          setTime(Math.min((now - startedAt) / 1000, timeline.totalDuration));
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        // Expose __seek for render-video.js to call __seek(0) after ready
        if (typeof window !== 'undefined') {
          window.__seek = (t) => {
            startedAt = performance.now() - t * 1000;
            setTime(t);
          };
        }
      } else {
        // Live playback mode: follow audio.currentTime
        const tick = () => {
          if (audioRef.current && !audioRef.current.paused) {
            setTime(audioRef.current.currentTime);
          }
          raf = requestAnimationFrame(tick);
        };
        tick();
      }
      return () => cancelAnimationFrame(raf);
    }, [recording, timeline.totalDuration]);

    // Current scene
    const currentScene = React.useMemo(() => {
      if (!timeline.scenes) return null;
      // Find segment where start <= time < end. Last segment holds until end.
      for (let i = 0; i < timeline.scenes.length; i++) {
        const s = timeline.scenes[i];
        const next = timeline.scenes[i + 1];
        if (time >= s.start && (!next || time < next.start)) return s;
      }
      return timeline.scenes[0];
    }, [time, timeline.scenes]);

    const sceneTime = currentScene ? Math.max(0, time - currentScene.start) : 0;

    // Find cue state (compares by absoluteTime, works across scenes)
    const allCues = React.useMemo(() => {
      const map = {};
      for (const s of timeline.scenes || []) {
        for (const c of s.cues || []) {
          map[c.id] = c;
        }
      }
      return map;
    }, [timeline.scenes]);

    const isCueTriggered = React.useCallback(
      (cueId) => {
        const c = allCues[cueId];
        if (!c) return false;
        return time >= c.absoluteTime;
      },
      [allCues, time],
    );

    /** Progress after trigger: 0→1 over ramp seconds, stays at 1 after. Used for fade-in animation after cue. */
    const cueProgress = React.useCallback(
      (cueId, ramp = 0.5) => {
        const c = allCues[cueId];
        if (!c) return 0;
        const dt = time - c.absoluteTime;
        if (dt <= 0) return 0;
        if (dt >= ramp) return 1;
        return dt / ramp;
      },
      [allCues, time],
    );

    const ctx = { time, scene: currentScene, sceneTime, isCueTriggered, cueProgress, timeline };

    // play/pause/seek controls
    const handlePlayPause = () => {
      if (!audioRef.current) return;
      if (audioRef.current.paused) {
        audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    };

    const handleSeek = (e) => {
      if (!audioRef.current) return;
      const t = parseFloat(e.target.value);
      audioRef.current.currentTime = t;
      setTime(t);
    };

    const handleAudioEnded = () => setPlaying(false);

    return (
      <NarrationContext.Provider value={ctx}>
        <div
          style={{
            position: 'relative',
            width,
            height,
            background,
            overflow: 'hidden',
            color: '#fff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif',
          }}
        >
          {children}
        </div>
        {!recording && (
          <audio
            ref={audioRef}
            src={audioSrc}
            preload="auto"
            onEnded={handleAudioEnded}
          />
        )}
        {!recording && controls && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              background: '#1a1a1a',
              color: '#ddd',
              fontFamily: 'monospace',
              fontSize: 13,
              width,
              boxSizing: 'border-box',
            }}
          >
            <button
              onClick={handlePlayPause}
              style={{
                padding: '6px 14px',
                background: '#fff',
                color: '#000',
                border: 0,
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              {playing ? '❚❚ Pause' : '▶ Play'}
            </button>
            <input
              type="range"
              min={0}
              max={timeline.totalDuration}
              step={0.01}
              value={time}
              onChange={handleSeek}
              style={{ flex: 1 }}
            />
            <span style={{ minWidth: 110, textAlign: 'right' }}>
              {time.toFixed(2)} / {timeline.totalDuration.toFixed(2)}s
            </span>
            <span
              style={{
                padding: '4px 10px',
                background: '#2a2a2a',
                borderRadius: 4,
                minWidth: 100,
                textAlign: 'center',
              }}
            >
              {currentScene ? currentScene.id : '—'}
            </span>
          </div>
        )}
      </NarrationContext.Provider>
    );
  }

  /**
   * Scene wrapper: renders children only when the specified scene id is active
   *
   * Props:
   *   id        scene id (matching timeline.scenes[].id)
   *   children  render content; can be ReactNode or (sceneTime, sceneInfo) => ReactNode
   *   keepMounted  default false. If true, stays mounted and only toggles visibility (use for animation continuity)
   */
  function Scene({ id, children, keepMounted = false }) {
    const { scene, sceneTime } = React.useContext(NarrationContext);
    const isActive = scene && scene.id === id;
    if (!isActive && !keepMounted) return null;
    const content = typeof children === 'function' ? children(sceneTime, scene) : children;
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
          transition: keepMounted ? 'opacity 0.2s' : undefined,
        }}
      >
        {content}
      </div>
    );
  }

  /**
   * Cue wrapper: listens to cue trigger state
   *
   * Props:
   *   id        cue id (matching timeline.scenes[].cues[].id)
   *   ramp      cue trigger progress 0→1 ramp duration (seconds), default 0.5
   *   children  must be a function: (triggered: bool, progress: 0-1) => ReactNode
   */
  function Cue({ id, ramp = 0.5, children }) {
    const { isCueTriggered, cueProgress } = React.useContext(NarrationContext);
    const triggered = isCueTriggered(id);
    const progress = cueProgress(id, ramp);
    return children(triggered, progress);
  }

  /** Hook: directly read narration state in custom components */
  function useNarration() {
    return React.useContext(NarrationContext);
  }

  /**
   * splitChunkToLines · Splits text into short lines of ≤maxLen visual length by punctuation
   *
   * Used for subtitle display — Bilibili standard recommends ≤12 characters per line for readability.
   * This function:
   * 1. Splits by strong punctuation (。！？\n) into sentences, never cuts across sentence boundaries
   * 2. Uses each sentence directly if ≤ maxLen, otherwise splits by weak punctuation (，、；：) and merges
   * 3. Chinese-English mixed: English/digits count as 0.5 char visual width
   * 4. Fallback hard-split (rare: single punctuation segment exceeds maxLen)
   *
   * @param text   Source text
   * @param maxLen Max visual length per line, default 13 (≈12 chars + 1 punctuation)
   * @returns Array of subtitle lines
   */
  function visualLen(s) {
    let n = 0;
    for (const ch of s) n += /[a-zA-Z0-9 .,'":;\-]/.test(ch) ? 0.5 : 1;
    return n;
  }
  function splitChunkToLines(text, maxLen = 13) {
    const lines = [];
    const sentences = [];
    let buf = '';
    for (const ch of text) {
      buf += ch;
      if ('。！？\n'.includes(ch)) { if (buf.trim()) sentences.push(buf.trim()); buf = ''; }
    }
    if (buf.trim()) sentences.push(buf.trim());
    for (const sent of sentences) {
      if (visualLen(sent) <= maxLen) { lines.push(sent); continue; }
      const parts = [];
      let pbuf = '';
      for (const ch of sent) {
        pbuf += ch;
        if ('，、；：'.includes(ch)) { parts.push(pbuf); pbuf = ''; }
      }
      if (pbuf) parts.push(pbuf);
      let merged = '';
      for (const p of parts) {
        if (visualLen(merged) + visualLen(p) <= maxLen) merged += p;
        else { if (merged) lines.push(merged); merged = p; }
      }
      if (merged) {
        if (visualLen(merged) <= maxLen) lines.push(merged);
        else {
          let hbuf = '';
          for (const ch of merged) { hbuf += ch; if (visualLen(hbuf) >= maxLen) { lines.push(hbuf); hbuf = ''; } }
          if (hbuf) lines.push(hbuf);
        }
      }
    }
    return lines.filter(l => l.trim());
  }

  /**
   * Subtitles · Bilibili-style subtitle component (white glow with deep ink text, no background, shown by chunk timing)
   *
   * Automatically reads the active chunk from the current scene, splits it with splitChunkToLines,
   * and allocates timing proportionally by character count within the chunk's time window.
   *
   * Requires: timeline.scenes[].chunks[] (narrate-pipeline.mjs outputs this by default)
   *
   * Props (overridable default styles):
   *   bottom    Distance from bottom in px, default 90
   *   fontSize  Font size, default 32
   *   color     Text color, default deep ink #1a1a1a (suits light paper white background)
   *   haloColor Glow color, default rgba(245,241,232,0.9) (suits #f5f1e8 background)
   *   maxLen    Max visual length per line, default 13
   *
   * For dark backgrounds: set color to '#fff', haloColor to 'rgba(0,0,0,0.85)'.
   */
  function Subtitles({ bottom = 90, fontSize = 32, color = '#1a1a1a', haloColor = 'rgba(245,241,232,0.9)', maxLen = 13 } = {}) {
    const { time, scene } = React.useContext(NarrationContext);
    if (!scene || !scene.chunks) return null;
    const active = scene.chunks.find(c => time >= c.absoluteStart && time < c.absoluteEnd);
    if (!active) return null;
    const lines = splitChunkToLines(active.text, maxLen);
    if (lines.length === 0) return null;
    const totalLen = lines.reduce((s, l) => s + visualLen(l), 0);
    const chunkDur = active.absoluteEnd - active.absoluteStart;
    let acc = active.absoluteStart;
    let activeLine = lines[lines.length - 1];
    let lineStart = active.absoluteStart;
    for (const line of lines) {
      const dur = (visualLen(line) / totalLen) * chunkDur;
      if (time < acc + dur) { activeLine = line; lineStart = acc; break; }
      acc += dur;
    }
    const lineProg = Math.min(1, (time - lineStart) / 0.15);
    return React.createElement('div', {
      style: { position: 'absolute', left: 0, right: 0, bottom, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 50 },
    }, React.createElement('div', {
      key: lineStart,
      style: {
        fontFamily: '"PingFang SC", "Noto Sans SC", -apple-system, sans-serif',
        fontSize, fontWeight: 600, color,
        letterSpacing: '0.04em', lineHeight: 1.2, textAlign: 'center',
        textShadow: `0 0 6px ${haloColor}, 0 0 12px ${haloColor}, 0 1px 2px rgba(255,255,255,0.5)`,
        opacity: lineProg, transform: `translateY(${(1 - lineProg) * 4}px)`,
      },
    }, activeLine));
  }

  /**
   * useSceneFade · Soft fade in/out helper for auxiliary elements within a scene
   *
   * Iron Law #2 prohibits hard cuts between scenes — but auxiliary elements (data cards, quote blocks)
   * within a scene, once triggered by a cue, stay visible until the scene ends.
   * Without fading out, these elements would abruptly exist or disappear when transitioning to the next segment.
   * This hook provides [fade-in → hold → fade-out] for unified soft transitions.
   *
   * Usage (multiply op into the auxiliary element's opacity):
   *   const op = useSceneFade('md-side', 0.6, 0.8);  // fade-in 0.6s, fade-out 0.8s
   *   <Cue id="agents-md">{(t, p) => (
   *     <div style={{ opacity: op * p }}>...</div>
   *   )}</Cue>
   *
   * This way, data cards fade in within 0.6s at the start of the md-side segment,
   * and begin fading out 0.8s before the segment ends, overlapping with the next segment's
   * auxiliary element fade-in — no hard cuts on screen.
   *
   * @param sceneId  Scene id
   * @param fadeIn   Fade-in duration in seconds (default 0.5)
   * @param fadeOut  Fade-out duration in seconds (default 0.5)
   * @returns Opacity multiplier between 0-1
   */
  function useSceneFade(sceneId, fadeIn = 0.5, fadeOut = 0.5) {
    const { time, timeline } = React.useContext(NarrationContext);
    if (!timeline) return 0;
    const s = timeline.scenes.find(x => x.id === sceneId);
    if (!s) return 0;
    const inT = (time - s.start) / fadeIn;
    const outT = (s.end - time) / fadeOut;
    const v = Math.min(1, Math.min(inT, outT));
    return Math.max(0, v);
  }

  return { NarrationStage, Scene, Cue, useNarration, useSceneFade, Subtitles, splitChunkToLines };
})();

if (typeof window !== 'undefined') {
  Object.assign(window, { NarrationStageLib });
}
