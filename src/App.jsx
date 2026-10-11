import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ComparePage from './pages/ComparePage';
import CartPage from './pages/CartPage';
import LiveSupportWidget from './components/LiveSupportWidget';

export default function App() {
  const location = useLocation();

  // Initialize Lenis 60fps inertia smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#F17E23] selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Routed Content with 60fps Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            {/* Root redirects to all mobile phones category */}
            <Route path="/" element={<Navigate to="/category/mobile-phone" replace />} />

            {/* Mobile Category Main & Brand Sub-Pages */}
            <Route path="/category/mobile-phone" element={<CategoryPage />} />
            <Route path="/category/mobile-phone/:brand" element={<CategoryPage />} />

            {/* Product Detail Page */}
            <Route path="/product/:slug" element={<ProductDetailPage />} />

            {/* Compare & Cart Pages */}
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/category/mobile-phone" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <SearchModal />
      <Toast />

      {/* Floating Live Support Widget */}
      <LiveSupportWidget />
    </div>
  );
}
