import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export default function CartPage() {
  const { 
    cart, 
    cartCount, 
    cartSubtotal, 
    cartTotal, 
    couponDiscount, 
    appliedCoupon, 
    removeFromCart, 
    updateQuantity, 
    applyCouponCode,
    clearCart,
    showToast 
  } = useApp();

  const [promoInput, setPromoInput] = useState('');
  const [deliveryType, setDeliveryType] = useState('inside');
  const [isSuccess, setIsSuccess] = useState(false);

  const deliveryFee = cart.length > 0 ? (deliveryType === 'inside' ? 60 : 120) : 0;
  const grandTotal = cartTotal + deliveryFee;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyCouponCode(promoInput);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsSuccess(true);
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch (e) {}
    setTimeout(() => {
      clearCart();
      setIsSuccess(false);
      showToast('Order confirmed! Our representative will call you for dispatch verification.', 'success');
    }, 2800);
  };

  const formatBDT = (val) => `৳ ${val.toLocaleString('en-IN')}`;

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl mx-auto animate-bounce">
          ✓
        </div>
        <h2 className="text-3xl font-black text-neutral-900">Order Placed Successfully!</h2>
        <p className="text-sm text-neutral-600 max-w-md mx-auto">
          Thank you for choosing Apple Gadgets BD. Your order #AG-{Math.floor(100000 + Math.random() * 900000)} is registered and scheduled for express courier handling.
        </p>
        <Link
          to="/category/mobile-phone"
          className="inline-block mt-4 px-6 py-3 bg-[#F17E23] text-white font-bold rounded-2xl text-sm"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-6">
        Shopping Cart ({cartCount} Items)
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-neutral-200 space-y-4">
          <ShoppingBag className="w-16 h-16 text-neutral-300 mx-auto" />
          <h3 className="text-xl font-bold text-neutral-800">Your cart is empty</h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            Discover the latest mobile devices and accessories from Apple Gadgets BD.
          </p>
          <Link
            to="/category/mobile-phone"
            className="inline-block px-6 py-3 bg-[#F17E23] text-white font-bold rounded-xl text-xs"
          >
            Explore Phones
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Table List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-xs divide-y divide-neutral-100 overflow-hidden">
              {cart.map((item) => (
                <div key={item.cartItemId} className="p-4 sm:p-5 flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain p-2 rounded-2xl bg-neutral-50 border border-neutral-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="font-bold text-sm sm:text-base text-neutral-900 hover:text-[#F17E23] transition-colors truncate block"
                    >
                      {item.product.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                      <span className="bg-neutral-100 px-2 py-0.5 rounded font-medium">{item.storage}</span>
                      <span className="flex items-center gap-1 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: item.colorHex }} />
                        {item.color}
                      </span>
                    </div>
                    <span className="font-black text-sm text-neutral-900 block mt-2 sm:hidden">
                      {formatBDT(item.price)}
                    </span>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-2 bg-neutral-100 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-black rounded-lg hover:bg-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-black rounded-lg hover:bg-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Price and delete button */}
                  <div className="hidden sm:block text-right min-w-[100px]">
                    <span className="font-black text-base text-neutral-900 block">
                      {formatBDT(item.price * item.quantity)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="p-2 text-neutral-400 hover:text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-neutral-900 pb-3 border-b border-neutral-100">
                Order Summary
              </h3>

              {/* Promo Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Promo Code (APPLE2026)"
                  className="flex-1 px-3 py-2 text-xs uppercase bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#F17E23]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedCoupon && (
                <div className="text-xs bg-emerald-50 text-emerald-700 p-2.5 rounded-xl border border-emerald-200 flex justify-between font-semibold">
                  <span>Coupon {appliedCoupon} applied</span>
                  <span>-{formatBDT(couponDiscount)}</span>
                </div>
              )}

              {/* Delivery Selection */}
              <div className="text-xs space-y-1.5 pt-2 border-t border-neutral-100">
                <span className="font-bold text-neutral-700">Delivery Zone:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('inside')}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-colors ${
                      deliveryType === 'inside'
                        ? 'bg-orange-50 border-[#F17E23] text-neutral-900 font-bold'
                        : 'bg-white border-neutral-200 text-neutral-600'
                    }`}
                  >
                    Inside Dhaka (৳60)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('outside')}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-colors ${
                      deliveryType === 'outside'
                        ? 'bg-orange-50 border-[#F17E23] text-neutral-900 font-bold'
                        : 'bg-white border-neutral-200 text-neutral-600'
                    }`}
                  >
                    Outside Dhaka (৳120)
                  </button>
                </div>
              </div>

              {/* Price Details */}
              <div className="space-y-2 text-xs text-neutral-600 pt-3 border-t border-neutral-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-neutral-900">{formatBDT(cartSubtotal)}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount</span>
                    <span>-{formatBDT(couponDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="font-bold text-neutral-900">{formatBDT(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Total Amount</span>
                  <span className="text-[#F17E23]">{formatBDT(grandTotal)}</span>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={handleCheckout}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 backdrop-blur-md bg-[#F17E23]/90 hover:bg-[#F17E23] text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-orange-500/25 border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
