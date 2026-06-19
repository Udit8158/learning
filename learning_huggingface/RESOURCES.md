# Hugging Face Resources

## Knowledge

- [Book: _AI Engineering: Building Applications with Foundation Models_ — Chip Huyen (O'Reilly, 2025)](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)
  The canonical definition of "AI engineering" (using models) vs "ML engineering" (building them). Use for: the big-picture map, prompting/RAG/agents/evals once we reach the app layer. Free companion resources: [chiphuyen/aie-book](https://github.com/chiphuyen/aie-book).
- [Hugging Face — Learn hub](https://huggingface.co/learn)
  The official jumping-off point for all HF courses. Use for: picking the next structured course once fundamentals land.
- [Transformers docs — Pipeline tutorial](https://huggingface.co/docs/transformers/en/pipeline_tutorial)
  Authoritative, current (Transformers v5) guide to `pipeline()`. Use for: the exact API to run any model for a task, choosing models, device/GPU settings.
- [Transformers docs — index](https://huggingface.co/docs/transformers/en/index)
  Reference for the flagship library. Use for: task identifiers, model classes, what Transformers covers.
- [Diffusers docs — index](https://huggingface.co/docs/diffusers/index)
  HF library for image/video generation via diffusion. Use for: text-to-image, image-to-video pipelines — directly mission-critical.
- [Diffusion Models Course](https://huggingface.co/learn/diffusion-course/unit0/1)
  Official beginner course on diffusion. Use for: going deeper on how image/video generation actually works.
- [Diffusers — Video generation guide](https://huggingface.co/docs/diffusers/using-diffusers/text-img2vid)
  Use for: text-to-video and image-to-video specifics when we reach the video milestone.
- [The Complete Hugging Face Primer for 2026 — KDnuggets](https://www.kdnuggets.com/the-complete-hugging-face-primer-for-2026)
  Clear ecosystem overview (Hub vs libraries vs Spaces). Use for: mental-model grounding for a developer new to the ecosystem.
- [mrdbourke/learn-huggingface (GitHub)](https://github.com/mrdbourke/learn-huggingface)
  Project-based, end-to-end course repo by a well-regarded teacher. Use for: hands-on practice once basics are solid.

## Wisdom (Communities)

- [Hugging Face Forums — Beginners](https://discuss.huggingface.co/c/beginners/)
  Official, active, well-moderated. Use for: "why won't this model load", environment errors, model selection sanity checks.
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA)
  High-signal community for running models locally on consumer hardware. Use for: hardware/quantization advice, what runs on what.

## Gaps
- Need a vetted, current "best model for X on consumer hardware" reference (esp. video).
  Wan2.2-TI2V-5B surfaced as a beginner-friendly video model — to be verified before relying on it.
