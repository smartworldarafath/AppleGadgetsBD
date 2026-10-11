import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Smartphone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { PHONES } from '../data/phones';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input on open
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Global Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Filter matching phones
  const filtered = query.trim() === ''
    ? PHONES.slice(0, 6) // suggestions
    : PHONES.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brandName.toLowerCase().includes(query.toLowerCase()) ||
        p.specs.processor.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelectProduct = (slug) => {
    setIsSearchOpen(false);
    navigate(`/product/${slug}`);
  };

  const formatBDT = (val) => `৳ ${val.toLocaleString('en-IN')}`;

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="relative border-b border-neutral-200 p-4 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#F17E23] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search mobile phones by model, brand, processor..."
                className="w-full text-sm sm:text-base text-neutral-900 placeholder-neutral-400 focus:outline-none bg-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 text-neutral-400 hover:text-neutral-700 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-xs font-semibold px-2 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-lg"
              >
                ESC
              </button>
            </div>

            {/* Quick search tags */}
            <div className="px-4 py-2.5 bg-neutral-50/80 border-b border-neutral-100 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
              <span className="text-neutral-400 font-semibold text-[11px] uppercase shrink-0">Popular:</span>
              {['iPhone 16 Pro Max', 'Galaxy S25 Ultra', 'Pixel 9 Pro', 'OnePlus 13', 'Xiaomi 14 Ultra'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:border-[#F17E23] hover:text-[#F17E23] transition-colors whitespace-nowrap text-xs shrink-0"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto p-3 divide-y divide-neutral-100">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-neutral-500 text-sm">
                  <p className="font-semibold text-neutral-800">No matching mobile phones found</p>
                  <p className="text-xs mt-1">Try searching for "iPhone", "Samsung", "Pixel", or "5G".</p>
                </div>
              ) : (
                filtered.map((phone) => (
                  <button
                    key={phone.id}
                    type="button"
                    onClick={() => handleSelectProduct(phone.slug)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-orange-50/60 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-12 h-12 object-contain p-1 rounded-xl bg-white border border-neutral-200/80 shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-neutral-900 group-hover:text-[#F17E23] transition-colors truncate">
                            {phone.name}
                          </span>
                          {phone.badge && (
                            <span className="text-[10px] bg-neutral-900 text-white font-bold px-1.5 py-0.5 rounded-full shrink-0">
                              {phone.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500 truncate mt-0.5">
                          {phone.specs.processor} • {phone.specs.display?.split(',')[0]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <div className="text-right">
                        <span className="font-black text-sm text-neutral-900">
                          {formatBDT(phone.price)}
                        </span>
                        {phone.regularPrice > phone.price && (
                          <p className="text-[10px] text-neutral-400 line-through">
                            {formatBDT(phone.regularPrice)}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F17E23] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="p-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 px-4">
              <span>Showing {filtered.length} mobile phones</span>
              <span className="text-[#F17E23] font-semibold">Press Enter to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
