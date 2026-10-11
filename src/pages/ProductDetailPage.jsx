import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowLeftRight, Check, Heart, ShieldCheck, Truck, CreditCard } from 'lucide-react';
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
  const [selectedStorage, setSelectedStorage] = useState(product.storages[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedRegion, setSelectedRegion] = useState(product.regions[0]);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [isEMIModalOpen, setIsEMIModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedStorage(product.storages[0]);
      setSelectedColor(product.colors[0]);
      setSelectedRegion(product.regions[0]);
      setSelectedImage(product.image);
      setQuantity(1);
    }
  }, [product]);

  const inComp = isInCompare(product.id);
  const inWish = isInWishlist(product.id);
  const related = getRelatedPhones(product.slug, 4);

  const currentPrice = selectedStorage?.price || product.price;
  const currentRegular = selectedStorage?.regularPrice || product.regularPrice;

  const handleAddToCart = () => {
    addToCart(product, selectedStorage, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedStorage, selectedColor, quantity);
  };

  const formatBDT = (amount) => amount.toLocaleString('en-IN');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="container pb-16"
    >
      {/* 1. Exact Breadcrumbs */}
      <ol aria-label="Breadcrumb" className="items-center whitespace-nowrap flex flex-wrap lg:flex-nowrap my-4 md:mt-6 md:mb-4 text-xs md:text-sm text-gray-600">
        <li className="flex items-center">
          <Link className="px-1.5 py-1 -ml-1.5 hover:text-orange-500" to="/category/mobile-phone">
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <svg className="shrink-0 text-gray-500" fill="none" height="16" stroke="currentColor" viewBox="0 0 18 18" width="16">
            <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"></path>
          </svg>
          <Link to="/category/mobile-phone" className="px-1.5 py-1 hover:text-orange-500">
            mobile phone
          </Link>
        </li>
        <li className="flex items-center">
          <svg className="shrink-0 text-gray-500" fill="none" height="16" stroke="currentColor" viewBox="0 0 18 18" width="16">
            <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"></path>
          </svg>
          <Link to={`/category/mobile-phone/${product.brand}`} className="px-1.5 py-1 hover:text-orange-500 font-medium">
            {product.brandName}
          </Link>
        </li>
        <li className="flex items-center">
          <svg className="shrink-0 text-gray-500" fill="none" height="16" stroke="currentColor" viewBox="0 0 18 18" width="16">
            <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"></path>
          </svg>
          <span className="truncate px-1.5 py-1 font-semibold text-gray-900">{product.name}</span>
        </li>
      </ol>

      {/* 2. Exact Top Product Showcase Section */}
      <section className="lg:grid lg:grid-cols-[450px,_1fr] xl:grid-cols-[400px,_1fr] 3xl:grid-cols-[527px,_1fr] lg:gap-8 3xl:gap-12 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs">
        
        {/* Left Side: Main Image Preview & Thumbnails */}
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[380px] flex items-center justify-center p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png';
                }}
                className="max-h-[320px] w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails Row */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-xl border p-1 bg-white transition-all ${
                    selectedImage === img ? 'border-orange-500 shadow-sm scale-105' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}

          {/* Compare Button */}
          <button
            type="button"
            onClick={() => toggleCompare(product.id)}
            className={`mt-4 w-full py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              inComp ? 'bg-gray-900 border-gray-900 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>{inComp ? 'Added to Compare ✓' : 'Add to Compare'}</span>
          </button>
        </div>

        {/* Right Side: Product Details & Variant Selectors */}
        <div className="space-y-5 mt-6 lg:mt-0">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-2xl md:text-3xl text-gray-900 font-bold">
                ৳{formatBDT(currentPrice)}
              </span>
              <span className="text-gray-500 text-xs md:text-sm font-medium">
                ( Cash Price )
              </span>
              {currentRegular > currentPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  ৳{formatBDT(currentRegular)}
                </span>
              )}
            </div>

            {/* Meta Row */}
            <div className="flex items-center gap-4 text-xs mt-2 text-gray-600">
              <span className="flex items-center gap-1">
                Availability: <strong className="text-green-600 uppercase">{product.status}</strong>
              </span>
              <span>•</span>
              <span>
                Code: <strong className="text-gray-900 font-mono">AGL{product.id.slice(0, 5).toUpperCase()}</strong>
              </span>
            </div>
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="text-xs font-medium text-gray-700">
                Color : <strong className="text-gray-900">{selectedColor.name}</strong>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedColor.name === c.name
                        ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold shadow-xs'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Region / Version Selector */}
          {product.regions && product.regions.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="text-xs font-medium text-gray-700">
                Region / Version : <strong className="text-gray-900">{selectedRegion}</strong>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.regions.map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedRegion === reg
                        ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Storage Selector */}
          {product.storages && product.storages.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="text-xs font-medium text-gray-700">
                Storage : <strong className="text-gray-900">{selectedStorage.label}</strong>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.storages.map((st) => (
                  <button
                    key={st.label}
                    type="button"
                    onClick={() => setSelectedStorage(st)}
                    className={`px-4 py-2 rounded-lg border text-xs font-medium transition-all ${
                      selectedStorage.label === st.label
                        ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Action Buttons */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            {/* Qty */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold"
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-semibold text-gray-900">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold"
              >
                +
              </button>
            </div>

            {/* Shop Now with Transparent Blur Glass Effect */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full sm:w-auto flex-1 h-11 px-7 backdrop-blur-md bg-[#F17E23]/90 hover:bg-[#F17E23] text-white font-semibold text-sm rounded-full transition-all cursor-pointer shadow-md shadow-orange-500/20 border border-white/20 active:scale-98"
            >
              Shop Now
            </button>

            {/* Add to Cart with Transparent Blur Glass Effect */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full sm:w-auto flex-1 h-11 px-7 border font-semibold text-sm rounded-full transition-all cursor-pointer backdrop-blur-md active:scale-98 ${
                isAdded
                  ? 'bg-green-600/90 border-green-600 text-white shadow-md'
                  : 'border-gray-300/80 bg-white/40 hover:bg-black hover:text-white hover:border-black text-gray-900 shadow-xs'
              }`}
            >
              {isAdded ? 'Added! ✓' : 'Add To Cart'}
            </button>
          </div>

          {/* EMI row */}
          <div className="pt-3 flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200">
            <span>
              0% EMI starts from <strong className="text-gray-900">৳{formatBDT(Math.round(currentPrice / 36))}/month</strong>
            </span>
            <button
              type="button"
              onClick={() => setIsEMIModalOpen(true)}
              className="text-orange-500 font-semibold hover:underline"
            >
              View Plans
            </button>
          </div>
        </div>
      </section>

      {/* 3. Exact Middle Section: Tabs + Similar Products Sidebar */}
      <section className="my-10 lg:mt-16 lg:mb-16 grid lg:grid-cols-[1fr,_380px] gap-8">
        
        {/* Left Column: Tabs */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="flex border-b border-gray-200 bg-gray-50/80">
            {[
              { id: 'specs', label: 'Specification' },
              { id: 'desc', label: 'Description' },
              { id: 'warranty', label: 'Warranty' },
              { id: 'reviews', label: 'Reviews' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`py-3.5 px-6 text-sm font-semibold transition-colors border-b-2 ${
                  activeTab === t.id
                    ? 'border-orange-500 text-orange-500 bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Technical Specifications</h3>
                <table className="w-full text-xs md:text-sm border-collapse border border-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50 w-1/3">Processor</td>
                      <td className="p-3 text-gray-900">{product.specs.processor}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Display</td>
                      <td className="p-3 text-gray-900">{product.specs.display}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Main Camera</td>
                      <td className="p-3 text-gray-900">{product.specs.mainCamera}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Front Camera</td>
                      <td className="p-3 text-gray-900">{product.specs.selfieCamera}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">RAM &amp; Storage</td>
                      <td className="p-3 text-gray-900">{product.specs.ram}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Battery &amp; Charging</td>
                      <td className="p-3 text-gray-900">{product.specs.battery}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Operating System</td>
                      <td className="p-3 text-gray-900">{product.specs.os}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Network</td>
                      <td className="p-3 text-gray-900">{product.specs.network}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">Build &amp; Protection</td>
                      <td className="p-3 text-gray-900">{product.specs.build} • {product.specs.weight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'desc' && (
              <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p>{product.description}</p>
                <h4 className="font-bold text-gray-900 pt-2">{product.name} Features</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {product.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="space-y-3 text-xs md:text-sm text-gray-700">
                <h3 className="text-lg font-bold text-gray-900">Warranty Policy</h3>
                <p>• 10 Days Replacement Warranty for hardware defects.</p>
                <p>• 1 Year Free Service Warranty covered by Apple Gadgets Care.</p>
                <p>• 100% Genuine brand sealed device guarantee.</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Customer Feedback ({product.reviewsCount})</h3>
                <p className="text-xs text-gray-500">Average customer rating: {product.rating} / 5.0</p>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                  <p className="font-bold text-gray-900">Shohanur Rahman — ★★★★★</p>
                  <p className="text-gray-600 mt-1">Excellent original device, verified IMEI on Apple official portal. Fast delivery from Jamuna Future park branch!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: See Similar Product Price */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-gray-900">See Similar Product Price</h3>
          <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden shadow-xs">
            {related.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <img src={p.image} alt={p.name} className="w-12 h-12 object-contain p-1 border rounded-lg" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-gray-900 truncate">{p.name}</p>
                  <p className="text-xs font-bold text-orange-500 mt-0.5">৳ {formatBDT(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Exact Bottom Related Products Grid */}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Related Product</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((p) => (
            <ProductCard key={p.id} phone={p} />
          ))}
        </div>
      </section>

      {/* EMI Modal */}
      <EMIModal
        isOpen={isEMIModalOpen}
        onClose={() => setIsEMIModalOpen(false)}
        product={product}
        selectedPrice={currentPrice}
      />
    </motion.div>
  );
}
