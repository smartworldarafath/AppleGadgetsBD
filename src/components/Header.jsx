import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { cartCount, compareList, setIsCartOpen, setIsSearchOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Categories and their exact sub-items from Apple Gadgets BD
  const navCategories = [
    {
      id: 'apple-products',
      name: 'Apple Products',
      path: '/category/mobile-phone/iphone',
      items: [
        { name: 'iPhone', path: '/category/mobile-phone/iphone' },
        { name: 'iPad', path: '/category/mobile-phone' },
        { name: 'MacBook', path: '/category/mobile-phone', hasSub: true },
        { name: 'Mac mini', path: '/category/mobile-phone', hasSub: true },
        { name: 'Apple Adapter', path: '/category/mobile-phone' },
        { name: 'AirPods', path: '/category/mobile-phone' },
        { name: 'EarPods', path: '/category/mobile-phone' },
        { name: 'Apple Watch', path: '/category/mobile-phone' },
        { name: 'AirTag', path: '/category/mobile-phone' },
        { name: 'iMac', path: '/category/mobile-phone', hasSub: true },
        { name: 'Mac Studio', path: '/category/mobile-phone' },
        { name: 'AirPods Max', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'phones',
      name: 'Phones',
      path: '/category/mobile-phone',
      isActive: true,
      items: [
        { name: 'iPhone', path: '/category/mobile-phone/iphone' },
        { name: 'Samsung', path: '/category/mobile-phone/samsung' },
        { name: 'Google', path: '/category/mobile-phone/google' },
        { name: 'Motorola', path: '/category/mobile-phone/motorola' },
        { name: 'Xiaomi', path: '/category/mobile-phone/xiaomi' },
        { name: 'Honor', path: '/category/mobile-phone/honor' },
        { name: 'OnePlus', path: '/category/mobile-phone/oneplus' },
        { name: 'iqoo', path: '/category/mobile-phone/iqoo' },
        { name: 'realme', path: '/category/mobile-phone/realme' },
        { name: 'Nothing', path: '/category/mobile-phone/nothing' },
        { name: 'Huawei', path: '/category/mobile-phone/huawei' },
        { name: 'Oppo', path: '/category/mobile-phone/oppo' },
        { name: 'vivo', path: '/category/mobile-phone/vivo' },
        { name: 'Nokia', path: '/category/mobile-phone/nokia' },
      ],
    },
    {
      id: 'desktop',
      name: 'Desktop',
      path: '/category/mobile-phone',
      items: [
        { name: 'All-in-One PC', path: '/category/mobile-phone' },
        { name: 'Mini PC', path: '/category/mobile-phone' },
        { name: 'Apple iMac', path: '/category/mobile-phone' },
        { name: 'Apple Mac mini', path: '/category/mobile-phone' },
        { name: 'Apple Mac Studio', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'laptops',
      name: 'Laptops',
      path: '/category/mobile-phone',
      items: [
        { name: 'Acer', path: '/category/mobile-phone' },
        { name: 'Asus', path: '/category/mobile-phone' },
        { name: 'Dell', path: '/category/mobile-phone' },
        { name: 'HP', path: '/category/mobile-phone' },
        { name: 'Lenovo', path: '/category/mobile-phone' },
        { name: 'MSI', path: '/category/mobile-phone' },
        { name: 'Samsung', path: '/category/mobile-phone' },
        { name: 'Qbits', path: '/category/mobile-phone' },
        { name: 'Gaming', path: '/category/mobile-phone' },
        { name: 'Ultrabook', path: '/category/mobile-phone' },
        { name: 'Business Class', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'tablets',
      name: 'Tablets & Accessories',
      path: '/category/mobile-phone',
      items: [
        { name: 'iPad', path: '/category/mobile-phone' },
        { name: 'Xiaomi Pad', path: '/category/mobile-phone' },
        { name: 'Samsung Tab', path: '/category/mobile-phone' },
        { name: 'Amazon Tab', path: '/category/mobile-phone' },
        { name: 'HONOR Tab', path: '/category/mobile-phone' },
        { name: 'Smart Pen', path: '/category/mobile-phone' },
        { name: 'Screen Protectors', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'gadgets',
      name: 'Gadgets & Accessories',
      path: '/category/mobile-phone',
      items: [
        { name: 'Chargers', path: '/category/mobile-phone' },
        { name: 'Power Bank', path: '/category/mobile-phone' },
        { name: 'Smart Tag', path: '/category/mobile-phone' },
        { name: 'Wireless Charger', path: '/category/mobile-phone' },
        { name: 'Multiplugs', path: '/category/mobile-phone' },
        { name: 'Car Accessories', path: '/category/mobile-phone' },
        { name: 'Smart TV Box', path: '/category/mobile-phone' },
        { name: 'Projector', path: '/category/mobile-phone' },
        { name: 'Drone', path: '/category/mobile-phone' },
        { name: 'Gimbal', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'appliances',
      name: 'Appliances',
      path: '/category/mobile-phone',
      items: [
        { name: 'Washing Machine', path: '/category/mobile-phone' },
        { name: 'Power Station', path: '/category/mobile-phone' },
        { name: 'Solar Panel', path: '/category/mobile-phone' },
        { name: 'Charger Fan', path: '/category/mobile-phone' },
        { name: 'Water Purifier', path: '/category/mobile-phone' },
        { name: 'Geyser', path: '/category/mobile-phone' },
        { name: 'Room Heater', path: '/category/mobile-phone' },
        { name: 'Iron', path: '/category/mobile-phone' },
        { name: 'Vacuum Cleaner', path: '/category/mobile-phone' },
        { name: 'Smart Scale', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      path: '/category/mobile-phone',
      items: [
        { name: 'Smart Band', path: '/category/mobile-phone' },
        { name: 'Action Camera', path: '/category/mobile-phone' },
        { name: 'Umbrella', path: '/category/mobile-phone' },
        { name: 'Trimmer', path: '/category/mobile-phone' },
        { name: 'Hair Dryer', path: '/category/mobile-phone' },
        { name: 'Straightener', path: '/category/mobile-phone' },
      ],
    },
    {
      id: 'security',
      name: 'Security & Networking',
      path: '/category/mobile-phone',
      items: [
        { name: 'Wi-Fi Router', path: '/category/mobile-phone' },
        { name: 'Starlink', path: '/category/mobile-phone' },
        { name: 'NAS', path: '/category/mobile-phone' },
        { name: 'Security Camera Accessories', path: '/category/mobile-phone' },
      ],
    },
  ];

  return (
    <header className="print:hidden sticky top-0 w-full z-40 select-none">
      {/* 1. Main Black Header (Matches 100% of Screenshot 105451) */}
      <div className="bg-black text-white">
        <div className="container flex justify-between items-center py-3.5 md:py-4">
          
          {/* Logo & Mobile Menu Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden size-6 text-white cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
            <Link className="h-auto w-36 xl:w-44 block" to="/category/mobile-phone">
              <img
                alt="Apple Gadgets Logo"
                loading="eager"
                width="155"
                height="48"
                className="w-auto h-9 xl:h-11 object-contain"
                src="https://adminapi.applegadgetsbd.com/storage/media/large/logo-3717.png"
                onError={(e) => {
                  e.currentTarget.src = 'https://adminapi.applegadgetsbd.com/storage/media/medium/logo-3717.png';
                }}
              />
            </Link>
          </div>

          {/* Search Button (Exact rounded pill with transparent glass blur) */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="hidden xl:flex items-center h-11 px-5 overflow-hidden relative flex-1 lg:max-w-[440px] 2xl:max-w-[580px] mx-8 rounded-full bg-[#262626] border border-transparent hover:border-gray-600 transition-all text-gray-400 group cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-orange-500 transition-colors shrink-0">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <span className="w-full text-start pl-2.5 text-sm text-[#9ca3af]">Search...</span>
          </button>

          {/* Right Header Navigation & Transparent Blur Cart Button */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden xl:flex items-center gap-4 2xl:gap-6 text-sm font-semibold">
              <Link className="hover:text-orange-500 transition-colors text-white" to="/category/mobile-phone">
                Blog
              </Link>
              <Link className="hover:text-orange-500 transition-colors text-white" to="/category/mobile-phone">
                Pre-order
              </Link>

              {/* Exact Offers Gift Icon SVG */}
              <Link className="flex items-center gap-1.5 hover:text-orange-400 transition-colors text-[#FFAD39]" to="/category/mobile-phone">
                <svg className="h-4 w-4" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6H14.5V14.5C14.5 14.7652 14.3946 15.0196 14.2071 15.2071C14.0196 15.3946 13.7652 15.5 13.5 15.5H9.75V6H10ZM6.25 6V15.5H2.5C2.23478 15.5 1.98043 15.3946 1.79289 15.2071C1.60536 15.0196 1.5 14.7652 1.5 14.5V6H6.25Z" fill="#FFAD39"></path>
                  <path d="M6 3V6H0.75C0.617513 5.9996 0.490566 5.9468 0.396884 5.85312C0.303201 5.75943 0.250396 5.63249 0.25 5.5V3.5C0.250396 3.36751 0.303201 3.24057 0.396884 3.14688C0.490566 3.0532 0.617513 3.0004 0.75 3H6ZM15.75 3.5V5.5C15.7496 5.63249 15.6968 5.75943 15.6031 5.85312C15.5094 5.9468 15.3825 5.9996 15.25 6H10V3H15.25C15.3825 3.0004 15.5094 3.0532 15.6031 3.14688C15.6968 3.24057 15.7496 3.36751 15.75 3.5Z" fill="#FEBD55"></path>
                  <path d="M9.25 2.5V3H6.75V2.5C6.7504 2.36751 6.8032 2.24057 6.89688 2.14688C6.99057 2.0532 7.11751 2.0004 7.25 2H8.75C8.88249 2.0004 9.00943 2.0532 9.10312 2.14688C9.1968 2.24057 9.2496 2.36751 9.25 2.5Z" fill="#CB3541"></path>
                  <path d="M8.75 2.5H7.25C7.1627 2.49952 7.07705 2.47618 7.00157 2.43232C6.92608 2.38846 6.8634 2.32561 6.81975 2.25C6.77462 2.32562 6.75054 2.41194 6.75 2.5V3H9.25V2.5C9.24946 2.41194 9.22538 2.32562 9.18025 2.25C9.1366 2.32561 9.07392 2.38846 8.99843 2.43232C8.92295 2.47618 8.8373 2.49952 8.75 2.5Z" fill="#A81E29"></path>
                </svg>
                <span>Offers</span>
              </Link>

              {/* Exact Compare Link */}
              <Link className="flex items-center gap-1.5 hover:text-orange-500 transition-colors text-white" to="/compare">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5H2.65856C1.65277 5 1.14987 5 1.02472 4.69134C0.899565 4.38268 1.25517 4.01942 1.96637 3.29289L4.21091 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M1 11H13.3414C14.3472 11 14.8501 11 14.9753 11.3087C15.1004 11.6173 14.7448 11.9806 14.0336 12.7071L11.7891 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>Compare</span>
              </Link>
            </div>

            {/* Transparent Blur Glass Cart Button (Requested) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative size-10 rounded-full border border-gray-600 backdrop-blur-md bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
                title="Cart"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {/* Orange Badge */}
                <span className="absolute -top-1 -right-1 bg-[#F17E23] text-white text-[11px] font-bold rounded-full size-4.5 flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              {/* User Account Circle Outline Button */}
              <button
                type="button"
                className="size-10 rounded-full border border-gray-600 hover:border-white flex items-center justify-center text-white transition-all cursor-pointer hidden sm:flex"
                title="Account"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="xl:hidden relative pb-3 px-4">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between h-10 px-4 rounded-full bg-[#262626] border border-transparent text-gray-400 text-sm"
          >
            <span>Search product, brand, and more...</span>
            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Secondary White Navigation Bar with ANIMATED MEGA DROPDOWNS (Matches Screenshot 110052) */}
      <nav className="relative shadow-xs hidden xl:block bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-2">
          
          {navCategories.map((cat) => (
            <div
              key={cat.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(cat.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* Category Link with Chevron Down ⌵ */}
              <Link
                to={cat.path}
                className={`text-[13px] 2xl:text-[14px] font-medium transition-colors flex items-center gap-1.5 py-1.5 px-1 ${
                  cat.isActive
                    ? 'text-orange-500 font-semibold'
                    : 'text-gray-900 hover:text-orange-500'
                }`}
              >
                <span>{cat.name}</span>
                <svg
                  className={`size-3.5 transition-transform duration-200 ${
                    cat.isActive ? 'text-orange-500' : 'text-gray-900 group-hover:text-orange-500'
                  } ${activeDropdown === cat.id ? 'rotate-180 text-orange-500' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Animated Dropdown Menu with 60fps Micro-Animations */}
              <AnimatePresence>
                {activeDropdown === cat.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 top-[95%] pt-1 z-50 min-w-[210px]"
                  >
                    <div className="bg-[#f3f4f6]/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200/80 p-1.5 flex flex-col max-h-[460px] overflow-y-auto">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="px-3 py-2 text-xs 2xl:text-[13px] font-medium text-gray-800 hover:text-orange-500 hover:bg-white rounded-xl transition-all duration-150 flex items-center justify-between group/item"
                        >
                          <span className="group-hover/item:translate-x-0.5 transition-transform">
                            {item.name}
                          </span>
                          {item.hasSub && (
                            <svg className="size-3.5 text-gray-400 group-hover/item:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </nav>

      {/* 3. Mobile Fixed Bottom Navigation Bar */}
      <div className="fixed xl:hidden bg-white/95 backdrop-blur-md shadow-[0px_0px_10px_rgb(0_0_0_/_10%)] bottom-0 left-0 right-0 z-40 border-t border-gray-200">
        <div className="pt-2.5 pb-1 grid grid-cols-4 items-center text-center">
          <Link className="text-[11px] font-medium text-gray-600 flex flex-col items-center gap-1 hover:text-orange-500" to="/category/mobile-phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </Link>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[11px] font-medium text-gray-600 flex flex-col items-center gap-1 hover:text-orange-500 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
            <span>Category</span>
          </button>
          <Link className="text-[11px] font-medium text-gray-600 flex flex-col items-center gap-1 hover:text-orange-500" to="/category/mobile-phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
            <span>Offer</span>
          </Link>
          <button type="button" onClick={() => setIsCartOpen(true)} className="text-[11px] font-medium text-gray-600 flex flex-col items-center gap-1 hover:text-orange-500 relative cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 right-6 bg-[#F17E23] text-white text-[10px] rounded-full size-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
