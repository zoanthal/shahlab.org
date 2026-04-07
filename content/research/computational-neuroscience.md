---
title: "Computational Neuroscience & LLM Interpretability"
date: 2024-01-01
weight: 3
---

## Computational Neuroscience & LLM Interpretability

We use large language models as computational analogs to test predictions of neural state space theories. LLMs are not biological brains, but they are high-dimensional recurrent (or recurrence-like) systems that learn complex temporal representations. This makes them useful testbeds for questions about representational geometry, binding, and topological structure in neural computation.

### Activation Reshaping Across Network Layers

We study how targeted perturbations to internal activations reshape representational geometry at different layers of deep networks. These "dreaming" experiments inject structured noise or cross-domain signals into intermediate representations and measure how the network's downstream processing transforms these perturbations. Results reveal that mid-layer activations are most susceptible to geometric reshaping, consistent with SST's prediction that intermediate representations carry the richest state space structure.

### Cross-Domain Binding via Perturbation

A central question in consciousness science is how the brain binds information across sensory modalities into a unified experience. We probe an analogous question in LLMs: when activations from one domain (e.g., visual descriptions) are injected into a network processing another domain (e.g., auditory descriptions), does the network produce bound, coherent representations or disjoint outputs? Our experiments measure binding through geometric and topological signatures in the resulting activation spaces.

### Topological Preservation Across Architectures

SST predicts that the topological structure of delay coordinate embeddings is what matters for consciousness, not the specific hardware or architecture. We test this prediction computationally by comparing representational topology across LSTM, Transformer, and Mamba architectures trained on identical tasks. We measure whether topological invariants (e.g., persistent homology of activation manifolds) are preserved across architectures despite differences in mechanism.

### Current Projects

- Systematic comparison of representational geometry across LSTM, Transformer, and Mamba architectures
- Perturbation experiments probing cross-modal binding in multi-layer networks
- Topological data analysis of activation manifolds under dreaming-like perturbation regimes
- Connections between LLM interpretability findings and the mathematical framework of SST
