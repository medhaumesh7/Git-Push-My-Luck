import React, { useState } from 'react';
import { Dashboard } from '@/components/Dashboard';
import { Calibration } from '@/components/Calibration';

export default function Home() {
  const [calibrated, setCalibrated] = useState(false);

  if (!calibrated) {
    return <Calibration onComplete={() => setCalibrated(true)} />;
  }

  return <Dashboard />;
}