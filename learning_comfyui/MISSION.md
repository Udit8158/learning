# Mission: ComfyUI & Local Image-Generation Workflows

## Why
Udit wants to turn written stories into manga/comics using AI image generation he
controls end-to-end — building real, repeatable workflows rather than using
one-click apps. The deeper goal is fluency in the local-model ecosystem: owning the
pipeline from prompt to finished panel, then extending it to video and voice.

## Success looks like
- Builds a text-to-image workflow in ComfyUI from scratch and explains what every node does.
- Generates a consistent character across multiple panels (pose, expression, style held steady).
- Produces a short multi-panel manga page from a story prompt, locally on the M1.
- Knows which work belongs on the M1 vs. a rented cloud GPU, and can move a workflow to the cloud.
- Later: extends the same mental model to video and voice workflows.

## Constraints
- Hardware: M1 Mac, 16 GB unified memory. Local-first (SD1.5/SDXL comfortably; Flux slow). Cloud GPU (e.g. RunPod) later for heavy lifting.
- Background: CS student, strong full-stack TypeScript, limited Python. Comfortable with code, terminals, JSON.
- Learning style: concepts-first — understand the machinery, then operate it.
- ComfyUI is already installed and running locally.

## Out of scope (for now)
- Training custom LoRAs/checkpoints from scratch (revisit once base workflows are solid).
- Video and voice generation (explicitly deferred until image workflows are mastered).
- Cloud-GPU setup (deferred until the main ComfyUI features are learned locally).
