# Mission: Hugging Face

## Why
Udit is a developer who wants to stop treating AI models as black-box APIs and start
running them himself — generating images and video, and wiring models into automations
with his own code. Hugging Face is the "layer behind" all of that, so learning it is the
unlock for everything else.

## Success looks like
- Find a model on the Hugging Face Hub for a given task and judge whether it fits.
- Run any model locally (or in a notebook) in a few lines using `pipeline()`.
- Generate an image from a text prompt with the `diffusers` library.
- Generate a short video from a prompt or image with a diffusion model.
- Glue a model into a small Python automation script of his own.

## Constraints
- Complete beginner to Hugging Face and to AI/ML development (but a competent developer;
  fullstack web, Go + TS, new to Python's ecosystem).
- Hardware: MacBook Air M1, 16GB. Local gen caps at SD 1.5 / SDXL; FLUX and video must be
  offloaded to hosted HF Inference Providers. (See [[0003-hardware-and-claude-code-workflow]].)
- Uses Claude Code to write/run code; wants basic→intermediate conceptual understanding,
  not syntax recall.
- Learns best by playing with real models, not abstract theory.
- Background context: runs a COMEDK-focused YouTube channel, so explainer-quality
  understanding (being able to teach it) is a bonus, not a requirement.

## Out of scope (for now)
- Training or fine-tuning models from scratch.
- The deep math of how transformers/diffusion work internally.
- Production deployment, scaling, MLOps.
