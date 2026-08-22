"use client";

import React, { useState, useEffect } from 'react';

export function Dashboard() {
  const [balance, setBalance] = useState(25000);
  const [feedback, setFeedback] = useState('Look at a button and blink');
  const [gazePoint, setGazePoint] = useState<{ x: number, y: number } | null>(null);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    // Load WebGazer
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/webgazer@2.2.0/dist/webgazer.min.js';
    script.onload = () => {
      setStatus('Loading camera...');
      // @ts-ignore
      window.webgazer
        .setGazeListener((data: any) => {
          if (data) {
            setGazePoint({ x: data.x, y: data.y });
            setStatus('Tracking ✅');
          }
        })
        .begin()
        .then(() => {
          setStatus('Tracking ✅');
        })
        .catch((err: any) => {
          console.error('Camera error:', err);
          setStatus('Camera error - allow permission');
        });
    };
    document.body.appendChild(script);

    return () => {
      // @ts-ignore
      if (window.webgazer) window.webgazer.end();
    };
  }, []);

  const handleAction = (action: string) => {
    if (action === 'balance') {
      setFeedback(`💰 Balance: ₹${balance}`);
    } else if (action === 'send') {
      setBalance(balance - 500);
      setFeedback('📤 ₹500 sent successfully!');
    } else if (action === 'bills') {
      setFeedback('📋 Bill paid! ✅');
    } else if (action === 'history') {
      setFeedback('📜 Last: ₹500 sent to Kirana Store');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">👁️ Nayan</h1>
        <p className="text-gray-400 text-sm">Status: {status}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <button onClick={() => handleAction('balance')} className="bg-gray-800 p-8 text-2xl rounded-2xl hover:bg-gray-700">
          💰 Balance
        </button>
        <button onClick={() => handleAction('send')} className="bg-gray-800 p-8 text-2xl rounded-2xl hover:bg-gray-700">
          📤 Send
        </button>
        <button onClick={() => handleAction('bills')} className="bg-gray-800 p-8 text-2xl rounded-2xl hover:bg-gray-700">
          📋 Bills
        </button>
        <button onClick={() => handleAction('history')} className="bg-gray-800 p-8 text-2xl rounded-2xl hover:bg-gray-700">
          📜 History
        </button>
      </div>

      <div className="max-w-md mx-auto mt-6 bg-gray-900 p-4 rounded-2xl min-h-[80px]">
        <p className="text-center">{feedback}</p>
      </div>

      {gazePoint && (
        <div className="fixed w-3 h-3 bg-green-500 rounded-full pointer-events-none"
          style={{ left: gazePoint.x - 6, top: gazePoint.y - 6 }} />
      )}
    </div>
  );
}