import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { PHONES, BRANDS } from '../data/phones';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { brand: currentBrandSlug } = useParams();

  // Active brand
  const activeBrand = BRANDS.find(b => b.slug === (currentBrandSlug || '')) || BRANDS[0];

  // Filters State matching screenshots exactly
  const [selectedBrands, setSelectedBrands] = useState(() => 
    currentBrandSlug ? [currentBrandSlug] : []
  );
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(555000);
  const [tempMinPrice, setTempMinPrice] = useState('0');
  const [tempMaxPrice, setTempMaxPrice] = useState('555000');
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(true);

  // Filter search terms
  const [featureSearch, setFeatureSearch] = useState('');
  const [batterySearch, setBatterySearch] = useState('');
  const [processorSearch, setProcessorSearch] = useState('');
  const [storageSearch, setStorageSearch] = useState('');
  const [ramSearch, setRamSearch] = useState('');
  const [brandSearch, setBrandSearch] = useState('');

  // Selected filter criteria
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedBattery, setSelectedBattery] = useState([]);
  const [selectedProcessors, setSelectedProcessors] = useState([]);
  const [selectedDisplay, setSelectedDisplay] = useState([]);
  const [selectedStorages, setSelectedStorages] = useState([]);
  const [selectedRAMs, setSelectedRAMs] = useState([]);
  const [selectedNetworks, setSelectedNetworks] = useState([]);

  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Accordion state
  const [openSections, setOpenSections] = useState({
    price: true,
    features: true,
    battery: true,
    processor: true,
    display: true,
    storage: true,
    ram: true,
    network: true,
    brands: true,
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // Sync brand when URL param changes
  React.useEffect(() => {
    if (currentBrandSlug) {
      setSelectedBrands([currentBrandSlug]);
    } else {
      setSelectedBrands([]);
    }
  }, [currentBrandSlug]);

  const handleBrandToggle = (slug) => {
    setSelectedBrands(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const handleApplyPrice = () => {
    const min = Number(tempMinPrice) || 0;
    const max = Number(tempMaxPrice) || 555000;
    setMinPrice(min);
    setMaxPrice(max);
  };

  const resetAllFilters = () => {
    setSelectedBrands(currentBrandSlug ? [currentBrandSlug] : []);
    setMinPrice(0);
    setMaxPrice(555000);
    setTempMinPrice('0');
    setTempMaxPrice('555000');
    setExcludeOutOfStock(false);
    setSelectedFeatures([]);
    setSelectedBattery([]);
    setSelectedProcessors([]);
    setSelectedDisplay([]);
    setSelectedStorages([]);
    setSelectedRAMs([]);
    setSelectedNetworks([]);
    setSortBy('default');
  };

  // Filtered products list
  const filteredPhones = useMemo(() => {
    let list = PHONES;

    if (selectedBrands.length > 0) {
      list = list.filter(p => selectedBrands.includes(p.brand));
    }

    list = list.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (excludeOutOfStock) {
      list = list.filter(p => p.status !== 'Out of Stock');
    }

    if (selectedNetworks.includes('5G')) {
      list = list.filter(p => p.specs?.network?.includes('5G'));
    }

    if (selectedStorages.length > 0) {
      list = list.filter(p => p.storages?.some(st => selectedStorages.some(s => st.label.includes(s.replace('GB', '').replace('TB', '')))));
    }

    if (selectedProcessors.length > 0) {
      list = list.filter(p => selectedProcessors.some(proc => p.specs?.processor?.toLowerCase().includes(proc.toLowerCase())));
    }

    if (sortBy === 'price-low') {
      return [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedBrands, minPrice, maxPrice, excludeOutOfStock, selectedNetworks, selectedStorages, selectedProcessors, sortBy]);

  const formatBDT = (amount) => amount.toLocaleString('en-IN');

  // Filter lists from screenshots
  const specialFeaturesList = [
    'Fast Charging',
    'Wireless Charging',
    'Water Resistant',
    'In-Display Fingerprint',
    'Face Unlock',
    'Foldable Design',
  ].filter(f => f.toLowerCase().includes(featureSearch.toLowerCase()));

  const batteryList = [
    '1000 – 2999mAh',
    '3000 – 3999mAh',
    '4000 – 4999mAh',
    '5000 – 5999mAh',
    '6000 – 6999mAh',
    '7000mAh & Above',
  ].filter(b => b.toLowerCase().includes(batterySearch.toLowerCase()));

  const processorList = [
    'Apple Bionic',
    'Snapdragon',
    'MediaTek',
    'Exynos',
    'Google Tensor',
    'Kirin',
    'Unisoc',
  ].filter(p => p.toLowerCase().includes(processorSearch.toLowerCase()));

  const displayList = [
    'Below 6.0"',
    '6.0" – 6.4"',
    '6.5" – 6.7"',
    'Above 6.7"',
  ];

  const storageList = [
    '32GB & Below',
    '64GB',
    '128GB',
    '256GB',
    '512GB',
    '1TB & Above',
  ].filter(s => s.toLowerCase().includes(storageSearch.toLowerCase()));

  const ramList = [
    '2GB & Below',
    '4GB',
    '6GB',
    '8GB',
    '12GB',
    '12GB & Above',
  ].filter(r => r.toLowerCase().includes(ramSearch.toLowerCase()));

  const allBrandNames = [
    'Apple', 'Benco', 'Energizer', 'Google', 'HONOR', 'Huawei', 'Meizu',
    'Motorola', 'Nokia', 'Nothing', 'OnePlus', 'Oppo', 'Realme', 'Samsung',
    'Tecno', 'Vivo', 'Xiaomi', 'iQOO'
  ].filter(b => b.toLowerCase().includes(brandSearch.toLowerCase()));

  // FAQ Component
  const FAQItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-gray-200 py-4 last:border-b-0">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full text-left font-bold text-base md:text-lg text-gray-900 flex justify-between items-center cursor-pointer group"
        >
          <span className="group-hover:text-orange-500 transition-colors">{q}</span>
          <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-orange-500' : ''}`} />
        </button>
        {open && (
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {a}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="container pb-20 select-none">
      
      {/* 1. Hero Banner Figure (Clean matching aspect ratio) */}
      <figure className="relative hidden md:block pb-[24%] overflow-hidden mt-4 rounded-2xl bg-gray-100 border border-gray-200/80 shadow-xs">
        <img
          alt="Mobile Phones Banner"
          className="object-cover absolute inset-0 w-full h-full"
          src="https://adminapi.applegadgetsbd.com/storage/media/large/Mobile-Phones-7708.png"
          onError={(e) => {
            e.currentTarget.src = 'https://adminapi.applegadgetsbd.com/storage/media/large/logo-3717.png';
          }}
        />
      </figure>

      {/* 2. Exact Breadcrumbs */}
      <ol aria-label="Breadcrumb" className="flex items-center whitespace-nowrap mt-3.5 flex-wrap gap-1 text-xs md:text-sm text-gray-500">
        <li>
          <Link className="hover:text-orange-500 transition-colors" to="/category/mobile-phone">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <span>/</span>
          <Link to="/category/mobile-phone" className="text-gray-900 font-medium hover:text-orange-500 capitalize">
            mobile phone
          </Link>
        </li>
        {activeBrand.slug && (
          <li className="flex items-center gap-1">
            <span>/</span>
            <span className="text-gray-900 font-semibold capitalize">{activeBrand.name}</span>
          </li>
        )}
      </ol>

      {/* 3. Heading & Subtitle */}
      <div className="mt-3 space-y-1">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
          {activeBrand.slug ? `${activeBrand.name} Price in Bangladesh` : 'Mobile Phone Price in Bangladesh'}
        </h1>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          Latest Mobile Phone Price in Bangladesh start from BDT 2500 to BDT 555000, depending on Brand, Model, Specifications, and Features. Buy original smartphones from Apple Gadgets
        </p>
      </div>

      {/* Mobile Filters Button */}
      <div className="lg:hidden flex items-center justify-between mt-4 mb-2">
        <p className="text-sm font-medium text-gray-800">
          Showing: <span className="font-bold">({filteredPhones.length} Items)</span>
        </p>
        <button
          type="button"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black text-white text-xs font-semibold rounded-lg cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters</span>
        </button>
      </div>

      {/* 4. Grid Layout: Sidebar Filter Box + Products Grid */}
      <div className="grid lg:grid-cols-[280px_1fr] 2xl:grid-cols-[300px_1fr] gap-6 mt-6">
        
        {/* SIDEBAR FILTERS (Matches 100% of left side Screenshots 010752 to 010851) */}
        <aside
          className={`w-72 sm:w-80 lg:w-full fixed lg:static z-40 lg:z-0 bg-white top-0 h-full lg:h-auto p-4 lg:p-0 overflow-y-auto transition-all duration-300 ${
            mobileFilterOpen ? 'right-0 shadow-2xl' : '-right-96 lg:right-0'
          }`}
        >
          {mobileFilterOpen && (
            <div className="lg:hidden flex justify-between items-center mb-4 pb-2 border-b">
              <span className="font-bold text-base">Filter Products</span>
              <button onClick={() => setMobileFilterOpen(false)} className="text-sm font-bold text-orange-500">Close ✕</button>
            </div>
          )}

          <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-xs space-y-4">
            
            {/* Heading: Filters */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs text-gray-500 hover:text-orange-500 font-medium flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Price Range Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('price')}
              >
                <span className="font-bold text-sm text-gray-900">Price Range</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
              </div>

              {openSections.price && (
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="number"
                    value={tempMinPrice}
                    onChange={(e) => setTempMinPrice(e.target.value)}
                    className="w-24 text-center py-1.5 px-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-orange-500"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    value={tempMaxPrice}
                    onChange={(e) => setTempMaxPrice(e.target.value)}
                    className="w-28 text-center py-1.5 px-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-orange-500"
                  />
                  {/* Orange Play Button ▶ */}
                  <button
                    type="button"
                    onClick={handleApplyPrice}
                    className="size-9 rounded-lg border border-[#f97316] text-[#f97316] flex items-center justify-center hover:bg-orange-50 shrink-0 cursor-pointer transition-colors"
                    title="Apply Price"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Exclude Out of Stock Checkbox */}
            <div className="flex items-center gap-2.5 py-1">
              <input
                type="checkbox"
                id="excludeStock"
                checked={excludeOutOfStock}
                onChange={(e) => setExcludeOutOfStock(e.target.checked)}
                className="size-4.5 rounded accent-[#f97316] cursor-pointer"
              />
              <label htmlFor="excludeStock" className="text-sm font-medium text-gray-900 cursor-pointer">
                Exclude Out of Stock
              </label>
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Special Features Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('features')}
              >
                <span className="font-bold text-sm text-gray-900">Special Features</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.features ? 'rotate-180' : ''}`} />
              </div>

              {openSections.features && (
                <div className="pt-2 space-y-2">
                  <input
                    type="text"
                    value={featureSearch}
                    onChange={(e) => setFeatureSearch(e.target.value)}
                    placeholder="Search Special Features"
                    className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 text-xs px-3.5 py-2 rounded-full focus:outline-none"
                  />
                  <div className="space-y-1.5 pt-1">
                    {specialFeaturesList.map((feat) => (
                      <label key={feat} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feat)}
                          onChange={() => {
                            setSelectedFeatures(prev =>
                              prev.includes(feat) ? prev.filter(x => x !== feat) : [...prev, feat]
                            );
                          }}
                          className="size-4 rounded accent-orange-500 cursor-pointer"
                        />
                        <span>{feat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Battery Capacity Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('battery')}
              >
                <span className="font-bold text-sm text-gray-900">Battery Capacity</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.battery ? 'rotate-180' : ''}`} />
              </div>

              {openSections.battery && (
                <div className="pt-2 space-y-2">
                  <input
                    type="text"
                    value={batterySearch}
                    onChange={(e) => setBatterySearch(e.target.value)}
                    placeholder="Search Battery Capacity"
                    className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 text-xs px-3.5 py-2 rounded-full focus:outline-none"
                  />
                  <div className="space-y-1.5 pt-1">
                    {batteryList.map((bat) => (
                      <label key={bat} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedBattery.includes(bat)}
                          onChange={() => {
                            setSelectedBattery(prev =>
                              prev.includes(bat) ? prev.filter(x => x !== bat) : [...prev, bat]
                            );
                          }}
                          className="size-4 rounded accent-orange-500 cursor-pointer"
                        />
                        <span>{bat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Processor Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('processor')}
              >
                <span className="font-bold text-sm text-gray-900">Processor</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.processor ? 'rotate-180' : ''}`} />
              </div>

              {openSections.processor && (
                <div className="pt-2 space-y-2">
                  <input
                    type="text"
                    value={processorSearch}
                    onChange={(e) => setProcessorSearch(e.target.value)}
                    placeholder="Search Processor"
                    className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 text-xs px-3.5 py-2 rounded-full focus:outline-none"
                  />
                  <div className="space-y-1.5 pt-1">
                    {processorList.map((proc) => (
                      <label key={proc} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedProcessors.includes(proc)}
                          onChange={() => {
                            setSelectedProcessors(prev =>
                              prev.includes(proc) ? prev.filter(x => x !== proc) : [...prev, proc]
                            );
                          }}
                          className="size-4 rounded accent-orange-500 cursor-pointer"
                        />
                        <span>{proc}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Display Size Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('display')}
              >
                <span className="font-bold text-sm text-gray-900">Display Size</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.display ? 'rotate-180' : ''}`} />
              </div>

              {openSections.display && (
                <div className="pt-2 space-y-1.5">
                  {displayList.map((disp) => (
                    <label key={disp} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                      <input
                        type="checkbox"
                        checked={selectedDisplay.includes(disp)}
                        onChange={() => {
                          setSelectedDisplay(prev =>
                            prev.includes(disp) ? prev.filter(x => x !== disp) : [...prev, disp]
                          );
                        }}
                        className="size-4 rounded accent-orange-500 cursor-pointer"
                      />
                      <span>{disp}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Storage Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('storage')}
              >
                <span className="font-bold text-sm text-gray-900">Storage</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.storage ? 'rotate-180' : ''}`} />
              </div>

              {openSections.storage && (
                <div className="pt-2 space-y-2">
                  <input
                    type="text"
                    value={storageSearch}
                    onChange={(e) => setStorageSearch(e.target.value)}
                    placeholder="Search Storage"
                    className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 text-xs px-3.5 py-2 rounded-full focus:outline-none"
                  />
                  <div className="space-y-1.5 pt-1">
                    {storageList.map((st) => (
                      <label key={st} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedStorages.includes(st)}
                          onChange={() => {
                            setSelectedStorages(prev =>
                              prev.includes(st) ? prev.filter(x => x !== st) : [...prev, st]
                            );
                          }}
                          className="size-4 rounded accent-orange-500 cursor-pointer"
                        />
                        <span>{st}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* RAM Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('ram')}
              >
                <span className="font-bold text-sm text-gray-900">RAM</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.ram ? 'rotate-180' : ''}`} />
              </div>

              {openSections.ram && (
                <div className="pt-2 space-y-2">
                  <input
                    type="text"
                    value={ramSearch}
                    onChange={(e) => setRamSearch(e.target.value)}
                    placeholder="Search RAM"
                    className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 text-xs px-3.5 py-2 rounded-full focus:outline-none"
                  />
                  <div className="space-y-1.5 pt-1">
                    {ramList.map((r) => (
                      <label key={r} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedRAMs.includes(r)}
                          onChange={() => {
                            setSelectedRAMs(prev =>
                              prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
                            );
                          }}
                          className="size-4 rounded accent-orange-500 cursor-pointer"
                        />
                        <span>{r}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Network Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('network')}
              >
                <span className="font-bold text-sm text-gray-900">Network</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.network ? 'rotate-180' : ''}`} />
              </div>

              {openSections.network && (
                <div className="pt-2 space-y-1.5">
                  {['4G', '5G'].map((net) => (
                    <label key={net} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                      <input
                        type="checkbox"
                        checked={selectedNetworks.includes(net)}
                        onChange={() => {
                          setSelectedNetworks(prev =>
                            prev.includes(net) ? prev.filter(x => x !== net) : [...prev, net]
                          );
                        }}
                        className="size-4 rounded accent-orange-500 cursor-pointer"
                      />
                      <span>{net}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Brands Accordion */}
            <div>
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleSection('brands')}
              >
                <span className="font-bold text-sm text-gray-900">Brands</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSections.brands ? 'rotate-180' : ''}`} />
              </div>

              {openSections.brands && (
                <div className="pt-2 space-y-2">
                  <input
                    type="text"
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                    placeholder="Search Brand"
                    className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 text-xs px-3.5 py-2 rounded-full focus:outline-none"
                  />
                  <div className="space-y-1.5 pt-1 max-h-56 overflow-y-auto pr-1">
                    {allBrandNames.map((brandName) => {
                      const slug = brandName.toLowerCase();
                      const isChecked = selectedBrands.includes(slug);
                      return (
                        <label key={brandName} className="flex items-center gap-2.5 text-xs text-gray-800 cursor-pointer hover:text-orange-500 py-0.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleBrandToggle(slug)}
                            className="size-4 rounded accent-orange-500 cursor-pointer"
                          />
                          <span>{brandName}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* MAIN PRODUCT AREA */}
        <div>
          
          {/* Header Row: Showing Items & Sort Dropdown */}
          <div className="flex items-center justify-between mb-4">
            <p className="hidden lg:block text-sm font-normal text-gray-800">
              Showing: <span className="font-bold text-gray-900">({filteredPhones.length} Items)</span>
            </p>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs text-gray-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs sm:text-sm font-medium bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-orange-500 text-gray-800 cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-low">Price (Low &gt; High)</option>
                <option value="price-high">Price (High &gt; Low)</option>
              </select>
            </div>
          </div>

          {/* Product Cards Grid: 2 columns on mobile, 3 on lg */}
          {filteredPhones.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-gray-200">
              <p className="text-base font-bold text-gray-800">No phones match the selected filters.</p>
              <button
                onClick={resetAllFilters}
                className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
              {filteredPhones.map((phone) => (
                <ProductCard key={phone.id} phone={phone} />
              ))}
            </div>
          )}

          {/* PAGINATION (Matches 100% of Screenshot bottom/Screenshot 2026-10-11 010910.png) */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              <span>←</span>
              <span>Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className={`size-8 sm:size-9 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center cursor-pointer ${
                  currentPage === 1
                    ? 'bg-[#f97316] text-white font-bold'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                1
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(2)}
                className={`size-8 sm:size-9 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center cursor-pointer ${
                  currentPage === 2
                    ? 'bg-[#f97316] text-white font-bold'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                2
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(3)}
                className={`size-8 sm:size-9 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center cursor-pointer ${
                  currentPage === 3
                    ? 'bg-[#f97316] text-white font-bold'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                3
              </button>
              <span className="text-gray-400 text-xs px-1">...</span>
              <button
                type="button"
                onClick={() => setCurrentPage(13)}
                className="size-8 sm:size-9 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center justify-center cursor-pointer"
              >
                13
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(14)}
                className="size-8 sm:size-9 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center justify-center cursor-pointer"
              >
                14
              </button>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setCurrentPage(prev => Math.min(14, prev + 1))}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </div>

      {/* FULL WIDTH SEO CONTENT SECTION (ELIMINATES LEFT BLANK SPACE AS SEEN IN SCREENSHOT 105519) */}
      <div className="mt-16 space-y-10 text-gray-800 leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Buy Mobile Phone at Best Price in Bangladesh
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                Mobile phones are now more than just a device – they are our daily companion for communication, work, study, and entertainment. From budget-friendly smartphones to premium flagships, the mobile price in Bangladesh has become more affordable and diverse in recent years. At Apple Gadgets, you will find all the latest mobiles from world-renowned brands like{' '}
                <Link to="/category/mobile-phone/iphone" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Apple</Link>,{' '}
                <Link to="/category/mobile-phone/samsung" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Samsung</Link>,{' '}
                <Link to="/category/mobile-phone/xiaomi" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Xiaomi</Link>,{' '}
                <Link to="/category/mobile-phone/oppo" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Oppo</Link>,{' '}
                <Link to="/category/mobile-phone/realme" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Realme</Link>,{' '}
                <Link to="/category/mobile-phone/vivo" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Vivo</Link>, and more.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                No matter if you are looking for an entry-level phone, a mid-range smartphone, or a high-end flagship, we bring you the best deals at competitive prices. With both online shopping and{' '}
                <Link to="/category/mobile-phone" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">physical outlets in Dhaka</Link>, Apple Gadgets makes it easier than ever to buy your next mobile phone with trust and convenience.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Best Mobile Brands in Bangladesh (Available at Apple Gadgets)
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                At Apple Gadgets, you’ll find all the top mobile brands under one roof, making it easier to choose the right phone for your needs. If you want a premium flagship experience,{' '}
                <Link to="/category/mobile-phone/iphone" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Apple iPhones</Link> are always the first choice. For high-performance Android devices,{' '}
                <Link to="/category/mobile-phone/samsung" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Samsung</Link> delivers both flagship and mid-range options.{' '}
                <Link to="/category/mobile-phone/xiaomi" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Xiaomi</Link>, Redmi,{' '}
                <Link to="/category/mobile-phone/honor" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Honor</Link> and{' '}
                <Link to="/category/mobile-phone" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Poco</Link> offer budget-friendly smartphones with impressive features, while{' '}
                <Link to="/category/mobile-phone/realme" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Realme</Link>,{' '}
                <Link to="/category/mobile-phone/vivo" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Vivo</Link>, and{' '}
                <Link to="/category/mobile-phone/oppo" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Oppo</Link> are popular for stylish designs and great cameras.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                For gamers and performance lovers, brands like{' '}
                <Link to="/category/mobile-phone/iqoo" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iQOO</Link>,{' '}
                <Link to="/category/mobile-phone/oneplus" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">OnePlus</Link>, and Infinix provide excellent value with powerful processors and long-lasting batteries. You can also find{' '}
                <Link to="/category/mobile-phone/huawei" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Huawei</Link>,{' '}
                <Link to="/category/mobile-phone/nokia" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Nokia</Link>, Tecno,{' '}
                <Link to="/category/mobile-phone/motorola" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Motorola</Link>, and{' '}
                <Link to="/category/mobile-phone/google" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Google pixel phones</Link> for unique preferences.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                No matter your budget or brand choice,{' '}
                <Link to="/category/mobile-phone" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Apple Gadgets</Link> ensures you always get authentic devices, the latest models, and the best mobile price in Bangladesh.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mobile Price in Bangladesh – What to Consider Before Buying
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                Before choosing a mobile phone, it’s important to know what really matters. The first thing most people consider is budget. In Bangladesh,{' '}
                <span className="text-orange-500 underline underline-offset-2">mobile prices range from around 10,000 to 15,000 Tk</span> for entry-level devices to{' '}
                <span className="text-orange-500 underline underline-offset-2">20,000 to 30,000 Tk for mid-range phones</span>, and higher for premium models. Setting your budget first helps you narrow down your options and choose the best phone for your needs.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Next, check the display and design. Phones with a curve display offer a sleek, edge-to-edge look, while foldable models like folding phones deliver extra screen space and a futuristic design. Display quality, build materials, and durability are also key if you want a stylish device.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                For smooth performance, focus on the chipset, RAM, and storage. If you enjoy gaming or multitasking, a{' '}
                <span className="text-orange-500 underline underline-offset-2">gaming phone with a powerful processor</span> ensures smooth gameplay and fast performance. The camera quality is another big factor; wide-angle, ultrawide, or telephoto lenses give you better photography options.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Finally, don’t forget about battery and charging speed. A bigger battery with fast charging keeps you going all day. Features like 5G, water resistance, and security options add even more value to your phone.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Upgrade Your Mobile Experience with Accessories
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                Make the most of your mobile device with the right accessories. At Apple Gadgets, you can find a wide selection of mobile chargers, including popular{' '}
                <span className="text-orange-500 underline underline-offset-2">Anker</span> and{' '}
                <span className="text-orange-500 underline underline-offset-2">Samsung chargers</span>, as well as{' '}
                <span className="text-orange-500 underline underline-offset-2">phone coolers</span> to keep your device running smoothly during heavy use. All these accessories are available at affordable prices in Bangladesh, helping you enhance your phone experience effortlessly.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why Buy Mobile Phones from Apple Gadgets?
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                When it comes to buying a new phone, trust and authenticity matter the most. At Apple Gadgets, every mobile is 100% genuine and comes with a reliable service warranty and after-sales support. We make sure you always get the latest models at the most competitive price in Bangladesh.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Shopping with us is simple and flexible. You can order online from our website or visit any of our outlets to explore your favorite phones in person. With a wide range of brands, updated stock, and regular offers, Apple Gadgets is the best place to find the perfect phone that matches your budget and lifestyle.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Make Your Home Smarter and Life Easier with Apple Gadgets
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                At Apple Gadgets, we bring together the products that make your home work better for you. Find new-age{' '}
                <span className="text-orange-500 underline underline-offset-2">kitchen appliances</span> that enhance your cooking experience,{' '}
                <span className="text-orange-500 underline underline-offset-2">Smart Electronics</span>, and reliable{' '}
                <span className="text-orange-500 underline underline-offset-2">Geysers</span> to keep your home connected and comfortable. From{' '}
                <span className="text-orange-500 underline underline-offset-2">Blenders</span>,{' '}
                <span className="text-orange-500 underline underline-offset-2">Grinders</span>,{' '}
                <span className="text-orange-500 underline underline-offset-2">Ovens</span>,{' '}
                <span className="text-orange-500 underline underline-offset-2">Gas Stoves</span>,{' '}
                <span className="text-orange-500 underline underline-offset-2">Induction Cookers</span>, to{' '}
                <span className="text-orange-500 underline underline-offset-2">Electric Kettles</span>, every kitchen tool is chosen for convenience and quality. And for relaxing or entertaining, we have{' '}
                <span className="text-orange-500 underline underline-offset-2">TV</span>,{' '}
                <span className="text-orange-500 underline underline-offset-2">Speakers</span>,{' '}
                <span className="text-orange-500 underline underline-offset-2">Gaming console</span>, and many more to help you enjoy every moment with family and friends.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Every product is carefully selected to deliver real value, dependable performance, and trusted support to our customers.
              </p>
            </div>

            {/* EXACT 4-COLUMN LINKS TABLE FROM SCREENSHOT 011025 */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                All Mobile Price in Bangladesh
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3.5 gap-x-6 text-sm">
                <div><Link to="/product/iphone-16-pro-max" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 16</Link></div>
                <div><Link to="/product/iphone-16-pro" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 16 Pro</Link></div>
                <div><Link to="/product/iphone-16-pro-max" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 16 Plus</Link></div>
                <div><Link to="/product/iphone-16-pro-max" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 16 Pro Max</Link></div>

                <div><Link to="/product/iphone-16-pro-max" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone Air</Link></div>
                <div><Link to="/product/iphone-16-pro-max" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 17 Pro Max</Link></div>
                <div><Link to="/product/iphone-16-pro" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 17 Pro</Link></div>
                <div><Link to="/product/iphone-16-pro-max" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">iPhone 17</Link></div>

                <div><Link to="/product/samsung-galaxy-s25-ultra" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Galaxy S24 Ultra 5G</Link></div>
                <div><Link to="/product/samsung-galaxy-s25-ultra" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Galaxy S25 Ultra 5G</Link></div>
                <div><Link to="/product/samsung-galaxy-s25-ultra" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Galaxy A56 5G</Link></div>
                <div><Link to="/product/google-pixel-9-pro-xl" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Pixel 9a</Link></div>

                <div><Link to="/product/google-pixel-9-pro-xl" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Pixel 9 Pro XL</Link></div>
                <div><Link to="/product/google-pixel-9-pro-xl" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Pixel 9 Pro</Link></div>
                <div><Link to="/product/google-pixel-9-pro-xl" className="text-orange-500 underline underline-offset-2 hover:text-orange-600">Pixel 9 Pro Fold</Link></div>
              </div>
            </div>

            {/* EXACT FAQ SECTION FROM SCREENSHOT 011042 */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
              
              <div className="divide-y divide-gray-200">
                <FAQItem
                  q="Can I find mobiles in different price ranges at Apple Gadgets?"
                  a="Yes! At Apple Gadgets, you can explore mobiles across all budgets. Whether your budget is around 15,000 to 20,000 Tk for your phone or slightly higher like 20,000 to 25,000 Tk phones, you’ll find plenty of options to suit your needs. We also have premium phones for those looking for the latest high-end devices."
                />
                <FAQItem
                  q="Which mobile brands are best in Bangladesh?"
                  a="Several brands are popular and trusted in Bangladesh. Apple, Samsung, Xiaomi, Oppo, Vivo, Realme, and OnePlus are among the top choices, offering phones for every budget and lifestyle."
                />
                <FAQItem
                  q="What should I check in a mobile before buying?"
                  a="Focus on performance, battery, camera, display, and build quality. Features like gaming capabilities, curved display, or folding design phones may also matter depending on your needs."
                />
                <FAQItem
                  q="Are tablets available at Apple Gadgets?"
                  a="Yes, we also offer tablets from renowned brands like Apple, Samsung Galaxy tab, and Xiaomi pad. Whether you want a tablet for work, study, or entertainment, you’ll find authentic devices at competitive prices."
                />
                <FAQItem
                  q="What is the refund policy of Apple Gadgets?"
                  a="Apple Gadgets offers clear and customer-friendly refund policies. You can return or exchange products according to our guidelines, ensuring a safe and trustworthy shopping experience."
                />
              </div>
            </div>

          </div>

    </div>
  );
}
