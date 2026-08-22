import { useEffect, useState, useRef } from 'react';
import webgazer from 'webgazer';

// Eye Aspect Ratio threshold (tuned for intentional blinks)
const EAR_THRESHOLD = 0.23;
const BLINK_DURATION_MIN = 100; // ms
const BLINK_DURATION_MAX = 400; // ms

export function useBlinkDetection() {
  const [blinkDetected, setBlinkDetected] = useState(false);
  const [earValue, setEarValue] = useState<number | null>(null);
  const blinkStartTime = useRef<number | null>(null);
  const isBlinking = useRef(false);

  useEffect(() => {
    // WebGazer provides EAR data through its listener
    const blinkHandler = (data: any) => {
      if (data && data.eye && data.eye.l and data.eye.r) {
        // Calculate average EAR from both eyes
        const leftEAR = data.eye.l;
        const rightEAR = data.eye.r;
        const avgEAR = (leftEAR + rightEAR) / 2;
        setEarValue(avgEAR);

        // Detect intentional blink
        if (avgEAR < EAR_THRESHOLD) {
          if (!isBlinking.current) {
            isBlinking.current = true;
            blinkStartTime.current = Date.now();
          }
        } else if (isBlinking.current && blinkStartTime.current) {
          const blinkDuration = Date.now() - blinkStartTime.current;
          if (blinkDuration >= BLINK_DURATION_MIN && blinkDuration <= BLINK_DURATION_MAX) {
            setBlinkDetected(true);
            setTimeout(() => setBlinkDetected(false), 200); // Debounce
          }
          isBlinking.current = false;
          blinkStartTime.current = null;
        }
      }
    };

    // Register blink handler
    // Note: Actual implementation requires accessing WebGazer's internal data
    // This is a simplified version - production would use a custom listener
    
    return () => {
      // Cleanup
    };
  }, []);

  return { blinkDetected, earValue };
}
