# shahlab.org - Project State

## Last Updated: 2026-06-16

### 2026-06-16 Publications update
- Preprint links now labeled "Preprint" instead of "Open Access". Template logic in `themes/shahlab/layouts/publications/list.html` keys off `type: preprint`; consciousness-science.md preprint links (CDM, smooth embeddings, Chinese Rooms) updated by hand.
- Published-paper open-access copies (JCS, NDPLS) keep the "Open Access" label.
- Caveats paper updated from bioRxiv preprint to published: Neuroscience of Consciousness 2026;2026(1):niag027, doi 10.1093/nc/niag027 (verified via Crossref/OUP). Updated in both publications.yaml and consciousness-science.md.
- Added two 2026 journal articles (verified via Crossref): El-Khatib et al., intraoperative mechanical power and PPCs (J Anesth Analg Crit Care, doi 10.1186/s44158-026-00423-6); Mudumbai et al., LLMs for semantic interoperability (J Med Syst 2026;50, PMID 42133097, doi 10.1007/s10916-026-02404-2).
- Steck phosphate/lactic-acidosis paper was already present; not duplicated.

## Last Updated: 2026-04-07

## Status: Live (pending DNS propagation)

### What Was Built
- Hugo static site with custom "shahlab" theme (navy/teal academic design)
- 21 pages: homepage, 5 research areas, publications, software, collaborators, news
- 75 publications from Google Scholar + CV in data/publications.yaml
- Photos: headshot.jpg, vikas_dangerboy.jpg in static/img/
- GitHub Actions auto-deploy workflow on push to main

### Repos
- **zoanthal/shahlab.org** - Main Hugo site, deploys via GitHub Actions
- **zoanthal/orslab.org** - Redirect repo (meta-refresh to shahlab.org)

### DNS Status (as of 2026-04-07 evening)
- shahlab.org: A records changed at eNom from Google IPs to GitHub Pages IPs. Waiting for propagation.
- orslab.org: A records set at GoDaddy to GitHub Pages IPs. Brand new domain, waiting for propagation.
- Both have GitHub Pages enabled with custom domains configured.
- MX records for shahlab.org Google Workspace email are untouched.

### Content Tone
- First person, direct, professorial. Not blog-casual, not corporate.
- Consciousness science and perioperative data science are the two main research programs.
- No em dashes anywhere. Short sentences. No hedging or throat clearing.

### Key Decisions Made
- "O'Reilly-Shah Lab" branding (not "Shah Lab")
- Custom Hugo theme rather than HugoBlox (simpler, fully owned)
- No abstracts section on publications page (link to Google Scholar instead)
- Collaborators page has Active/Former sections for both collaborators and mentees
- Monica Vavilala removed from collaborators
- Craig Jabaley, Philip Chung (now at Stanford), Andrew Walters moved to Former
- Ian Jones added as active mentee

### Config Details
- hugo.toml: email voreill@uw.edu, GitHub zoanthal, Scholar ID 1iS-kdwAAAAJ
- Google Fonts: Inter + JetBrains Mono
- Color scheme: navy #1a1a2e, teal #16a085

### To Do
- Verify DNS propagation for both domains
- Verify HTTPS certificates auto-provision
- Review site content in browser once live
- Consider adding GoatCounter analytics
- Add more photos if desired
- Update Google Scholar ID link in footer template (currently uses config param)
