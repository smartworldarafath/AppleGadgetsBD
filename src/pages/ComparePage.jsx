import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftRight, X, Plus, Check, ShoppingBag, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { PHONES, getPhoneBySlug } from '../data/phones';

export default function ComparePage() {
  const { compareList, toggleCompare, addToCart } = useApp();
  const [highlightDifferences, setHighlightDifferences] = useState(false);
  const [selectorOpenIndex, setSelectorOpenIndex] = useState(null);

  const comparedPhones = compareList.map(slug => getPhoneBySlug(slug)).filter(Boolean);

  const formatBDT = (amount) => `৳ ${amount.toLocaleString('en-IN')}`;

  const specRows = [
    { label: 'Price', key: 'price', render: (p) => <span className="font-black text-neutral-900">{formatBDT(p.price)}</span> },
    { label: 'Brand', key: 'brandName', render: (p) => p.brandName },
    { label: 'Status', key: 'status', render: (p) => <span className="font-bold text-emerald-600">{p.status}</span> },
    { label: 'Display', key: 'display', render: (p) => p.specs.display },
    { label: 'Processor', key: 'processor', render: (p) => p.specs.processor },
    { label: 'Main Camera', key: 'mainCamera', render: (p) => p.specs.mainCamera },
    { label: 'Front Camera', key: 'selfieCamera', render: (p) => p.specs.selfieCamera },
    { label: 'RAM & Memory', key: 'ram', render: (p) => p.specs.ram },
    { label: 'Battery & Charge', key: 'battery', render: (p) => p.specs.battery },
    { label: 'Operating System', key: 'os', render: (p) => p.specs.os },
    { label: 'Network', key: 'network', render: (p) => p.specs.network },
    { label: 'Build & Weight', key: 'build', render: (p) => `${p.specs.build} • ${p.specs.weight}` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ArrowLeftRight className="w-5 h-5 text-[#F17E23]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F17E23]">Mobile Specs Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
            Compare Mobile Phones
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Analyze specifications, processors, battery, and pricing side-by-side.
          </p>
        </div>

        {comparedPhones.length > 1 && (
          <label className="flex items-center gap-2 text-xs font-bold text-neutral-800 bg-white p-2.5 rounded-xl border border-neutral-200 cursor-pointer shadow-xs">
            <input
              type="checkbox"
              checked={highlightDifferences}
              onChange={(e) => setHighlightDifferences(e.target.checked)}
              className="w-4 h-4 rounded accent-[#F17E23]"
            />
            <span>Highlight Spec Differences</span>
          </label>
        )}
      </div>

      {comparedPhones.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200 space-y-4">
          <ArrowLeftRight className="w-12 h-12 text-neutral-300 mx-auto" />
          <h3 className="text-lg font-bold text-neutral-800">No phones selected for comparison</h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            Click the compare button on any product card or choose a device to compare.
          </p>
          <Link
            to="/category/mobile-phone"
            className="inline-block px-5 py-2.5 bg-[#F17E23] text-white font-bold rounded-xl text-xs"
          >
            Browse All Phones
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Product Header Row */}
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/70">
                  <th className="p-4 sm:p-5 w-44 font-bold text-xs uppercase tracking-wider text-neutral-400">
                    Device
                  </th>
                  {comparedPhones.map((phone) => (
                    <th key={phone.id} className="p-4 sm:p-5 min-w-[220px] max-w-[280px] align-top">
                      <div className="relative flex flex-col items-center text-center">
                        <button
                          type="button"
                          onClick={() => toggleCompare(phone.id)}
                          className="absolute -top-2 -right-2 p-1.5 rounded-full bg-neutral-200 hover:bg-rose-100 hover:text-rose-600 text-neutral-600 transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>

                        <img
                          src={phone.image}
                          alt={phone.name}
                          className="w-24 h-24 object-contain mb-3"
                        />
                        <Link
                          to={`/product/${phone.slug}`}
                          className="font-bold text-sm text-neutral-900 hover:text-[#F17E23] transition-colors"
                        >
                          {phone.name}
                        </Link>
                        <span className="text-xs font-black text-[#F17E23] mt-1">
                          {formatBDT(phone.price)}
                        </span>

                        <button
                          type="button"
                          onClick={() => addToCart(phone)}
                          className="mt-3 w-full py-2 px-3 bg-neutral-900 hover:bg-[#F17E23] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </th>
                  ))}

                  {/* Add More Phone Slot if < 4 */}
                  {comparedPhones.length < 4 && (
                    <th className="p-4 sm:p-5 min-w-[200px] align-middle text-center border-l border-neutral-100">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setSelectorOpenIndex(selectorOpenIndex === 'add' ? null : 'add')}
                          className="w-full py-8 border-2 border-dashed border-neutral-200 hover:border-[#F17E23] rounded-2xl flex flex-col items-center justify-center gap-2 text-neutral-500 hover:text-[#F17E23] transition-colors"
                        >
                          <Plus className="w-6 h-6" />
                          <span className="text-xs font-bold">+ Add Phone</span>
                        </button>

                        {/* Add phone dropdown */}
                        {selectorOpenIndex === 'add' && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-neutral-200 p-2 z-30 max-h-60 overflow-y-auto text-left">
                            {PHONES.filter(p => !compareList.includes(p.id)).map(p => (
                              <button
                                key={p.id}
                                type="button"
                                onClick={() => {
                                  toggleCompare(p.id);
                                  setSelectorOpenIndex(null);
                                }}
                                className="w-full p-2 text-xs font-semibold text-neutral-800 hover:bg-orange-50 hover:text-[#F17E23] rounded-xl flex items-center gap-2"
                              >
                                <img src={p.image} alt={p.name} className="w-6 h-6 object-contain" />
                                <span className="truncate">{p.name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </th>
                  )}
                </tr>
              </thead>

              {/* Specs Rows */}
              <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
                {specRows.map((row) => {
                  const values = comparedPhones.map(p => row.render(p));
                  const isDifferent = highlightDifferences && new Set(comparedPhones.map(p => String(p.specs?.[row.key] || p[row.key]))).size > 1;

                  return (
                    <tr
                      key={row.label}
                      className={`hover:bg-neutral-50/60 transition-colors ${
                        isDifferent ? 'bg-amber-50/70 font-semibold' : ''
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-bold text-neutral-700 bg-neutral-50/50">
                        {row.label}
                      </td>
                      {comparedPhones.map((phone) => (
                        <td key={phone.id} className="p-4 sm:p-5 text-neutral-800">
                          {row.render(phone)}
                        </td>
                      ))}
                      {comparedPhones.length < 4 && <td className="p-4 sm:p-5 bg-neutral-50/30"></td>}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
