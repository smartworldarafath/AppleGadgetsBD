import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-20 md:pb-12 border-t border-neutral-900 select-none">
      <div className="container">
        
        {/* 4 Exact Columns from Screenshot bottom/Screenshot 2026-10-11 011102.png & 011117.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Logo & Contact */}
          <div className="space-y-5">
            <Link to="/category/mobile-phone" className="inline-block">
              <img
                alt="Apple Gadgets Logo"
                width="200"
                height="60"
                className="w-48 h-auto object-contain"
                src="https://adminapi.applegadgetsbd.com/storage/media/large/logo-3717.png"
                onError={(e) => {
                  e.currentTarget.src = 'https://adminapi.applegadgetsbd.com/storage/media/medium/logo-3717.png';
                }}
              />
            </Link>

            {/* Phone Number */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Phone Number</span>
              </div>
              <a href="tel:09678148148" className="text-gray-400 text-sm pl-6 hover:text-orange-500 block transition-colors">
                09678148148
              </a>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>Email Address</span>
              </div>
              <a href="mailto:contact@applegadgetsbd.com" className="text-gray-400 text-sm pl-6 hover:text-orange-500 block transition-colors">
                contact@applegadgetsbd.com
              </a>
            </div>

            {/* App Store & Google Play Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] border border-neutral-800 px-3.5 py-2 rounded-xl transition-colors"
              >
                <svg className="size-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.01.62-2.65 1.37-.56.64-1.04 1.69-.91 2.71 1.03.08 2.05-.53 2.64-1.23z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase leading-none">Download on the</p>
                  <p className="text-xs font-bold text-white leading-tight">App Store</p>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] border border-neutral-800 px-3.5 py-2 rounded-xl transition-colors"
              >
                <svg className="size-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.61-1.464V3.278c0-.573.23-1.099.61-1.464zm11.233 11.236l2.42 2.42-12.78 7.375 10.36-9.795zm0-2.1l-10.36-9.795 12.78 7.375-2.42 2.42zm1.463 1.05l4.316 2.492a1.36 1.36 0 0 0 0-2.356l-4.316-2.492-1.393 1.178 1.393 1.178z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase leading-none">GET IT ON</p>
                  <p className="text-xs font-bold text-white leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: LOCATION */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">LOCATION</h4>
            
            <div className="space-y-4 text-xs text-gray-300">
              {/* Outlet 1 */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm leading-tight shrink-0">📍</span>
                  <p className="font-semibold text-white leading-snug">
                    Apple Gadgets - Basement 2, Shop 26, Bashundhara City Shopping Complex
                  </p>
                </div>
                <p className="text-gray-400 pl-5">Basement 2, Shop 26</p>
              </div>

              {/* Outlet 2 */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm leading-tight shrink-0">📍</span>
                  <p className="font-semibold text-white leading-snug">
                    Apple Gadgets - Level- 5, Block- A, Shop- 6, 7, 8. Bashundhara City Shopping Complex
                  </p>
                </div>
                <p className="text-gray-400 pl-5">Level- 5, Block- A, Shop- 6, 7, 8</p>
              </div>

              {/* Outlet 3 */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm leading-tight shrink-0">📍</span>
                  <p className="font-semibold text-white leading-snug">
                    Apple Gadgets - Level 4, Zone A (West Court), Shop 28D, Jamuna Future Park
                  </p>
                </div>
                <p className="text-gray-400 pl-5">Level 4, Zone A (West Court), Shop 28D</p>
              </div>

              <Link to="/category/mobile-phone" className="text-orange-500 font-semibold hover:underline block pt-1 pl-5">
                See All Outlet
              </Link>
            </div>
          </div>

          {/* Column 3: ABOUT US */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">ABOUT US</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Corporate</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Order Tracking</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Press Coverage</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Complain / Advice</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: POLICY */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">POLICY</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">EMI and Payment Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Warranty Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Exchange Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Delivery Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Pre-Order Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Refund Policy</Link></li>
              <li><Link to="/category/mobile-phone" className="hover:text-orange-500 transition-colors">Return Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching Screenshot bottom/Screenshot 2026-10-11 011117.png */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <p>© 2026 Apple Gadgets. All Rights Reserved.</p>
            <p className="mt-0.5">
              Developed by <span className="text-orange-500 font-semibold hover:underline cursor-pointer">Nextlab</span>
            </p>
          </div>

          {/* WhatsApp & Social Media Round Buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Green Pill Button */}
            <a
              href="https://wa.me/8809678148148"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.019 1.156 1.649.914.815 1.684 1.068 1.923 1.183.24.116.376.101.52-.058.145-.159.622-.723.788-.969.167-.246.333-.203.563-.116.231.087 1.464.69 1.716.815.253.125.42.188.479.289.058.101.058.59-.086.995z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Social Circle Icons: Facebook, Instagram, LinkedIn, YouTube */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="size-9 rounded-full border border-gray-600 hover:border-white hover:text-white flex items-center justify-center transition-colors"
              title="Facebook"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="size-9 rounded-full border border-gray-600 hover:border-white hover:text-white flex items-center justify-center transition-colors"
              title="Instagram"
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="size-9 rounded-full border border-gray-600 hover:border-white hover:text-white flex items-center justify-center transition-colors"
              title="LinkedIn"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="size-9 rounded-full border border-gray-600 hover:border-white hover:text-white flex items-center justify-center transition-colors"
              title="YouTube"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Giant Faint Background Logo Watermark from Screenshot 105739 */}
      <div className="w-full overflow-hidden pointer-events-none select-none opacity-[0.04] flex items-center justify-center -mt-6">
        <span className="text-[130px] md:text-[200px] font-black tracking-tighter text-white uppercase whitespace-nowrap leading-none">
          gadgets™
        </span>
      </div>
    </footer>
  );
}
