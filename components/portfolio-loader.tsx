'use client';

import { useEffect, useState } from 'react';

export default function PortfolioLoader() {
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + Math.floor(Math.random() * 5) + 1, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a101e]">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fec544] text-[#0a101e] text-2xl font-bold shadow-md">
        TP
      </div>

      {/* Text */}
      <p className="mb-3 text-sm font-medium text-[#fec544]">
        Loading portfolio....
      </p>

      {/* Progress bar */}
      {/* <div className="h-1 w-56 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full bg-[#fec544] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div> */}
    </div>
  );
}
