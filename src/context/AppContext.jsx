import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ag_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('ag_wishlist');
      return saved ? JSON.parse(saved) : ['iphone-16-pro-max', 'galaxy-s25-ultra-5g'];
    } catch {
      return [];
    }
  });

  // Compare state
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('ag_compare');
      return saved ? JSON.parse(saved) : ['iphone-16-pro-max', 'galaxy-s25-ultra-5g'];
    } catch {
      return [];
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('ag_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ag_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('ag_compare', JSON.stringify(compareList));
  }, [compareList]);

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart actions
  const addToCart = (product, selectedStorage = null, selectedColor = null, quantity = 1) => {
    const storageItem = selectedStorage || (product.storages && product.storages[0]) || { label: 'Standard', price: product.price };
    const colorItem = selectedColor || (product.colors && product.colors[0]) || { name: 'Default', hex: '#333' };
    const cartItemId = `${product.id}-${storageItem.label}-${colorItem.name}`;
    const price = storageItem.price || product.price;

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, {
        cartItemId,
        product,
        storage: storageItem.label,
        color: colorItem.name,
        colorHex: colorItem.hex,
        price,
        quantity
      }];
    });

    // Trigger micro confetti pop
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.85, x: 0.9 },
        colors: ['#F17E23', '#FFA930', '#10B981']
      });
    } catch (e) {}

    showToast(`Added "${product.name}" (${storageItem.label}) to cart!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item =>
      item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon('');
    setCouponDiscount(0);
  };

  const applyCouponCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'APPLE2026' || cleanCode === 'AGBD') {
      setAppliedCoupon(cleanCode);
      setCouponDiscount(2000);
      showToast('Coupon "APPLE2026" applied: ৳2,000 discount!', 'success');
      return true;
    } else {
      showToast('Invalid promo code. Try "APPLE2026"', 'error');
      return false;
    }
  };

  // Wishlist actions
  const toggleWishlist = (phoneId) => {
    setWishlist(prev => {
      const exists = prev.includes(phoneId);
      if (exists) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter(id => id !== phoneId);
      } else {
        showToast('Added to Wishlist!', 'success');
        return [...prev, phoneId];
      }
    });
  };

  const isInWishlist = (phoneId) => wishlist.includes(phoneId);

  // Compare actions
  const toggleCompare = (phoneId) => {
    setCompareList(prev => {
      const exists = prev.includes(phoneId);
      if (exists) {
        showToast('Removed from Compare list', 'info');
        return prev.filter(id => id !== phoneId);
      } else {
        if (prev.length >= 4) {
          showToast('You can compare a maximum of 4 phones', 'error');
          return prev;
        }
        showToast('Added to Compare list!', 'success');
        return [...prev, phoneId];
      }
    });
  };

  const isInCompare = (phoneId) => compareList.includes(phoneId);

  // Cart total calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartTotal = Math.max(0, cartSubtotal - couponDiscount);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        cartTotal,
        couponDiscount,
        appliedCoupon,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCouponCode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        setCompareList,
        toggleCompare,
        isInCompare,
        isSearchOpen,
        setIsSearchOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
