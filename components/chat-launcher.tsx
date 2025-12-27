'use client';

import { useState, useEffect } from 'react';
import ChatWindow from './chat-window';

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);

  // ✅ Disable body scroll on mobile when chat is open
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Tailwind md breakpoint

    if (open && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Tooltip bubble */}
      {!open && (
        <div className="fixed bottom-8 right-24 z-40 bg-white text-[#121c30] px-4 py-2 rounded-full shadow-md flex items-center gap-2">
          <span className="text-sm font-medium text-[#121c30]">
            How can I help you?
          </span>
          <span>👋</span>
        </div>
      )}

      {/* Chat button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#fec544] shadow-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="28" fill="#fec544" />
          <path
            d="M14 18h24a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H26l-6 6v-6h-2a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4z"
            fill="white"
          />
        </svg>
      </button>

      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
