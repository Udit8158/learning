# Working Notes

## Learner profile
- CS student, strong full-stack **TypeScript**, limited Python. Reads code/JSON fluently — safe to use light code/graph analogies (nodes ≈ pure functions, edges ≈ typed data flow).
- Complete beginner to ComfyUI AND the local-model space generally.
- **Concepts-first** learner: explain the machinery before the clicking.

## Hardware
- M1 Mac, **16 GB** unified memory. ComfyUI already installed and running.
- Local sweet spot: SD1.5 (fast) and SDXL (~60–90s/image). Flux runs but slow.
- Apple Silicon uses the **MPS** backend; `--force-fp16` recommended to cut memory.

## Teaching approach
- Each lesson: short, one tangible win, tied to the manga mission.
- Use TS analogies where they reduce load (he thinks in types and data flow).
- Quizzes: equal-length answers, retrieval-based.
- Build local-first competence before any cloud-GPU talk.

## Roadmap (tentative, ZPD-driven)
1. ✅ The diffusion pipeline = the 7 core nodes (concepts-first mental model).
2. Build the default text-to-image graph by hand; first local image on the M1.
3. Prompting + negative prompts + CFG/steps/sampler (the KSampler dials).
4. Models: checkpoints, SD1.5 vs SDXL, VAE, where files live. Mac performance flags.
5. LoRAs + img2img (style/character control).
6. Consistency tools: ControlNet, IPAdapter → manga character across panels.
7. Assembling a manga page.
8. (Later) Cloud GPU; (later) video; (later) voice.
