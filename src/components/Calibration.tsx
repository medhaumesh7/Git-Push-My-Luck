"use client";

import React, { useState } from 'react';

export function Calibration({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const points = [
    { x: 20, y: 20 }, { x: 50, y: 20 }, { x: 80, y: 20 },
    { x: 20, y: 50 }, { x: 50, y: 50 }, { x: 80, y: 50 },
    { x: 20, y: 80 }, { x: 50, y: 80 }, { x: 80, y: 80 }
  ];

  const nextStep = () => {
    if (step < points.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-2">👁️ Calibrate</h1>
      <p className="text-gray-400 mb-6">Look at the dot and blink</p>

      <div className="relative bg-gray-900 rounded-2xl w-[300px] h-[300px]">
        {points.map((point, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 rounded-full transition-all duration-300 ${index === step ? 'bg-green-500 scale-150' : 'bg-gray-600 scale-75'
              }`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          />
        ))}
      </div>

      <button onClick={nextStep} className="mt-6 bg-green-500 text-black px-6 py-2 rounded-xl">
        {step === points.length - 1 ? 'Done ✅' : 'Next'}
      </button>
      <p className="text-gray-500 text-sm mt-2">Step {step + 1}/{points.length}</p>
    </div>
  );
}