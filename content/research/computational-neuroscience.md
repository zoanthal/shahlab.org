---
title: "Computational Neuroscience & LLM Interpretability"
date: 2024-01-01
weight: 3
summary: "Using LLMs as testbeds for neural state space predictions."
---

This program connects the consciousness theory to the data science.

SST makes specific, testable predictions about representational geometry in recurrent systems. Large language models are not biological brains, but they are high-dimensional systems that learn complex temporal representations from sequential data. That makes them useful testbeds. If SST is correct about what matters for consciousness (delay coordinate structure, topological invariants, the role of plasticity), then signatures of these properties should appear in LLMs, and the points where they break down should be identifiable.

### The Dreaming Experiments

I inject structured noise and cross-domain signals into intermediate representations of deep networks and measure how downstream processing transforms these perturbations. These "dreaming" experiments probe what happens when a network's internal state is perturbed away from its learned manifold. The results show that mid-layer activations are most susceptible to geometric reshaping. This is consistent with SST's prediction that intermediate representations carry the richest state space structure, and it identifies an intervention window for representational control.

### Cross-Domain Binding

A central question in consciousness science is how the brain binds information across sensory modalities into a unified experience. I probe an analogous question in LLMs: when activations from one domain (e.g., visual descriptions) are injected into a network processing another domain (e.g., auditory descriptions), does the network produce bound, coherent representations or disjoint outputs? I measure binding through geometric and topological signatures in the resulting activation spaces.

### Function Space Topology Across Architectures

SST predicts that the topological structure of delay coordinate embeddings is what matters for consciousness, not the specific hardware or architecture. I test this by comparing representational topology across LSTM, Transformer, and Mamba architectures trained on identical tasks. The question: are topological invariants (persistent homology of activation manifolds) preserved across architectures despite radical differences in mechanism? If so, that is evidence for SST's architecture-independence claim.

### Current Projects

- Systematic comparison of representational geometry across LSTM, Transformer, and Mamba architectures
- Perturbation experiments probing cross-modal binding in multi-layer networks
- Topological data analysis of activation manifolds under dreaming-like perturbation regimes
- Connecting LLM interpretability findings back to SST's mathematical framework
