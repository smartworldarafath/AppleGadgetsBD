import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useApp();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isCheckoutDone, setIsCheckoutDone] = useState(false);

  const formatBDT = (amount) => amount.toLocaleString('en-IN');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const code = couponCode.trim().toUpperCase();
    if (code === 'APPLE2026' || code === 'SAVE500') {
      setAppliedCoupon(code);
      setCouponDiscount(500);
    } else {
      setAppliedCoupon(code);
      setCouponDiscount(Math.min(1000, Math.round(cartTotal * 0.05)));
    }
  };

  const totalAmount = Math.max(0, cartTotal - couponDiscount);

  const handleContinue = () => {
    if (cart.length === 0) {
      setIsCartOpen(false);
      return;
    }
    setIsCheckoutDone(true);
    setTimeout(() => {
      clearCart();
      setIsCheckoutDone(false);
      setIsCartOpen(false);
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden select-none">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Modal / Dialog Container exactly matching cart.png */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 md:pr-4 md:py-4">
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md md:max-w-lg bg-white md:rounded-3xl shadow-2xl flex flex-col overflow-hidden relative border border-gray-100"
            >
              {/* Header: Your Cart + Close Button */}
              <div className="p-5 sm:p-6 pb-3 flex items-center justify-between border-b border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Cart</h2>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="size-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sub-header: Item count + Clear All */}
              <div className="px-5 sm:px-6 py-2.5 flex items-center justify-between">
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  {cartCount} Items
                </span>
                {cart.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm font-semibold text-orange-500 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Success View */}
              {isCheckoutDone ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Order Confirmed!</h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Your order has been placed successfully with official warranty.
                  </p>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-2 space-y-3">
                    {cart.length === 0 ? (
                      <div className="h-44 flex flex-col items-center justify-center text-center text-gray-400 space-y-2">
                        <p className="text-base font-semibold text-gray-700">Your cart is empty</p>
                        <p className="text-xs text-gray-400">Add products to your cart to see them here.</p>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.cartItemId}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/70 border border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="size-16 object-contain p-1 rounded-xl bg-white border border-gray-200/60 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 truncate">
                              {item.product.name}
                            </h4>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {item.storage?.label && <span>{item.storage.label}</span>}
                              {item.color?.name && <span> • {item.color.name}</span>}
                            </div>
                            <div className="text-sm font-bold text-gray-900 mt-1">
                              ৳ {formatBDT((item.storage?.price || item.product.price) * item.quantity)}
                            </div>
                          </div>

                          {/* Quantity control */}
                          <div className="flex items-center border border-gray-200 rounded-lg bg-white shrink-0">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="size-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="size-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Delete button */}
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-gray-400 hover:text-red-500 p-1 cursor-pointer transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Order Summary Section matching cart.png */}
                  <div className="p-5 sm:p-6 border-t border-gray-100 space-y-3.5 bg-white">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Order Summary
                    </h3>

                    {/* Apply Coupon Pill Container */}
                    <form onSubmit={handleApplyCoupon} className="flex items-center rounded-full border border-gray-200 p-1 pl-4 bg-white focus-within:border-gray-400 transition-colors">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Apply Coupon"
                        className="flex-1 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-[#18181b] hover:bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors cursor-pointer shrink-0"
                      >
                        Apply Coupon
                      </button>
                    </form>

                    {appliedCoupon && (
                      <div className="flex items-center justify-between text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-xl border border-green-200">
                        <span>Coupon <strong>{appliedCoupon}</strong> applied</span>
                        <span>-৳{formatBDT(couponDiscount)}</span>
                      </div>
                    )}

                    {/* Pricing breakdown */}
                    <div className="space-y-2 pt-1 text-sm">
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Sub Total ({cartCount} items)</span>
                        <span className="font-semibold text-gray-900">৳ {formatBDT(cartTotal)}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Discount</span>
                        <span className="font-semibold text-gray-900">৳ {formatBDT(couponDiscount)}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-2 flex items-center justify-between text-base font-bold text-gray-900">
                        <span>Total Amount</span>
                        <span>৳ {formatBDT(totalAmount)}</span>
                      </div>
                    </div>

                    {/* Continue Button (with requested Transparent Blur Effect) */}
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="w-full py-3.5 px-6 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base text-center transition-all duration-300 shadow-md cursor-pointer active:scale-98 backdrop-blur-md"
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
