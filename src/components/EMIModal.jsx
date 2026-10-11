import React, { useState } from 'react';
import { X, Calculator, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BANKS = [
  'BRAC Bank', 'The City Bank (Amex)', 'Eastern Bank PLC (EBL)',
  'Standard Chartered', 'Mutual Trust Bank (MTB)', 'Dutch-Bangla Bank',
  'Prime Bank', 'UCB', 'Dhaka Bank', 'Standard Bank'
];

export default function EMIModal({ isOpen, onClose, product, selectedPrice }) {
  const [selectedBank, setSelectedBank] = useState('BRAC Bank');
  const [selectedTenure, setSelectedTenure] = useState(12);
  const [downPayment, setDownPayment] = useState(0);

  if (!product) return null;

  const basePrice = selectedPrice || product.price;
  const loanAmount = Math.max(0, basePrice - downPayment);
  const monthlyEMI = Math.round(loanAmount / selectedTenure);

  const formatBDT = (val) => `৳ ${val.toLocaleString('en-IN')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-orange-100 text-[#F17E23] flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-base">0% EMI Calculator</h3>
                  <p className="text-xs text-neutral-500">{product.name} • Total {formatBDT(basePrice)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* Bank Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Select Your Bank:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto p-1 border border-neutral-200 rounded-xl bg-neutral-50/50">
                  {BANKS.map((bank) => (
                    <button
                      key={bank}
                      type="button"
                      onClick={() => setSelectedBank(bank)}
                      className={`p-2 rounded-lg text-xs font-semibold text-left transition-colors flex items-center justify-between ${
                        selectedBank === bank
                          ? 'bg-[#F17E23] text-white shadow-xs'
                          : 'bg-white text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <span className="truncate">{bank}</span>
                      {selectedBank === bank && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tenure Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Select EMI Tenure (Months):
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                  {[3, 6, 9, 12, 18, 24, 36].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setSelectedTenure(months)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedTenure === months
                          ? 'bg-neutral-900 text-white shadow-sm ring-2 ring-neutral-900'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {months} Mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Installment Result Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100/50 border border-orange-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-neutral-600 block">Estimated Monthly Installment:</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#F17E23]">
                      {formatBDT(monthlyEMI)} <span className="text-xs font-medium text-neutral-500">/ month</span>
                    </span>
                  </div>
                  <div className="text-right text-xs text-neutral-500">
                    <p>Tenure: <strong>{selectedTenure} Months</strong></p>
                    <p>Interest: <strong className="text-emerald-600">0% Regular EMI</strong></p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-500 space-y-1.5 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                <div className="flex items-center gap-1.5 text-neutral-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>EMI Terms & Conditions:</span>
                </div>
                <p>• Credit card limit of {selectedBank} must cover the total amount of {formatBDT(basePrice)}.</p>
                <p>• Available at all Apple Gadgets BD retail outlets and online ordering.</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-[#F17E23] hover:bg-[#d96a14] text-white font-bold text-sm rounded-xl transition-colors shadow-md"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
