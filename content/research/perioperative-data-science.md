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

Collaborative work published in *Circulation* (Perry et al., 2024) developed machine learning models for predicting out-of-hospital cardiac arrest from electronic health record data. The models identify temporal risk patterns and high-risk phenotypes that precede arrest events.

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

### Selected Publications

- Chung P, Fong CT, Walters AM, Aghaeepour N, Yetisgen M, O'Reilly-Shah VN. Large language model capabilities in perioperative risk prediction and prognostication. *JAMA Surgery*, 2024. PMID: 38837145
- Perry J, Brody JA, Fong C, Sunshine JE, O'Reilly-Shah VN, et al. Predicting out-of-hospital cardiac arrest in the general population using electronic health records. *Circulation*, 2024. PMID: 38860364
- Chung P, Fong CT, Walters AM, Yetisgen M, O'Reilly-Shah VN. Prediction of ASA Physical Status Classification from preoperative clinical text narratives using NLP. *BMC Anesthesiology*, 2023. PMID: 37667258
- O'Reilly-Shah VN, Gentry KR, Walters AM, Zivot J, Anderson CT, Tighe PJ. Bias and ethical considerations in machine learning and the automation of perioperative risk assessment. *British Journal of Anaesthesia*, 2020. PMID: 32838979

[Full publication list](/publications/)
