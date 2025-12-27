'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

type Props = {
  onClose: () => void;
};

export default function ChatWindow({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Hi! How can I help you today?',
    },
  ]);

  const [input, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 🔒 LOCK / UNLOCK PAGE SCROLL WHEN CHAT OPENS
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = '';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = '';
    };
  }, []);

  // ✅ Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `You said: "${text}"`,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <div
      className="
        fixed inset-0 lg:inset-auto
        lg:bottom-4 lg:right-6
        w-full lg:w-[360px]
        h-[100svh] lg:h-[520px]
        bg-white
        rounded-none lg:rounded-2xl
        shadow-2xl
        flex flex-col
        overflow-hidden
        z-[200]
      ">
      {/* Header */}
      <div className="bg-[#121c30] text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold text-lg">AI Bot</span>
        <button onClick={onClose} className="text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* Messages (ONLY place that scrolls) */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}>
            <div
              className={`max-w-[75%] px-3 py-2 text-sm rounded-xl break-words
              ${
                msg.sender === 'user'
                  ? 'bg-[#808080] text-white rounded-br-none'
                  : 'bg-[#121c30] text-white rounded-bl-none'
              }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-2 flex items-end gap-2 m-2.5 border border-[#121c30] rounded-full bg-white">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage(input);
            }
          }}
          placeholder="Type your message..."
          rows={1}
          className="flex-1 resize-none text-sm outline-none max-h-24 text-[#0a101e] m-auto"
        />

        <button
          onClick={() => sendMessage(input)}
          className="bg-[#121c30] px-3 py-2 rounded-full font-semibold text-white">
          ➤
        </button>
      </div>
    </div>
  );
}
