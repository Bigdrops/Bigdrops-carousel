---
title: md or html, that's a stupid question
gap: 0.5
---

## opening
A couple of days ago, [[cue:thariq]]Thariq from the Claude Code team published a viral post.
One sentence in the title: HTML is the new markdown.
He said he almost never writes md files anymore, he just lets AI generate HTML for him.
5 million views, X immediately exploded into debate.
One camp is the md party, [[cue:two-camps]]who think md is the source code of the AI era.
The other camp thinks Thariq is right, HTML is the ultimate answer.

## md-side
The md party's evidence is actually pretty solid.
OpenAI released AGENTS.md last year, [[cue:agents-md]]used by 60,000+ projects. AWS, Anthropic, Google, Microsoft, OpenAI — half the AI industry donated it to the Linux Foundation as an open standard.
Karpathy's llm-wiki, its core is three-layer markdown, a single CLAUDE.md file, 50k stars.
Cloudflare measured some data, [[cue:token-saving]]same blog post, HTML was 16k tokens, converted to md only 3k.
80% savings.
GitHub officially said: docs no longer describe code, [[cue:doc-is-code]]docs are code.

## html-side
But the HTML party isn't wrong either.
I agree with several arguments in Thariq's article.
First is spatial information. [[cue:spatial]]diffs, call graphs, architecture diagrams — they inherently have spatial dimensions. md flattens them to a line of text, html can display side by side. Comprehension is not the same magnitude.
Second is dynamic experience. [[cue:dynamic]]When prototyping, what color a button turns, what easing curve — no amount of text description helps. html lets you see it directly.
Third is structured reading. [[cue:structured]]Collapsible sections, tabbed code blocks, sidebar glossaries — completely different from reading the same words linearly.
Anthropic's Live Artifacts, HTML has evolved from static output to an interactive dashboard that pulls real-time data.

## the-real-question
After reading it I want to say, [[cue:reveal]]they're arguing over a stupid question.
Both sides won.
But they won on different questions.
The md party answers, [[cue:question-md]]what do we use to write.
The html party answers, [[cue:question-html]]what do we show people.
These are two questions.
How could one replace the other.

## the-split
I think the real question is this.
md and html aren't substitutes, [[cue:split]]they're a division of labor.
Before, you wrote md and also read md.
You had to compromise, so md won.
But after AI arrived, [[cue:ai-changes]]for the first time there's a new situation.
Production cost can be absorbed by AI.
The heavy cost of HTML, AI bears it for you.
You only consume.
The need for compromise has been split into two extremes of optimal.
Production needs lightweight, fast, token-efficient — [[cue:md-side-win]]that's md.
Consumption needs rich, visual, shareable — [[cue:html-side-win]]that's html.
Both sides peak.
That middle compromise position, nobody needs it anymore.

## activity-proof
The cleanest living proof is Thariq himself.
In March he published a Skills guide, [[cue:thariq-march]]emphasizing the core is still markdown.
In May he published HTML is the new markdown.
Same person, [[cue:same-person]]both sides peak, no conflict.
Karpathy and Lex Fridman's pair is the same.
Core is markdown wiki, [[cue:karpathy-lex]]shell is dynamic HTML.
Not Lex replacing Karpathy, but adding a consumption layer on top of Karpathy.

## closing
So next time you want to argue about this, [[cue:final]]first ask yourself.
Are you facing "writing" or "viewing".
Writing, [[cue:md-final]]use md.
Viewing, [[cue:html-final]]use html.
Tools handle the switching for you.
You can put down your stance.
