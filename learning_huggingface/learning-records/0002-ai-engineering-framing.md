# Framing established: this is "AI Engineering" (using models), and it has two lanes

Udit correctly identified that his goal is *using* models, not *building/training* them —
i.e. AI Engineering (Chip Huyen's sense), not ML Engineering. He asked what topics he needs
to be comfortable, given a fullstack web background (Go, TS), beginner to AI and Python.

Key distinctions surfaced for future grounding:
- **Lane A — API-first**: building apps on hosted/foundation models. Language-agnostic;
  his Go/TS skills transfer directly. Prompting, RAG, agents, evals live here.
- **Lane B — weights-first**: running open models yourself (Hugging Face, diffusers,
  image/video gen). Python-centric and hardware-aware (VRAM, quantization).
- His mission (run image/video models himself + automation) leans **Lane B**, which is the
  more Python-heavy, ML-adjacent side. Recommended pattern: prototype the model in Python,
  expose it behind an HTTP endpoint his Go/TS app calls.

Implications:
- His real friction is the Python *ecosystem* (pip, venv, notebooks, CUDA/mps) and hardware,
  NOT programming concepts — don't teach general coding.
- Curriculum should make the two lanes explicit and lean on his web-dev strengths for the
  app/automation layer while carrying him through the Python on-ramp for Lane B.
