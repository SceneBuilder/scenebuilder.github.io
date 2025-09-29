Existing indoor 3D scene datasets are severely limited in availability and diversity—there are fewer than 10k high-quality scenes in total, of which 99+ percent depict residential environments. Synthetic generation methods solve the quantity aspect, yet still suffer from diversity—most works cannot be tractably extended to output non-residential scenes, and are limited to extremely simplistic floor plans, unsuitable for embodied navigation training.

We present **SceneBuilder** to show that 3D scene generation using agentic VLM workflows is possible. We contribute **SBD-100k**, a 3D scene dataset with unprecedented domain diversity and navigation complexity. Using ablation experiments, we show that navigation models trained on SBD-100k outperform respective baselines.

Demo and code available at [scenebuilder.github.io](https://scenebuilder.github.io).
