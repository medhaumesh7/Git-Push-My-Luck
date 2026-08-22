import { useEffect, useState } from 'react';

export function useWebGazer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'tracking' | 'error'>('idle');
  const [gazePoint, setGazePoint] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const loadWebGazer = async () => {
      try {
        setStatus('loading');

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/webgazer@2.2.0/dist/webgazer.min.js';
        script.async = true;

        script.onload = () => {
          // @ts-ignore
          const webgazer = window.webgazer;
          if (webgazer) {
            webgazer
              .setGazeListener((data: any) => {
                if (data) {
                  setGazePoint({ x: data.x, y: data.y });
                }
              })
              .begin()
              .then(() => {
                setStatus('tracking');
              });
          }
        };

        script.onerror = () => setStatus('error');
        document.body.appendChild(script);

        return () => {
          // @ts-ignore
          if (window.webgazer) {
            // @ts-ignore
            window.webgazer.end();
          }
        };
      } catch (error) {
        setStatus('error');
        console.error('WebGazer error:', error);
      }
    };

    loadWebGazer();
  }, []);

  return { status, gazePoint };
}