'use client';

import { motion } from 'motion/react';

function LoadingCircleSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-custom-navy-blue z-[9999]">
      <motion.div
        className="w-12 h-12 rounded-full border-4 bg-custom-navy-blue border-custom-yellow will-change-transform"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

export default LoadingCircleSpinner;
