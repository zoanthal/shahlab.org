---
title: "Privacy Policy — Anesthesiologists"
date: 2026-04-29
url: "/home/privacy-policy/"
summary: "Privacy policy for the Anesthesiologists and Opioid Converter mobile applications."
---

**Effective date:** April 29, 2026
**Last updated:** April 29, 2026

This is the privacy policy for the **Anesthesiologists** and **Opioid Converter** mobile applications (the "App"), published by Vikas O'Reilly-Shah, MD, PhD, and distributed through the Apple App Store and Google Play.

The short version: **the App does not collect, transmit, sell, or share any personal data.** All calculations, favorites, and settings live on your device and never leave it.

The longer version follows.

---

## 1. What we collect

**Nothing.** The App has no user accounts, no login, no analytics, no crash-reporting telemetry, no advertising, and no tracking SDKs. We do not collect any of the following:

- Names, email addresses, phone numbers, or any contact information
- Patient information, protected health information (PHI), or any clinical data you enter for a calculation
- Device identifiers (IDFA, advertising ID, IMEI, MAC address)
- Location data
- Usage statistics, screen views, button taps, session duration
- Diagnostic / crash logs (the App does not phone home; if it crashes, we never hear about it)
- Browser cookies (the App is a native mobile app, not a website)
- Anything else

This is verifiable: the App's source repository is private, but the App ships with no analytics or tracking dependencies, and Apple's privacy manifest (`PrivacyInfo.xcprivacy`) declares zero collected data types. Google Play's Data Safety form for the App likewise declares no data collected and no data shared.

## 2. Data stored on your device

The App stores the following entirely on your device, in standard operating-system storage (iOS NSUserDefaults / Android SharedPreferences):

- Drug favorites you've starred
- Display preferences (font size, list density, accessibility toggles)
- Last-used inputs for calculators (e.g. patient age and weight you typed)

This data never leaves your device. It is not backed up to our servers because we do not operate any servers. If your device backs up your apps to iCloud or Google account backup, your operating system may include this data in those backups, governed by Apple's or Google's privacy policy, not ours. Uninstalling the App removes all of this data.

## 3. iOS required-reason API declarations

Apple requires apps to declare why they use certain low-level system APIs ("required reason APIs"). The App declares the following uses, all benign and standard:

- **UserDefaults** — to store the favorites and settings described above (Apple reason code CA92.1, "access info from the same app")
- **FileTimestamp** — to display file timestamps to the user when relevant (reason C617.1)
- **SystemBootTime** — to measure time elapsed for in-app calculator countdown timers (reason 35F9.1)
- **DiskSpace** — to display disk space to the user when relevant (reason E174.1)

None of these APIs collect, transmit, or expose personal data.

## 4. Permissions

The App may request the following operating-system permissions at the moment a feature needs them. Granting or denying any of these only affects your local experience; nothing is sent off-device:

- **Speech synthesis** (text-to-speech, used by the timer audio cues feature in the Code page) — uses your operating system's built-in voice engine, no audio leaves the device
- **Share sheet** — when you tap a share icon to copy a calculated value or send it via your messaging app of choice, the destination app is selected by you and the data path is yours, not ours
- **Open external link** — when you tap a reference link in the App, it opens in your default browser; once it opens, you have left the App and the destination website's privacy policy applies

The App does not request access to your camera, microphone, contacts, calendar, photos, location, motion sensors, or health data.

## 5. Children

The App is intended for medical professionals and trainees. It is not directed at children under 13 (or under 16 in the EEA / UK). The App does not knowingly collect data from anyone, regardless of age.

## 6. HIPAA and medical-data disclaimer

The App is a clinical reference and calculation aid. It is **not**:

- A medical device under FDA, MHRA, EMA, or other regulatory definitions
- A substitute for clinical judgment
- A diagnostic, therapeutic, or treatment-recommendation system
- A platform for entering or storing patient-identifiable information

Any patient values you enter (age, weight, drug doses) are used for the calculation in front of you and may be cached locally as the "last-used inputs" described in section 2. They are not transmitted off device. Even so, **do not enter information that identifies a specific patient.** The App is a calculator; the values you enter should be treated like notes on a piece of scratch paper.

## 7. Third parties

The App contains no third-party SDKs, no advertising networks, no analytics services, and no trackers. We do not sell, rent, or share any information with any third party because we do not collect any information.

## 8. Security

Because we do not collect data, the App has no server-side security posture for personal information — there is no server. Data on your device is protected by your device's own security mechanisms (device passcode, biometric lock, full-disk encryption on modern iOS and Android).

## 9. Changes to this policy

If this policy ever changes, the new version will be posted at the same URL with an updated "Last updated" date. Material changes will be summarized at the top of the page. Continued use of the App after a material change constitutes acceptance of the new policy.

## 10. Contact

Questions, concerns, or correction requests:

**Vikas O'Reilly-Shah, MD, PhD**
Email: vikas.shah.1976@gmail.com

The App is published under the Apple Developer team **Vikas O'Reilly-Shah (57D6Y2GJ8A)** and the corresponding Google Play Developer account.
