import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getPhoneBySlug, getRelatedPhones, PHONES } from '../data/phones';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import EMIModal from '../components/EMIModal';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getPhoneBySlug(slug);

  const { addToCart, toggleCompare, isInCompare, toggleWishlist, isInWishlist } = useApp();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <Link to="/category/mobile-phone" className="mt-4 inline-block px-5 py-2.5 bg-orange-500 text-white font-bold rounded-lg text-sm">
          Return to Mobile Phones
        </Link>
      </div>
    );
  }

  // Variant selections
  const [selectedStorage, setSelectedStorage] = useState(product.storages?.[0] || { label: '256GB', price: product.price, regularPrice: product.regularPrice });
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || { name: 'Default', hex: '#212121' });
  const [selectedRegion, setSelectedRegion] = useState(product.regions?.[0] || 'Dual SIM');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('tabSpecification');
  const [isEMIModalOpen, setIsEMIModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const galleryImages = (product.gallery && product.gallery.length > 0) ? product.gallery : [product.image];

  useEffect(() => {
    if (product) {
      setSelectedStorage(product.storages?.[0] || { label: '256GB', price: product.price, regularPrice: product.regularPrice });
      setSelectedColor(product.colors?.[0] || { name: 'Default', hex: '#212121' });
      setSelectedRegion(product.regions?.[0] || 'Dual SIM');
      setActiveImageIndex(0);
      setQuantity(1);
    }
  }, [product]);

  const inComp = isInCompare(product.id);
  const inWish = isInWishlist(product.id);
  const related = getRelatedPhones(product.slug, 8);

  const currentPrice = selectedStorage?.price || product.price;
  const currentRegular = selectedStorage?.regularPrice || product.regularPrice || Math.round(currentPrice * 1.03);
  const currentSave = currentRegular > currentPrice ? currentRegular - currentPrice : (product.saveAmount || 5001);

  const handleAddToCart = () => {
    addToCart(product, selectedStorage, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedStorage, selectedColor, quantity);
  };

  const formatBDT = (amount) => Number(amount || 0).toLocaleString('en-IN');

  const productCode = `AGL${(product.id || '146988').replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase()}`;

  // Brand logo mapping
  const brandLogos = {
    iphone: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Apple-6176.png',
    samsung: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Samsung-7845.png',
    xiaomi: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Xiaomi-4691.png',
    google: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Google-4819.png',
    oneplus: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/OnePlus-4395.png',
    motorola: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Motorola-8924.png',
    honor: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Honor-5021.png',
    vivo: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Vivo-3921.png',
    oppo: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Oppo-9021.png',
    realme: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Realme-2019.png',
    nothing: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Nothing-9921.png',
    nokia: 'https://adminapi.applegadgetsbd.com/storage/media/thumb/Nokia-1120.png',
  };

  const brandLogo = brandLogos[product.brand] || brandLogos.iphone;

  // Build specifications list matching live website structure
  const rawSpecs = (product.specsTable && product.specsTable.length > 0)
    ? product.specsTable.map(s => ({ label: s.key, value: s.value }))
    : [
        { label: 'Brand', value: product.brandName || 'Apple' },
        { label: 'Platform', value: product.specs?.processor ? `OS: ${product.specs.os || 'Latest OS'}, Chipset: ${product.specs.processor}` : 'Apple A20 Pro (2nm) Hexa-core' },
        { label: 'Model', value: product.name },
        { label: 'Network', value: product.specs?.network || 'GSM, HSPA, LTE, 5G' },
        { label: 'Dimensions', value: product.specs?.dimensions || '163.4 x 78 x 8.75 mm' },
        { label: 'Weight', value: product.specs?.weight || '249 g' },
        { label: 'SIM', value: selectedRegion || 'Dual SIM (nano-SIM & eSIM) | Dual eSIM' },
        { label: 'Display Type', value: product.specs?.display || 'LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision' },
        { label: 'Display Size', value: product.specs?.displaySize || '6.9 inches' },
        { label: 'Display Resolution', value: product.specs?.displayResolution || '1320 × 2868 pixels, ~460 ppi' },
        { label: 'Memory', value: `${selectedStorage?.label || '256GB'} / 12GB RAM` },
        { label: 'Main Camera', value: product.specs?.camera || '48MP Wide Fusion camera with Variable Aperture, 48MP Periscope Telephoto, 48MP Ultra Wide | Video: 4K@24/25/30/60/100/120fps' },
        { label: 'Selfie Camera', value: product.specs?.selfieCamera || '18MP Ultra Wide | Video: 4K@24/25/30/60fps | Features: ProRes RAW, Dolby Vision HDR' },
        { label: 'Sound', value: 'Stereo Loudspeakers' },
        { label: 'Battery Info', value: product.specs?.battery || 'Typical use: Up to 30 hours | Video playback: Up to 45 hours | 60W Capable Fast Charging' },
        { label: 'Connectivity', value: 'Wi-Fi 7, Bluetooth: 6.0, NFC: Yes' },
        { label: 'Sensors', value: 'Face ID | LiDAR Scanner | Barometer | High-dynamic-range gyro | High-g accelerometer | Proximity sensor | Dual ambient light sensors' },
        { label: 'Other Features / Info', value: product.specs?.waterproof || 'Ceramic Shield 2, IP68 Water Resistance, Face ID, Ultra Wideband (Gen 2)' },
      ];

  const specsData = rawSpecs;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container pb-16 pt-2"
    >
      {/* 1. Exact Breadcrumb */}
      <ol aria-label="Breadcrumb" className="items-center whitespace-nowrap flex flex-wrap lg:flex-nowrap my-4 md:mt-6 md:mb-2.5">
        <li className="flex items-center text-xs text-gray-600">
          <Link className="capitalize flex items-center hover:text-orange-500 transition-colors" to="/">
            Home
          </Link>
        </li>
        <li className="flex items-center text-xs hover:text-orange-500 duration-300 capitalize text-gray-600">
          <Link className="flex items-center" to="/category/mobile-phone">
            <svg className="stroke-gray-600 mx-1" width="18" height="18" viewBox="0 0 18 18" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            mobile phone
          </Link>
        </li>
        <li className="flex items-center text-xs hover:text-orange-500 duration-300 capitalize text-gray-900">
          <Link className="flex items-center font-medium" to={`/category/mobile-phone/${product.brand}`}>
            <svg className="stroke-gray-600 mx-1" width="18" height="18" viewBox="0 0 18 18" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            {product.brand}
          </Link>
        </li>
      </ol>

      {/* 2. Top Product Showcase Section (Scraped Exact Layout) */}
      <section className="lg:grid lg:grid-cols-[450px,_1fr] xl:grid-cols-[400px,_1fr] 3xl:grid-cols-[527px,_1fr] lg:gap-5 3xl:gap-10">
        
        {/* Left Column: Gallery */}
        <div className="overflow-hidden relative">
          <div className="border overflow-hidden border-gray-300 rounded-2xl bg-white p-2">
            <div className="relative pb-[95.25%] lg:pb-[100%] w-full overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryImages[activeImageIndex]}
                  src={galleryImages[activeImageIndex]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  onError={(e) => {
                    e.currentTarget.src = product.image;
                  }}
                  className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 ease-out hover:scale-105"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="mt-4">
            <div className="h-20 md:h-[100px] flex space-x-3 lg:space-x-4 overflow-x-auto no-scrollbar py-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-full w-full flex-[0_0_76px] md:flex-[0_0_100px] cursor-pointer rounded-2xl overflow-hidden transition-all duration-200 ${
                    activeImageIndex === idx ? 'border-2 border-orange-500 shadow-sm scale-102' : 'border border-gray-300 hover:border-gray-400 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    alt={product.name}
                    src={img}
                    className="w-full h-full object-contain p-1.5 bg-white"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Title, Prices, Selectors, Add to Cart */}
        <div className="clear-both space-y-4 mt-8 lg:mt-0">
          
          {/* Brand Logo & Add to Compare */}
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-1.5 text-gray-900 font-semibold text-base hover:text-orange-500 transition-colors" to={`/category/mobile-phone/${product.brand}`}>
              <span className="text-lg"></span>
              <span>{product.brandName || 'Apple'}</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => toggleCompare(product.id)}
                className="flex items-center gap-1.5 text-orange-500 text-sm font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9.5H6.65856C5.65277 9.5 5.14987 9.5 5.02472 9.19134C4.89957 8.88268 5.25517 8.51942 5.96637 7.79289L8.21091 5.5" stroke="#F27F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5 15.5H17.3414C18.3472 15.5 18.8501 15.5 18.9753 15.8087C19.1004 16.1173 18.7448 16.4806 18.0336 17.2071L15.7891 19.5" stroke="#F27F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {inComp ? 'Added to Compare ✓' : 'Add to Compare'}
              </button>
            </div>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 !mt-0">
            {product.name}
          </h1>

          {/* Pricing Row matching screenshot 100% */}
          <div className="flex flex-wrap items-center gap-2 !mt-2 text-sm md:text-base">
            <div className="flex items-center gap-1.5">
              <p className="text-2xl font-bold text-gray-900">
                ৳{formatBDT(currentPrice)}
              </p>
              <span className="text-xs sm:text-sm text-gray-600">
                (Cash Price)
              </span>
            </div>
            
            {currentSave > 0 && (
              <p className="bg-green-100 text-green-600 h-max px-2.5 py-1 rounded-full text-xs font-semibold">
                ৳ {formatBDT(currentSave)} OFF
              </p>
            )}

            {currentRegular > currentPrice && (
              <p className="text-base text-gray-300 font-normal">
                <del>৳{formatBDT(currentRegular)}</del>
              </p>
            )}

            <div className="w-px h-3.5 bg-gray-200 mx-1"></div>

            <p className="text-sm">
              <span className="font-semibold text-gray-900">Availability:</span> <span className="text-gray-900 capitalize font-medium">{product.status || 'In Stock'}</span>
            </p>

            <div className="w-px h-3.5 bg-gray-200 mx-1"></div>

            <p className="text-sm">
              <span className="font-semibold text-gray-900">Code:</span> <span className="text-gray-900 font-medium">{productCode}</span>
            </p>
          </div>

          {/* Variants Selectors: Color & Storage Side-by-Side Card Blocks */}
          <div className="grid md:grid-cols-2 gap-3 !mt-4">
            
            {/* Color Selector */}
            <div className="p-4 rounded-2xl border border-gray-200 bg-white">
              <p className="text-sm font-semibold text-gray-900 pb-3">Color:</p>
              <div className="flex items-center flex-wrap gap-2">
                {(product.colors && product.colors.length > 0 ? product.colors : [
                  { name: 'Black', hex: '#212121' },
                  { name: 'Burgundy', hex: '#552940' },
                  { name: 'Glacier', hex: '#6790C0' },
                  { name: 'Silver', hex: '#D8D8D8' },
                ]).map((c) => {
                  const isSelected = selectedColor?.name === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`h-9 rounded-full border px-3.5 flex items-center gap-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-orange-500 font-semibold text-gray-900 shadow-xs'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                      }`}
                    >
                      <div className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0" style={{ backgroundColor: c.hex || '#212121' }}></div>
                      <span className="text-xs font-medium">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Storage Selector */}
            <div className="p-4 rounded-2xl border border-gray-200 bg-white">
              <p className="text-sm font-semibold text-gray-900 pb-3">Storage:</p>
              <div className="flex items-center flex-wrap gap-2">
                {(product.storages && product.storages.length > 0 ? product.storages : [
                  { label: '1TB', price: product.price, regularPrice: product.regularPrice },
                  { label: '2TB', price: product.price, regularPrice: product.regularPrice },
                  { label: '256GB', price: product.price, regularPrice: product.regularPrice },
                  { label: '512GB', price: product.price, regularPrice: product.regularPrice },
                ]).map((st) => {
                  const isSelected = selectedStorage?.label === st.label;
                  return (
                    <button
                      key={st.label}
                      type="button"
                      onClick={() => setSelectedStorage(st)}
                      className={`h-9 min-w-14 rounded-full border px-3.5 flex items-center justify-center cursor-pointer transition-all ${
                        isSelected
                          ? 'border-orange-500 font-semibold text-gray-900 shadow-xs'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                      }`}
                    >
                      <span className="text-xs font-medium">{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Bullet Points Section (Matching User Screenshot Exactly) */}
          <div className="py-2 space-y-2">
            {(product.keyPoints && product.keyPoints.length > 0 ? product.keyPoints : [
              '1 Year Apple Official Warranty Support',
              'Activation is Mandatory to Get the Offer Price'
            ]).map((point, pIdx) => (
              <div key={pIdx} className="flex items-center gap-2.5 text-sm font-bold text-gray-900">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Select Quantity */}
          <div className="space-y-2 !mt-4">
            <p className="text-sm font-semibold text-gray-900">Select Quantity:</p>
            <div className="w-[140px] h-10 p-1 flex items-center justify-between bg-gray-100 border border-gray-200 rounded-full">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-xs hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 font-bold"
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-semibold text-gray-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-xs hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons: Shop Now (solid orange pill) & Add To Cart (white outline pill) */}
          <div className="grid grid-cols-2 gap-3 !mt-5 w-full">
            <button
              type="button"
              onClick={handleBuyNow}
              className="h-12 w-full font-semibold text-white bg-[#F17E23] hover:bg-orange-600 rounded-full transition-all duration-200 shadow-sm active:scale-98 flex items-center justify-center cursor-pointer"
            >
              Shop Now
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`h-12 w-full font-semibold border rounded-full transition-all duration-200 shadow-2xs active:scale-98 flex items-center justify-center gap-2 cursor-pointer ${
                isAdded
                  ? 'bg-green-600 border-green-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19C8 18.4696 7.78929 17.9609 7.41421 17.5858C7.03914 17.2107 6.53043 17 6 17C5.46957 17 4.96086 17.2107 4.58579 17.5858C4.21071 17.9609 4 18.4696 4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17 17H6V3H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6 5L20 6L19 13H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span>{isAdded ? 'Added! ✓' : 'Add To Cart'}</span>
            </button>
          </div>

          {/* EMI & WhatsApp Row (Matching screenshot side by side) */}
          <div className="grid grid-cols-2 gap-3 !mt-3">
            <div className="flex items-center gap-2 py-3 px-4 rounded-xl border border-gray-200 bg-orange-50/50 text-xs md:text-sm">
              <span className="text-gray-900 font-semibold">%</span>
              <p className="text-gray-900">
                EMI Available <button type="button" onClick={() => setIsEMIModalOpen(true)} className="font-bold underline text-gray-900 hover:text-orange-500 cursor-pointer">View Plans</button>
              </p>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 py-3 px-4 rounded-xl border border-green-500/20 bg-green-100/70 hover:bg-green-100 text-xs md:text-sm transition-colors text-gray-900"
              href={`https://wa.me/+8801711105888?text=I%20want%20to%20know%20more%20about%20*${encodeURIComponent(product.name)}*%0AURL:%20applegadgetsbd.com/product/${product.slug}`}
            >
              <svg width="18" height="18" className="text-[#1CBF5A]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.49985 0.541326C4.5523 0.541326 0.541518 4.55211 0.541518 9.49966C0.541518 10.7337 0.791411 11.9111 1.24395 12.9825C1.36266 13.2636 1.44269 13.4536 1.49614 13.5995C1.55067 13.7484 1.55832 13.8022 1.55928 13.8161C1.5647 13.8944 1.5449 14.0008 1.40977 14.5058L0.562756 17.6714C0.505063 17.8871 0.566743 18.1171 0.724576 18.2749C0.88241 18.4328 1.11244 18.4944 1.32806 18.4368L4.49371 17.5897C4.99873 17.4546 5.10513 17.4348 5.18339 17.4402C5.19727 17.4412 5.25112 17.4488 5.4 17.5034C5.54595 17.5568 5.73589 17.6369 6.01697 17.7556C7.08845 18.2081 8.26577 18.458 9.49985 18.458C14.4474 18.458 18.4582 14.4472 18.4582 9.49966C18.4582 4.55211 14.4474 0.541326 9.49985 0.541326Z" fill="#1CBF5A"></path>
              </svg>
              <span className="font-semibold">Whatsapp</span>
            </a>
          </div>

          {/* Delivery Timescale (Full width border box) */}
          <div className="flex items-center gap-2.5 py-3 px-4 rounded-xl border border-gray-200 text-xs md:text-sm text-gray-700 !mt-3">
            <svg className="stroke-gray-900" width="22" height="18" stroke="currentColor" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="18.8333" cy="18.0003" rx="2.33333" ry="2.33333" strokeWidth="1.7"></ellipse>
              <ellipse cx="7.16658" cy="18.0003" rx="2.33333" ry="2.33333" strokeWidth="1.7"></ellipse>
              <path d="M4.83325 17.9682C3.55374 17.9044 2.75554 17.7141 2.18752 17.1461C1.61951 16.578 1.42917 15.7798 1.36539 14.5003M9.49992 18.0003H16.4999M21.1666 17.9682C22.4461 17.9044 23.2443 17.7141 23.8123 17.1461C24.6666 16.2918 24.6666 14.9169 24.6666 12.167V9.83366H19.1833C18.3147 9.83366 17.8804 9.83366 17.5289 9.71946C16.8185 9.48865 16.2616 8.93172 16.0308 8.22137C15.9166 7.86989 15.9166 7.43559 15.9166 6.56699C15.9166 5.2641 15.9166 4.61265 15.7453 4.08543C15.3991 3.0199 14.5637 2.18451 13.4981 1.83829C12.9709 1.66699 12.3195 1.66699 11.0166 1.66699H1.33325" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M1.33325 6.33301H8.33325" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M1.33325 9.83301H5.99992" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M15.9167 4H18.0415C19.7394 4 20.5884 4 21.2792 4.41266C21.9701 4.82532 22.3726 5.5728 23.1776 7.06775L24.6667 9.83333" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <p>
              Delivery Timescale: <span className="font-semibold text-gray-900">3-5 Days</span>
            </p>
          </div>
        </div>

        {/* Mobile Sticky Bottom Bar (Exact Live Behavior) */}
        <div className="fixed z-50 xl:hidden bg-white/90 backdrop-blur shadow-[0px_0px_10px_rgb(0_0_0_/_10%)] bottom-0 left-0 right-0 border-t border-gray-200">
          <div className="shadow-md pt-3 pb-3 px-4">
            <div className="gap-3 items-center inline-flex w-full">
              <button
                type="button"
                onClick={handleBuyNow}
                className="whitespace-nowrap font-medium text-white shadow bg-orange-500 hover:bg-orange-600 py-2 rounded-lg inline-flex items-center text-base justify-center w-full h-11 px-3 cursor-pointer"
              >
                Shop Now
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="whitespace-nowrap font-medium border border-gray-300 bg-white shadow-sm py-2 rounded-lg inline-flex items-center text-base justify-center gap-1 w-full h-11 px-3 cursor-pointer text-gray-900"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19C8 18.4696 7.78929 17.9609 7.41421 17.5858C7.03914 17.2107 6.53043 17 6 17C5.46957 17 4.96086 17.2107 4.58579 17.5858C4.21071 17.9609 4 18.4696 4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M17 17H6V3H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6 5L20 6L19 13H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {isAdded ? 'Added! ✓' : 'Add To Cart'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Middle Tabs & Sticky Sidebar (Exact Live DOM Structure) */}
      <section className="my-10 lg:mt-20 lg:mb-16 grid lg:grid-cols-[1fr,_432px] gap-6">
        
        {/* Left Tabs Area */}
        <div className="overflow-hidden">
          
          {/* Tab Buttons */}
          <div className="flex items-center gap-4 lg:gap-8 overflow-x-auto scrollbar-none pb-5 lg:pb-6">
            {[
              { id: 'tabSpecification', label: 'Specification' },
              { id: 'tabDescription', label: 'Description' },
              { id: 'tabWarranty', label: 'Warranty' },
              { id: 'tabReview', label: 'Reviews' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none h-9 px-4 py-2 rounded-lg inline-flex items-center cursor-pointer ${
                    isActive
                      ? 'bg-orange-500 text-white shadow'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1: Specification Table (100% Exact Live Design) */}
          {activeTab === 'tabSpecification' && (
            <div id="tabSpecification" className="pb-6 border-b border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specification</h2>
              <section className="border rounded-xl overflow-x-auto border-gray-200">
                <table className="table-auto w-full">
                  <tbody>
                    {specsData.map((row, i) => (
                      <tr key={i} className="divide-x border-b last:border-b-0 border-b-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="text-base font-medium text-gray-700 w-40 md:w-64 h-17 px-3 md:px-4 py-3 bg-gray-50/40">
                          {row.label}
                        </td>
                        <td className="text-base font-semibold text-gray-900 px-3 md:px-4 py-3">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          )}

          {/* Tab 2: Descriptions (Exact Live Rich Article Format) */}
          {activeTab === 'tabDescription' && (
            <div id="tabDescription" className="py-6 border-b border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Descriptions</h2>
              {product.descriptionHtml ? (
                <div
                  className="article space-y-4 text-gray-800 leading-relaxed text-sm md:text-base prose max-w-none [&_img]:rounded-xl [&_img]:my-4 [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-orange-500 [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              ) : (
                <div className="article space-y-4 text-gray-800 leading-relaxed text-sm md:text-base">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p>
                    Experience the pinnacle of innovation with the {product.name}, where cutting-edge hardware meets refined design. Powered by the industry-leading processor, this smartphone delivers peak performance, unmatched energy efficiency, and groundbreaking AI-driven capabilities.
                  </p>
                  <p>
                    The {product.name} price in Bangladesh starts from ৳{formatBDT(currentPrice)} at Apple Gadgets. The final price depends on the selected storage option and region variant, backed by genuine warranty and fast delivery across Bangladesh.
                  </p>
                  
                  <h4 className="text-lg font-bold text-gray-900 pt-2">{product.name} Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                    <li>Immersive Dynamic display with high refresh rate for silky-smooth responsiveness</li>
                    <li>Pro-grade camera system with advanced low-light sensors and high-resolution video capture</li>
                    <li>All-day intelligent battery life with rapid-speed fast charging technology</li>
                    <li>Robust aerospace-grade materials with water and dust resistance certification</li>
                    <li>Next-generation cellular 5G, Wi-Fi, Bluetooth, and NFC connectivity</li>
                    <li>Rich stereo acoustics and ultra-secure biometric authentication</li>
                  </ul>

                  <h4 className="text-lg font-bold text-gray-900 pt-2">Why Buy from Apple Gadgets?</h4>
                  <p>
                    Every device at Apple Gadgets is 100% brand new, authentic, and factory-sealed. We offer transparent pricing, prompt customer support, up to 36 months 0% EMI financing, and secure nationwide doorstep delivery.
                  </p>

                  <h4 className="text-lg font-bold text-gray-900 pt-2">Frequently Asked Questions</h4>
                  <div className="space-y-3 pt-1">
                    <div>
                      <h5 className="font-semibold text-gray-900">What is the {product.name} price in Bangladesh?</h5>
                      <p className="text-gray-600 text-sm">The {product.name} price starts from ৳{formatBDT(currentPrice)} at Apple Gadgets BD.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Is EMI facility available for this product?</h5>
                      <p className="text-gray-600 text-sm">Yes, 0% EMI is available on eligible credit cards from all leading Bangladeshi banks.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">What warranty is provided?</h5>
                      <p className="text-gray-600 text-sm">You receive a 10-day replacement warranty for manufacturing defects plus 1 year free service warranty.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Warranty (100% Scraped Live Match) */}
          {activeTab === 'tabWarranty' && (
            <div id="tabWarranty" className="py-6 border-b border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Warranty</h2>
              <div className="article text-gray-700 space-y-3">
                <p className="text-base">
                  • 10 Days Replacement Warranty for verified hardware defects.
                </p>
                <p className="text-base">
                  • 1 Year Free Service Warranty covered by Apple Gadgets Care service centers.
                </p>
                <p className="text-base">
                  • 100% Genuine brand-sealed guarantee.
                </p>
                <p className="text-base pt-2">
                  Explore our <Link className="font-medium underline decoration-orange-500 underline-offset-4 text-orange-500" to="/page/warranty-policy">Warranty Policy</Link> page for detailed information about our warranty coverage.
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: Reviews (100% Scraped Exact Live Review Component) */}
          {activeTab === 'tabReview' && (
            <div id="tabReview" className="bg-white rounded my-5 md:my-6">
              <div className="pb-5 border-b border-gray-300">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-2xl text-black">Reviews (0)</p>
                    <span className="mt-1 block text-base text-[#535353]">Ratings &amp; Reviews of {product.name}</span>
                  </div>
                  <button type="button" className="shrink-0 text-xs md:text-lg text-[#F27F20] bg-orange-100 rounded-full h-7.5 md:h-11 px-4 md:px-6 font-medium transition-colors hover:bg-orange-200 cursor-pointer">
                    Write a Review
                  </button>
                </div>
              </div>
              <div className="size-full grid place-items-center gap-8 py-16">
                <div className="w-[132px] h-[132px] rounded-full grid place-items-center bg-orange-500/10">
                  <svg width="63" height="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 70" fill="none">
                    <path d="M39.0098 48.7875C39.0181 42.6539 43.8631 36.9671 50.903 36.9629C57.4836 36.9587 62.817 42.1072 62.7817 48.906C62.7443 55.6757 57.2487 60.5997 50.9966 60.6537C44.3058 60.7119 38.9952 55.2496 39.0098 48.7896V48.7875ZM49.3816 52.3917C49.3587 52.3667 49.3234 52.3335 49.2922 52.294C48.5335 51.2776 47.779 50.257 47.0162 49.2427C46.5402 48.6088 46.083 47.9541 45.5592 47.3617C45.1268 46.8711 44.5178 46.8254 43.9338 47.0499C43.3435 47.2765 43.0109 47.742 42.959 48.3947C42.9132 48.9642 43.2188 49.3737 43.5306 49.7935C44.7465 51.4168 45.952 53.0485 47.17 54.6697C47.6003 55.2413 48.0181 55.8274 48.5065 56.3471C49.0552 56.9311 49.9531 56.9062 50.5268 56.3408C50.7388 56.1309 50.9217 55.8815 51.0755 55.6258C52.861 52.6265 55.0206 49.9245 57.4981 47.4718C57.8536 47.1206 58.2235 46.7797 58.5665 46.418C59.2877 45.6573 58.976 44.0797 57.6894 43.8906C57.1593 43.8116 56.7 43.9404 56.3051 44.3021C54.5342 45.9296 52.9067 47.6922 51.4351 49.5919C50.7284 50.5044 50.0675 51.4522 49.3774 52.3937L49.3816 52.3917Z" fill="#f27f20"></path>
                    <path d="M54.4547 63.3749C54.4152 63.6347 54.3965 63.8925 54.3362 64.1398C53.7522 66.5446 52.2723 68.1201 49.9236 68.885C49.2688 69.0991 48.6016 69.1698 47.9116 69.1698C34.05 69.1636 20.1884 69.176 6.32473 69.1615C3.75985 69.1594 1.34254 67.4758 0.440466 65.0003C0.103747 64.0733 0.0372348 63.1172 0.0372348 62.1465C0.0372348 54.8322 0.0372348 47.518 0.0372348 40.2037C0.0351562 32.2846 0.0393133 24.3654 0.0351562 16.4484C0.0351562 15.2657 0.0975116 14.0955 0.635846 13.0147C1.7333 10.8032 3.50211 9.50202 5.97969 9.37731C8.14135 9.26923 10.3113 9.32327 12.4771 9.30664C12.5187 9.30664 12.5623 9.31495 12.6268 9.32119C12.6351 9.41472 12.6496 9.50618 12.6476 9.59763C12.6476 10.3999 12.6392 11.2043 12.6455 12.0066C12.6455 12.1916 12.5769 12.2436 12.4023 12.2415C10.6148 12.2311 8.82933 12.2103 7.04181 12.2269C6.47854 12.2332 5.89863 12.2727 5.35822 12.4182C3.95938 12.7944 2.99911 14.0997 2.97625 15.5463C2.97417 15.6835 2.97625 15.8228 2.97625 15.96C2.97625 31.5737 2.9804 47.1875 2.96793 62.8012C2.96793 64.3726 4.03629 65.8172 5.67623 66.1643C5.95891 66.2245 6.26029 66.2225 6.55128 66.2225C20.2175 66.2225 33.8816 66.2225 47.5478 66.2162C47.9781 66.2162 48.4208 66.2412 48.8365 66.158C50.069 65.9086 50.9254 65.1811 51.3577 63.9881C51.4222 63.8093 51.5053 63.7719 51.6861 63.749C52.5737 63.6368 53.4591 63.4996 54.3445 63.3708C54.3674 63.3666 54.3923 63.3728 54.4568 63.377L54.4547 63.3749Z" fill="#f27f20"></path>
                  </svg>
                </div>
                <p className="text-base font-medium text-gray-700">This product has no reviews yet. Be the first one to write a review.</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Sidebar: Recently Viewed / See Similar Product Price */}
        <div className="sticky top-24 h-fit">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray-900">Recently Viewed</p>
            <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden shadow-xs">
              {related.slice(0, 5).map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.slug}`}
                  className="p-3.5 flex items-center gap-3 hover:bg-gray-50 transition-colors group"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-14 object-contain p-1 border border-gray-100 rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-orange-500 transition-colors">
                      {p.name}
                    </p>
                    <p className="text-sm font-bold text-orange-500 mt-1">
                      ৳ {formatBDT(p.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Banner Ad (Exact Scraped AG Computers GIF Banner) */}
      <a className="relative block my-8" target="_blank" rel="noreferrer" href="/category/mobile-phone">
        <figure className="w-full relative h-0 rounded-xl lg:rounded-3xl pb-[25%] lg:pb-[14%] overflow-hidden shadow-xs">
          <img
            alt="ag-computers"
            loading="lazy"
            className="rounded-xl lg:rounded-3xl absolute inset-0 w-full h-full object-cover"
            src="https://adminapi.applegadgetsbd.com/storage/media/large/AGL-AG-Computers-1129.gif"
          />
        </figure>
      </a>

      {/* 5. Bottom Related Products Grid (Matching Live Carousel / 4-Col Grid) */}
      <section className="mx-auto md:py-8 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Product</h2>
          <div className="flex items-center gap-2">
            <Link
              to={`/category/mobile-phone/${product.brand}`}
              className="text-xs md:text-sm font-semibold text-orange-500 hover:underline"
            >
              View All {product.brandName} Phones →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {related.slice(0, 4).map((p) => (
            <ProductCard key={p.id} phone={p} />
          ))}
        </div>
      </section>

      {/* EMI Plans Modal */}
      <EMIModal
        isOpen={isEMIModalOpen}
        onClose={() => setIsEMIModalOpen(false)}
        product={product}
        selectedPrice={currentPrice}
      />
    </motion.main>
  );
}
