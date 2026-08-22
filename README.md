--- START OF DOCUMENT ---

git_push_my_luck_Documentation

Public Link to Solution Document: [INSERT YOUR GOOGLE DRIVE PUBLIC LINK HERE]


APPLICATION DESCRIPTION & FUNCTIONALITY

ANUKOOL is an AI-powered, multi-modal digital accessibility and inclusion platform that transforms complex digital services into simple, voice-first, gaze-controlled, and cognitively accessible experiences for everyone. Built for the 3.5+ crore Indians living with disabilities, senior citizens, vernacular-language speakers, and low-literacy users, the platform integrates five core assistive technologies into one unified citizen-centric experience.

The platform's most distinctive feature is its gaze-controlled interface, specifically designed for individuals with dyskinetic cerebral palsy (DCP) who cannot reliably use a keyboard, mouse, touchscreen, or even voice control. Using Google's MediaPipe FaceLandmarker, the system tracks 478 facial points, iris position, head yaw/pitch, and blink blendshape scores in real-time. A ridge regression model, calibrated through a 5-point on-screen calibration, maps eye features to screen coordinates. The interaction model deliberately avoids pixel-accurate cursor control; instead, users navigate via large zone tiles — gaze to highlight, sustained blink (450ms) to confirm. This two-step confirmation guards against accidental selections from involuntary movements, making it genuinely usable for people with DCP.

Additional features include: Indic multilingual voice assistance through Sarvam AI (Hindi, Tamil, Telugu, Kannada, Bengali); the SteadyTap Shield for adaptive high-contrast, motor-friendly, and colorblind-accessible interfaces; Tesseract.js-based document OCR with cognitive simplification that converts jargon-filled documents into plain-language summaries and action items; an accessible banking hub with scam-awareness simulations; a WCAG 2.1 AA/GIGW accessibility audit engine; and Emergency Assist with one-tap SOS and trusted-circle alerts.

The platform is built on Next.js 14, React 18, TypeScript, Tailwind CSS, Supabase/PostgreSQL, MongoDB Atlas, and the Web Speech API. All gaze-tracking and voice features run client-side in the browser, ensuring privacy and offline functionality for core interactions.


SOLUTION TO THE PROBLEM STATEMENT

Over 1.3 billion people globally, including tens of millions in India, struggle to access digital services because interfaces are not designed for them. Complex government portals, confusing banking apps, and language barriers exclude people with visual, cognitive, and motor impairments. For individuals with dyskinetic cerebral palsy, even basic tasks like using a mouse or touchscreen are impossible. If speech is also affected, voice-based interfaces become unreliable due to involuntary vocalizations.

Our solution, ANUKOOL, is a comprehensive platform that bridges this digital divide. It combines a highly adaptive user interface for visual and motor needs, a powerful cognitive simplifier for document understanding, and a crucial gaze-tracking module. This module uses a standard webcam to translate eye movements and sustained blinks into navigation and selection, enabling independent digital interaction for those who cannot use their hands or voice. The large-zone tile interface with two-step confirmation (gaze + blink) is specifically designed to accommodate the involuntary movements characteristic of dyskinetic CP, making it genuinely usable rather than just technically impressive.

By integrating these features, ANUKOOL ensures that no citizen is left behind in the digital economy, empowering users with confidence, independence, and dignity.

GitHub Repository Link: [INSERT YOUR GITHUB REPO LINK HERE]


PROMPTS IMPLEMENTED

The development of ANUKOOL was guided by deep research prompts to ensure genuine inclusivity, usability, and impact.

1. Target Audience Identification: What specific disability makes people use digital services significantly less, and how many people in India are affected by it?

Implementation: Research identified dyskinetic cerebral palsy (DCP) and other severe motor impairments as the most significant barriers to digital access. In India, over 2.21% of the population (approx. 3.5 crore people) live with a disability, with a large portion facing motor and speech challenges. This directly led to the integration of the eye-gaze tracking module as a primary interaction method.

2. Interaction Design for Involuntary Movements: How can we design a gaze interface that works for people with dyskinetic CP, where both eye and head movements may be involuntary?

Implementation: We rejected pixel-accurate cursor control as the wrong UX. Instead, we implemented large-zone tile navigation with a two-step confirmation: gaze to highlight, sustained 450ms blink to confirm. This filters out reflexive blinks (~100-150ms) and accidental selections from involuntary movement. The design prioritizes usability over flashy demo appeal.

3. User Interface Personalization: What colour palettes and design patterns suit users with different visual and cognitive disabilities?

Implementation: The platform incorporates high-contrast yellow/black themes, dark mode, high-visibility blue, and dyslexia-friendly font options. The SteadyTap Shield provides oversized touch targets, click debouncing, and simplified navigation to reduce cognitive load.

4. Unified System Architecture: How can we combine multiple assistive technologies (voice, vision, cognitive, gaze) without overwhelming the user?

Implementation: We designed a unified dashboard where users can seamlessly switch between voice commands, adaptive UI themes, document scanning, and gaze-tracking mode — all from one interface, preventing the need to learn multiple applications.

5. Voice & Language Inclusivity: How can we provide a natural voice interface for Indians who speak diverse regional languages?

Implementation: Integration with Sarvam AI for high-quality Indic STT, TTS, and translation in Hindi, Tamil, Telugu, Kannada, and Bengali, with Web Speech API as a browser fallback.

6. Cognitive Accessibility: How can we make complex legal/government documents understandable for people with cognitive disabilities or low literacy?

Implementation: A Cognitive Simplification Engine combined with Tesseract.js OCR extracts text from documents and converts it into simple summaries, critical dates, amounts, and clear action steps, using AI prompts designed for plain-language output.

7. Technological Feasibility & Reach: Can effective gaze-tracking be built without expensive specialized hardware?

Implementation: The gaze-tracking system runs on a standard webcam using Google's MediaPipe FaceLandmarker (478-point face mesh) and a ridge regression model calibrated via a 5-point on-screen setup. This makes the technology accessible and affordable.

8. Financial & Physical Security: How can we make digital banking safe for vulnerable users who are prime scam targets?

Implementation: The Accessible Banking & Scam Protection module provides split-screen comparisons, fraud-detection simulations for phishing and OTP scams, and one-tap Emergency Assist with trusted-circle alerts and GPS location sharing.

9. Sustainability & Compliance: How can we ensure long-term viability while helping other organizations become accessible?

Implementation: The Digital Accessibility Audit Engine scans websites against WCAG 2.1 AA and GIGW guidelines, providing a B2B/B2G revenue stream and directly supporting India's Rights of Persons with Disabilities Act, 2016.

10. Calibration & Adaptability: How can we handle varying motor symptoms that differ significantly from person to person?

Implementation: Hardcoded timings (450ms blink threshold, dwell times) are v1 compromises. The roadmap includes per-user settings screens to adjust dwell time and blink thresholds, and calibration quality logging to prompt re-calibration when residual error is poor.

--- END OF DOCUMENT ---
