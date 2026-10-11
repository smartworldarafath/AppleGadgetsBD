import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveSupportWidget() {
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'support', text: 'স্যার, কিভাবে সহযোগিতা করতে পারি?' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const userMsg = inputText.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'support',
          text: 'ধন্যবাদ! আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন অথবা সরাসরি হটলাইনে কল করুন: 09678148148'
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Speech Bubble */}
      <AnimatePresence>
        {bubbleVisible && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200/90 py-2.5 px-3.5 pr-8 relative max-w-[240px] text-xs font-medium text-gray-800 leading-snug cursor-pointer select-none"
            onClick={() => setChatOpen(true)}
          >
            <span>স্যার, কিভাবে সহযোগিতা করতে পারি?</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setBubbleVisible(false);
              }}
              className="absolute top-1.5 right-2 text-gray-400 hover:text-gray-700 text-sm font-bold leading-none p-1 cursor-pointer"
              title="Close"
            >
              ×
            </button>
            {/* Bubble Tail */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gray-200 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Avatar Button */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          className="relative size-13 md:size-14 rounded-full overflow-hidden shadow-xl border-2 border-white ring-2 ring-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer bg-neutral-100"
          title="Customer Support"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
            alt="Support Agent"
            className="w-full h-full object-cover object-center"
          />
        </button>
        {/* Red Online Indicator Dot */}
        <span className="absolute top-0 right-0 size-3.5 bg-red-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Chat Popover Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative size-10 rounded-full overflow-hidden border border-white/40">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 border border-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Apple Gadgets BD</h4>
                  <p className="text-[11px] text-green-400">অনলাইন সাপোর্ট • সাধারণত তাৎক্ষণিক উত্তর দেয়</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-gray-300 hover:text-white text-xl p-1 font-bold cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#f8fafc] text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-orange-500 text-white rounded-br-xs'
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-xs'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="একটি বার্তা লিখুন..."
                className="flex-1 text-xs border border-gray-300 rounded-full px-3.5 py-2 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors"
              >
                পাঠান
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
