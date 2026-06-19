# Notes

## Learner preferences
- Developer by background; comfortable with code and the terminal. Don't over-explain
  general programming — focus the working memory on the AI-specific parts.
- Learns by playing with real models. Bias lessons toward "run this and see it work"
  over theory. Theory only in service of the next hands-on win.
- End goal is creative + automation: images, video, gluing models into scripts.
- **Will use Claude Code to write/run the actual code.** Wants basic→intermediate
  CONCEPTUAL understanding of what's going on, not syntax recall. So: teach the mental
  model and "read & understand this code" skill; let Claude Code handle authoring.
  Quizzes should test concepts/decisions, not memorized API calls.

## Hardware
- MacBook Air **M1, 16GB unified memory**. MPS (Metal) backend, `device="mps"`.
- Realistic LOCAL ceiling: SD 1.5 and SDXL image gen (slow: ~60–90s/SDXL image), good
  enough for learning the diffusers pipeline hands-on.
- FLUX.1-dev (best open image quality) wants 24GB+ — needs FP8 quant and may OOM on 16GB.
- Local video generation: effectively out of reach on 16GB.
- Strategy: learn concepts + run small models LOCALLY; OFFLOAD heavy gen (FLUX, video) to
  hosted HF Inference Providers (~$0.01/FLUX image, free monthly credits). Calling a hosted
  endpoint from code also matches his web-dev strengths and the Claude-Code workflow.

## Teaching working notes
- Lesson order plan: (1) mental model + the universal `pipeline()` pattern [done],
  (2) set up the environment and actually run a first pipeline locally,
  (3) first text-to-image with diffusers, (4) image-to-video, (5) glue into an automation.
- Hardware unknown: confirm whether he's on this Mac (Apple Silicon → `device="mps"`)
  or has an NVIDIA GPU, before the "run it locally" lesson. Affects device flags and which
  models are realistic.
- Shared lesson styling lives in `assets/course.css` — every lesson links it.
