# Hardware ceiling (M1 16GB) + Claude-Code-driven workflow reshape the curriculum

Two constraints established that change how to teach:

1. **Hardware: MacBook Air M1, 16GB.** Local generation is capped at SD 1.5 / SDXL
   (slow but usable for learning). FLUX and video generation must be offloaded to hosted
   HF Inference Providers. So the course must teach BOTH local diffusers AND the hosted
   inference path — the hosted path is not optional polish, it's how he hits the
   image-quality and video goals at all.

2. **He'll use Claude Code to author code; he wants conceptual understanding.** Goal is
   basic→intermediate "what's going on", not writing pipelines from scratch. Implication:
   weight lessons toward mental models, decisions, and READING/understanding code; let
   Claude Code write it. Assess understanding, not syntax recall.

Net: lessons should explain "what this code does and why you'd choose it," give him a small
thing to actually run (even if Claude Code writes it), and make the local-vs-hosted tradeoff
a first-class concept rather than a footnote.
