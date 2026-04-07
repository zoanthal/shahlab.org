---
title: "Perioperative Data Science & Clinical Informatics"
date: 2024-01-01
weight: 1
summary: "Machine learning, NLP, and multicenter analytics for surgical and anesthetic outcomes."
icon: "📊"
---

I build and evaluate machine learning, NLP, and large-scale analytic methods to make perioperative care better. This work draws on electronic health record data ranging from single-center studies to national multicenter registries.

### LLMs for Clinical Risk Prediction

Philip Chung and I published work in *JAMA Surgery* evaluating large language models (GPT-4, Claude, open-source models) on perioperative risk prediction tasks. We compared LLM outputs against validated scoring systems and physician judgment. LLMs can approximate expert-level ASA Physical Status assignments from unstructured clinical text, but they exhibit systematic biases that must be characterized before clinical deployment.

### Cardiac Arrest Prediction

We built machine learning models for intraoperative cardiac arrest prediction using EHR data, published in *Circulation*. The models identify temporal risk patterns and high-risk phenotypes that precede arrest events. Cardiac arrest in the OR is rare but devastating. Early warning matters.

### ASA Physical Status and NLP

The ASA Physical Status classification is the most widely used preoperative risk metric, and it is subjectively assigned. I developed NLP and machine learning pipelines to predict ASA-PS directly from clinical text, demonstrating that automated systems can approximate physician-assigned scores while exposing systematic variation in how clinicians assign these scores.

### Perioperative Quality and MPOG

I chair the MPOG ASPIRE Pediatric Quality Committee. Through this role, I contribute to national perioperative quality benchmarking across dozens of academic medical centers. We develop and validate quality measures for pediatric anesthesia care. This is the infrastructure that makes evidence-based quality improvement possible at scale.

### Bias and Ethics in Automated Risk Assessment

Automated risk scores encode and amplify biases in training data. I study how race, ethnicity, insurance status, and socioeconomic factors interact with algorithmic risk prediction in perioperative settings.

### Current Projects

- Evaluation of open-source and commercial LLMs for clinical risk stratification
- GPT-4 classification of SAFE (safety event) reports (with Chris Eixenberger)
- National pediatric quality metric development through MPOG ASPIRE
- Disparities analysis in perioperative outcomes

### Key Publications

- Chung P, ..., O'Reilly-Shah VN. LLM performance on perioperative risk prediction tasks. *JAMA Surgery*, 2024.
- O'Reilly-Shah VN, et al. Cardiac arrest prediction from EHR data. *Circulation*.
- O'Reilly-Shah VN, et al. ASA Physical Status prediction using NLP. 2020.
- O'Reilly-Shah VN, et al. Bias in perioperative risk assessment.
