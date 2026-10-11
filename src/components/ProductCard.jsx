import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function ProductCard({ phone }) {
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [isAdded, setIsAdded] = useState(false);

  const formatBDT = (amount) => amount.toLocaleString('en-IN');

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(phone);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-gray-200/90 rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group relative"
    >
      <Link to={`/product/${phone.slug}`} className="block">
        {/* Product Image Area */}
        <div className="relative w-full h-44 sm:h-52 md:h-56 flex items-center justify-center overflow-hidden rounded-xl bg-white p-2">
          <motion.img
            alt={phone.name}
            loading="lazy"
            src={phone.image}
            onError={(e) => {
              e.currentTarget.src = 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png';
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Title */}
        <h3 className="mt-3 text-[16px] sm:text-[18px] font-semibold text-gray-900 leading-snug line-clamp-1 group-hover:text-orange-500 transition-colors">
          {phone.name}
        </h3>
      </Link>

      {/* Price Area */}
      <div className="mt-1.5">
        <div className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-none">
          ৳ {formatBDT(phone.price)}
        </div>

        <div className="flex items-center gap-2 mt-1.5 min-h-6">
          {phone.regularPrice > phone.price ? (
            <>
              <span className="line-through text-xs sm:text-sm text-gray-400 font-normal">
                ৳{formatBDT(phone.regularPrice)}
              </span>
              {phone.saveAmount > 0 && (
                <span className="bg-[#dcfce7] text-[#16a34a] text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full inline-flex items-center">
                  ৳ {formatBDT(phone.saveAmount)} OFF
                </span>
              )}
            </>
          ) : (
            <span className="text-xs text-gray-400 font-medium">Official Warranty</span>
          )}
        </div>
      </div>

      {/* Action Row: Shop Now (flex-1) + Cart (circle w-10 h-10) with Blur Effect */}
      <div className="flex items-center gap-2.5 mt-4 pt-1">
        {/* Shop Now Button with Transparent Blur Effect */}
        <Link
          to={`/product/${phone.slug}`}
          className="flex-1 py-2 px-4 rounded-full border border-gray-300 font-medium text-gray-900 text-sm sm:text-[15px] text-center transition-all duration-300 backdrop-blur-md bg-white/40 hover:bg-black hover:text-white hover:border-black active:scale-95 shadow-xs"
        >
          {phone.status === 'Pre Order' ? 'Pre Order' : 'Shop Now'}
        </Link>

        {/* Cart Button with Transparent Blur Effect */}
        <motion.button
          type="button"
          onClick={handleQuickAdd}
          whileTap={{ scale: 0.9 }}
          className={`size-10 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md shrink-0 cursor-pointer ${
            isAdded
              ? 'bg-[#F17E23] border-[#F17E23] text-white shadow-md'
              : 'border-gray-300 bg-white/40 text-gray-700 hover:text-black hover:border-black active:scale-95'
          }`}
          title="Add to Cart"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </motion.button>
      </div>
    </motion.article>
  );
}
