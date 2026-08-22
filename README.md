# Nayan - Gaze-Controlled Financial Platform

**"Where your eyes become your voice"**

## 🎯 Problem Statement

India has 26.8 million persons with disabilities, yet only 5% of digital platforms are accessible. For those with dyskinetic cerebral palsy, ALS, and other severe motor impairments, traditional input methods (keyboard, mouse, touchscreen) and even voice control are often impossible. They need a sighted assistant for every financial transaction — no privacy, no dignity, no autonomy.

**Nayan** changes this: the first browser-based, gaze-controlled financial interface that requires only a standard webcam.

## ✨ Key Features

- **Gaze Tracking**: Real-time eye movement tracking using WebGazer.js + MediaPipe FaceMesh 
- **Blink Detection**: Eye Aspect Ratio (EAR) algorithm for blink-as-click functionality 
- **High-Contrast UI**: Large, accessible buttons designed for gaze interaction 
- **Core Financial Flows**:
  - Check balance
  - Send money (UPI integration demo)
  - Pay bills
  - Transaction history
- **Privacy-First**: All processing happens locally in the browser — no video data leaves your device 

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | Next.js 14 + TypeScript | Framework & routing  |
| Styling | Tailwind CSS | Rapid UI development  |
| Eye Tracking | WebGazer.js | Gaze prediction from webcam  |
| Face Detection | MediaPipe FaceMesh | 468 facial landmarks for EAR calculation  |
| State Management | Zustand | Lightweight state  |
| Audio Feedback | Web Speech API | Voice confirmation for actions  |
| Local Storage | localForage | User preferences & calibration  |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- A webcam

### Installation

```bash
# Clone the repository
git clone https://github.com/your-team/nayan.git
cd nayan

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
# Grant camera permissions when prompted
