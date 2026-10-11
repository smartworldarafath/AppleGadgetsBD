// Brands metadata for Apple Gadgets BD
export const BRANDS = [
  { id: 'all', name: 'All Phones', slug: '', icon: '📱' },
  { id: 'iphone', name: 'iPhone', slug: 'iphone', icon: '', count: 9 },
  { id: 'samsung', name: 'Samsung', slug: 'samsung', icon: '🪐', count: 8 },
  { id: 'google', name: 'Google Pixel', slug: 'google', icon: '🇬', count: 5 },
  { id: 'xiaomi', name: 'Xiaomi', slug: 'xiaomi', icon: '🟠', count: 5 },
  { id: 'poco', name: 'Poco', slug: 'poco', icon: '🟡', count: 2 },
  { id: 'oneplus', name: 'OnePlus', slug: 'oneplus', icon: '➕', count: 5 },
  { id: 'nothing', name: 'Nothing', slug: 'nothing', icon: '⚪', count: 3 },
  { id: 'motorola', name: 'Motorola', slug: 'motorola', icon: 'Ⓜ️', count: 4 },
  { id: 'honor', name: 'Honor', slug: 'honor', icon: '👑', count: 4 },
  { id: 'vivo', name: 'Vivo', slug: 'vivo', icon: '🔷', count: 3 },
  { id: 'oppo', name: 'Oppo', slug: 'oppo', icon: '🟢', count: 2 },
  { id: 'realme', name: 'Realme', slug: 'realme', icon: '🟡', count: 2 },
  { id: 'iqoo', name: 'iQOO', slug: 'iqoo', icon: '⚡', count: 2 },
  { id: 'infinix', name: 'Infinix', slug: 'infinix', icon: '🟢', count: 2 },
  { id: 'tecno', name: 'Tecno', slug: 'tecno', icon: '🔵', count: 2 },
  { id: 'huawei', name: 'Huawei', slug: 'huawei', icon: '🌺', count: 2 },
  { id: 'nokia', name: 'Nokia', slug: 'nokia', icon: '🟦', count: 2 },
];

export const PHONES = [
  // --- APPLE IPHONE ---
  {
    id: 'iphone-16-pro-max',
    slug: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'iphone',
    brandName: 'Apple',
    price: 144499,
    regularPrice: 154000,
    saveAmount: 9501,
    status: 'In Stock',
    badge: 'Hot Seller',
    isHot: true,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png',
      'https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-17-Pro-Max-cosmic-orange-8534.jpg',
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-17-Pro-Max-Silver-8139.jpg',
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-17-Pro-Max-Deep-Blue-4223.jpg'
    ],
    highlights: [
      '6.9-inch Super Retina XDR OLED Display with ProMotion 120Hz',
      'Apple A18 Pro Bionic Chip (3nm) with Apple Intelligence',
      '48MP Fusion Camera + 48MP Ultra-Wide + 12MP 5x Telephoto',
      'Grade 5 Titanium frame with Camera Control physical button',
      '4685 mAh all-day battery with MagSafe 25W fast charging'
    ],
    colors: [
      { name: 'Desert Titanium', hex: '#c5a78c' },
      { name: 'Natural Titanium', hex: '#9f9b96' },
      { name: 'White Titanium', hex: '#f0efe9' },
      { name: 'Black Titanium', hex: '#343538' }
    ],
    regions: ['Physical Dual SIM (HK/SG)', 'USA eSIM', 'AUS', 'JP Global'],
    storages: [
      { label: '256GB', price: 144499, regularPrice: 154000 },
      { label: '512GB', price: 172999, regularPrice: 182000 },
      { label: '1TB', price: 199999, regularPrice: 210000 }
    ],
    specs: {
      processor: 'Apple A18 Pro (3 nm)',
      display: '6.9" Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 2000 nits',
      mainCamera: '48MP (f/1.8, OIS) + 48MP Ultrawide + 12MP 5x Periscope',
      selfieCamera: '12MP TrueDepth (f/1.9, PDAF)',
      ram: '8GB Unified Memory',
      battery: '4685 mAh, 50% in 30 mins fast charge, 25W MagSafe',
      os: 'iOS 18 (Upgradable to latest)',
      network: '5G, Wi-Fi 7, Bluetooth 5.3, Thread, Ultra Wideband 2',
      build: 'Corning-made glass front/back, Grade 5 Titanium frame, IP68 water/dust',
      weight: '227 grams'
    },
    description: 'iPhone 16 Pro Max is forged in titanium and equipped with the blazing-fast A18 Pro chip, groundbreaking Camera Control button, and stunning 6.9-inch borderless Super Retina XDR display with pro camera systems.'
  },
  {
    id: 'iphone-16-pro',
    slug: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'iphone',
    brandName: 'Apple',
    price: 132499,
    regularPrice: 139000,
    saveAmount: 6501,
    status: 'In Stock',
    badge: 'Official BD',
    rating: 4.9,
    reviewsCount: 98,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png',
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-17-Pro-Max-Silver-8139.jpg'
    ],
    highlights: [
      '6.3-inch Super Retina XDR OLED with 120Hz ProMotion',
      'Apple A18 Pro chip with 6-core GPU',
      'Triple Camera System: 48MP + 48MP + 12MP 5x optical zoom',
      'Titanium finish with Ceramic Shield next generation'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#9f9b96' },
      { name: 'Desert Titanium', hex: '#c5a78c' },
      { name: 'Black Titanium', hex: '#343538' },
      { name: 'White Titanium', hex: '#f0efe9' }
    ],
    regions: ['Physical Dual SIM', 'USA eSIM', 'Global'],
    storages: [
      { label: '128GB', price: 132499, regularPrice: 139000 },
      { label: '256GB', price: 144999, regularPrice: 152000 },
      { label: '512GB', price: 169999, regularPrice: 178000 }
    ],
    specs: {
      processor: 'Apple A18 Pro (3 nm)',
      display: '6.3" LTPO Super Retina XDR OLED, 120Hz',
      mainCamera: '48MP + 48MP + 12MP 5x Periscope',
      selfieCamera: '12MP TrueDepth',
      ram: '8GB',
      battery: '3582 mAh, Fast Charging',
      os: 'iOS 18',
      network: '5G, Wi-Fi 7, Bluetooth 5.3',
      build: 'Titanium frame, IP68 water resistant',
      weight: '199 g'
    },
    description: 'The compact pro titan with the power of A18 Pro, 5x telephoto optical zoom on 6.3-inch format, and Apple Intelligence.'
  },
  {
    id: 'iphone-16',
    slug: 'iphone-16',
    name: 'iPhone 16',
    brand: 'iphone',
    brandName: 'Apple',
    price: 94999,
    regularPrice: 102000,
    saveAmount: 7001,
    status: 'In Stock',
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 110,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-163333-1411.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-163333-1411.png',
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-17-Mist-Blue-6029.jpg'
    ],
    highlights: [
      '6.1-inch Super Retina XDR OLED Display with Dynamic Island',
      'Apple A18 Bionic Chip built for Apple Intelligence',
      '48MP Fusion Dual Camera with 2x Telephoto quality crop',
      'Action Button & Camera Control button included'
    ],
    colors: [
      { name: 'Ultramarine', hex: '#4c6ea4' },
      { name: 'Teal', hex: '#87abb0' },
      { name: 'Pink', hex: '#ebaebe' },
      { name: 'White', hex: '#f0f0f2' },
      { name: 'Black', hex: '#303236' }
    ],
    regions: ['Physical Dual SIM', 'USA eSIM', 'Global'],
    storages: [
      { label: '128GB', price: 94999, regularPrice: 102000 },
      { label: '256GB', price: 107999, regularPrice: 115000 },
      { label: '512GB', price: 129999, regularPrice: 139000 }
    ],
    specs: {
      processor: 'Apple A18 (3 nm)',
      display: '6.1" Super Retina XDR OLED, 2000 nits peak',
      mainCamera: '48MP (f/1.6, sensor-shift OIS) + 12MP Ultrawide macro',
      selfieCamera: '12MP',
      ram: '8GB',
      battery: '3561 mAh, 25W MagSafe',
      os: 'iOS 18',
      network: '5G, Wi-Fi 7',
      build: 'Aerospace-grade aluminum, IP68',
      weight: '170 g'
    },
    description: 'Meet iPhone 16. Built for Apple Intelligence, featuring all-new Camera Control, vibrant color choices, and enhanced battery longevity.'
  },
  {
    id: 'iphone-15-pro-max',
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'iphone',
    brandName: 'Apple',
    price: 129999,
    regularPrice: 138000,
    saveAmount: 8001,
    status: 'In Stock',
    badge: 'Special Offer',
    rating: 4.9,
    reviewsCount: 220,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png'
    ],
    highlights: [
      '6.7-inch Super Retina XDR OLED 120Hz ProMotion',
      'Apple A17 Pro (3nm) gaming grade processor',
      '48MP Triple Camera with 5x Tetraprism Telephoto',
      'Aerospace Titanium build with Type-C USB 3.0'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#9f9b96' },
      { name: 'Blue Titanium', hex: '#37424e' },
      { name: 'White Titanium', hex: '#f0efe9' },
      { name: 'Black Titanium', hex: '#343538' }
    ],
    regions: ['Physical Dual SIM', 'USA eSIM', 'Global'],
    storages: [
      { label: '256GB', price: 129999, regularPrice: 138000 },
      { label: '512GB', price: 149999, regularPrice: 159000 },
      { label: '1TB', price: 174999, regularPrice: 185000 }
    ],
    specs: {
      processor: 'Apple A17 Pro (3 nm)',
      display: '6.7" Super Retina XDR OLED, 120Hz',
      mainCamera: '48MP + 12MP Ultrawide + 12MP 5x Telephoto',
      selfieCamera: '12MP TrueDepth',
      ram: '8GB',
      battery: '4441 mAh',
      os: 'iOS 17 (Upgradable to iOS 18)',
      network: '5G, Wi-Fi 6E',
      build: 'Titanium, IP68',
      weight: '221 g'
    },
    description: 'Titanium design, game-changing A17 Pro chip, versatile 5x optical camera zoom, and USB-C port.'
  },
  {
    id: 'iphone-15',
    slug: 'iphone-15',
    name: 'iPhone 15',
    brand: 'iphone',
    brandName: 'Apple',
    price: 76999,
    regularPrice: 84000,
    saveAmount: 7001,
    status: 'In Stock',
    badge: 'Best Value',
    rating: 4.8,
    reviewsCount: 165,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-15-Plus-(6)-2055.jpg',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-15-Plus-(6)-2055.jpg'
    ],
    highlights: [
      'Dynamic Island on 6.1" Super Retina display',
      '48MP Main Camera with super-high resolution photos',
      'A16 Bionic chip with 5-core GPU',
      'Universal USB-C charging connector'
    ],
    colors: [
      { name: 'Black', hex: '#343538' },
      { name: 'Blue', hex: '#d4e3ea' },
      { name: 'Green', hex: '#d7e4d8' },
      { name: 'Yellow', hex: '#f7f2cf' },
      { name: 'Pink', hex: '#f4d9d8' }
    ],
    regions: ['Physical Dual SIM', 'USA eSIM', 'Global'],
    storages: [
      { label: '128GB', price: 76999, regularPrice: 84000 },
      { label: '256GB', price: 89999, regularPrice: 97000 }
    ],
    specs: {
      processor: 'Apple A16 Bionic (4 nm)',
      display: '6.1" Super Retina XDR OLED, 2000 nits',
      mainCamera: '48MP + 12MP Ultrawide',
      selfieCamera: '12MP',
      ram: '6GB',
      battery: '3349 mAh, USB-C',
      os: 'iOS 17',
      network: '5G, Wi-Fi 6',
      build: 'Color-infused glass, Aluminum, IP68',
      weight: '171 g'
    },
    description: 'Dynamic Island, 48MP camera, and USB-C wrapped in durable color-infused glass and aluminum.'
  },
  {
    id: 'iphone-18-pro-max',
    slug: 'iphone-18-pro-max',
    name: 'iPhone 18 Pro Max',
    brand: 'iphone',
    brandName: 'Apple',
    price: 207999,
    regularPrice: 212000,
    saveAmount: 4001,
    status: 'Pre Order',
    badge: 'Upcoming Flagship',
    rating: 5.0,
    reviewsCount: 34,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-18-Pro-Max-1213.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-18-Pro-Max-1213.png',
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-18-Pro-Max4-9025.png'
    ],
    highlights: [
      'Next Gen 2nm A19 Pro Neural Superchip',
      'Quantum OLED 144Hz borderless display',
      'Under-display Face ID & 200MP Quad-fusion optics',
      'Titanium-Ceramic unibody construction'
    ],
    colors: [
      { name: 'Cosmic Bronze', hex: '#946747' },
      { name: 'Titanium Silver', hex: '#d6d7db' },
      { name: 'Space Obsidian', hex: '#1c1d21' }
    ],
    regions: ['Global Dual SIM', 'USA eSIM Satellite'],
    storages: [
      { label: '512GB', price: 207999, regularPrice: 212000 },
      { label: '1TB', price: 239999, regularPrice: 249000 },
      { label: '2TB', price: 279999, regularPrice: 289000 }
    ],
    specs: {
      processor: 'Apple A19 Pro (2 nm TSMC)',
      display: '6.9" Quantum Retina XDR, 144Hz ProMotion, 3000 nits',
      mainCamera: '200MP Quad Fusion + 48MP Telephoto 10x',
      selfieCamera: '24MP Under-Display',
      ram: '12GB Unified RAM',
      battery: '5100 mAh, 45W Wired, 30W MagSafe',
      os: 'iOS 19',
      network: '6G Ready / 5G Advanced, Wi-Fi 7',
      build: 'Ceramic-Titanium, IP69 rating',
      weight: '224 g'
    },
    description: 'The futuristic pinnacle of smartphone engineering with 2nm silicon, under-screen biometric arrays, and next-era computational intelligence.'
  },

  // --- SAMSUNG ---
  {
    id: 'galaxy-s25-ultra-5g',
    slug: 'galaxy-s25-ultra-5g',
    name: 'Samsung Galaxy S25 Ultra 5G',
    brand: 'samsung',
    brandName: 'Samsung',
    price: 98499,
    regularPrice: 101000,
    saveAmount: 2501,
    status: 'In Stock',
    badge: 'AI Flagship',
    isHot: true,
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-Ultra-5G-Titanium-Silver-Blue-1865.jpg',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-Ultra-5G-Titanium-Silver-Blue-1865.jpg',
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S26-Ultra-black-4396.png'
    ],
    highlights: [
      'Snapdragon 8 Elite for Galaxy (3nm) processor',
      '200MP Quad Telephoto Camera System with Galaxy AI',
      '6.8-inch Dynamic AMOLED 2X flat display with Anti-reflective Armor',
      'Built-in S-Pen with lower latency and remote Bluetooth control',
      '5000 mAh battery with 45W super fast charging'
    ],
    colors: [
      { name: 'Titanium Silver Blue', hex: '#778899' },
      { name: 'Titanium Black', hex: '#2b2b2c' },
      { name: 'Titanium Gray', hex: '#7b7b7c' },
      { name: 'Titanium Yellow', hex: '#d8cc96' }
    ],
    regions: ['Official BD (Dual SIM)', 'Snapdragon USA / HK Dual SIM'],
    storages: [
      { label: '256GB / 12GB', price: 98499, regularPrice: 101000 },
      { label: '512GB / 12GB', price: 112999, regularPrice: 118000 },
      { label: '1TB / 16GB', price: 134999, regularPrice: 142000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Elite for Galaxy (3 nm)',
      display: '6.8" Dynamic LTPO AMOLED 2X, 120Hz, 2600 nits, Gorilla Armor',
      mainCamera: '200MP (OIS) + 50MP Periscope (5x) + 10MP (3x) + 50MP Ultrawide',
      selfieCamera: '12MP Dual Pixel AF',
      ram: '12GB / 16GB LPDDR5X',
      battery: '5000 mAh, 45W wired, 15W wireless',
      os: 'Android 15, One UI 7 (7 years of OS updates)',
      network: '5G, Wi-Fi 7, Bluetooth 5.4, UWB',
      build: 'Titanium frame, IP68 water/dust proof',
      weight: '219 g'
    },
    description: 'Galaxy S25 Ultra brings the extraordinary Galaxy AI experience, rounded ergonomic corners, Titanium casing, and unmatched camera clarity.'
  },
  {
    id: 'galaxy-s25-5g',
    slug: 'galaxy-s25-5g',
    name: 'Samsung Galaxy S25 5G',
    brand: 'samsung',
    brandName: 'Samsung',
    price: 72999,
    regularPrice: 82000,
    saveAmount: 9001,
    status: 'In Stock',
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-5Gaaaaa-6991.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-5Gaaaaa-6991.png'
    ],
    highlights: [
      'Compact 6.2" Dynamic AMOLED 2X with 120Hz LTPO',
      'Snapdragon 8 Elite / Exynos 2500 performance',
      '50MP Triple Camera with AI Zoom Enhancer',
      'Lightweight aluminum armor body'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#262626' },
      { name: 'Marble Gray', hex: '#d1d1d6' },
      { name: 'Cobalt Violet', hex: '#4e4376' },
      { name: 'Amber Yellow', hex: '#f9d371' }
    ],
    regions: ['Official BD Dual SIM', 'Global'],
    storages: [
      { label: '128GB / 8GB', price: 72999, regularPrice: 82000 },
      { label: '256GB / 12GB', price: 79999, regularPrice: 89000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Elite / Exynos 2500',
      display: '6.2" Dynamic AMOLED 2X, 120Hz, 2600 nits',
      mainCamera: '50MP (OIS) + 10MP Telephoto (3x) + 12MP Ultrawide',
      selfieCamera: '12MP',
      ram: '8GB / 12GB',
      battery: '4000 mAh, 25W Fast Charging',
      os: 'Android 15, One UI 7',
      network: '5G, Wi-Fi 7',
      build: 'Armor Aluminum 2, IP68',
      weight: '167 g'
    },
    description: 'The ultimate compact powerhouse delivering flagship Galaxy AI features and pro-grade cameras in your palm.'
  },
  {
    id: 'galaxy-s25-fe-5g',
    slug: 'galaxy-s25-fe-5g',
    name: 'Samsung Galaxy S25 FE 5G',
    brand: 'samsung',
    brandName: 'Samsung',
    price: 62499,
    regularPrice: 68000,
    saveAmount: 5501,
    status: 'In Stock',
    badge: 'Fan Edition',
    rating: 4.7,
    reviewsCount: 64,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-FE-5Ga-9257.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-FE-5Ga-9257.png'
    ],
    highlights: [
      '6.7-inch Dynamic AMOLED 2X 120Hz screen',
      'Pro-grade 50MP triple camera system',
      '4700 mAh large battery with fast charging',
      'Flagship Galaxy AI productivity suite'
    ],
    colors: [
      { name: 'Blue', hex: '#6ba4b8' },
      { name: 'Graphite', hex: '#373a40' },
      { name: 'Mint', hex: '#9ed5c5' },
      { name: 'Yellow', hex: '#f6d860' }
    ],
    regions: ['Official Dual SIM', 'Global'],
    storages: [
      { label: '128GB / 8GB', price: 62499, regularPrice: 68000 },
      { label: '256GB / 8GB', price: 67999, regularPrice: 74000 }
    ],
    specs: {
      processor: 'Exynos 2400e (4 nm)',
      display: '6.7" Dynamic AMOLED 2X, 120Hz',
      mainCamera: '50MP (OIS) + 8MP (3x Tele) + 12MP Ultrawide',
      selfieCamera: '10MP',
      ram: '8GB',
      battery: '4700 mAh, 25W Charging',
      os: 'Android 14 / 15, One UI',
      network: '5G, Wi-Fi 6E',
      build: 'Aluminum frame, IP68',
      weight: '213 g'
    },
    description: 'Designed for the fans with flagship performance, brilliant camera features, and all the essential Galaxy AI tools.'
  },
  {
    id: 'galaxy-a57-5g',
    slug: 'galaxy-a57-5g',
    name: 'Samsung Galaxy A57 5G',
    brand: 'samsung',
    brandName: 'Samsung',
    price: 44999,
    regularPrice: 48500,
    saveAmount: 3501,
    status: 'In Stock',
    badge: 'Midrange King',
    rating: 4.8,
    reviewsCount: 92,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-A57-5G-6910.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-A57-5G-6910.png'
    ],
    highlights: [
      '6.6" Super AMOLED 120Hz display with Vision Booster',
      'Premium metal frame and Gorilla Glass Victus+ back',
      '50MP OIS Camera with Nightography',
      '5000 mAh battery with 2 days usage'
    ],
    colors: [
      { name: 'Awesome Iceblue', hex: '#c5e3f6' },
      { name: 'Awesome Navy', hex: '#1e293b' },
      { name: 'Awesome Lilac', hex: '#d8b4e2' }
    ],
    regions: ['Official BD', 'International Dual SIM'],
    storages: [
      { label: '128GB / 8GB', price: 44999, regularPrice: 48500 },
      { label: '256GB / 8GB', price: 48999, regularPrice: 53000 }
    ],
    specs: {
      processor: 'Exynos 1580 (4 nm)',
      display: '6.6" Super AMOLED, 120Hz, 1000 nits',
      mainCamera: '50MP (OIS) + 12MP Ultrawide + 5MP Macro',
      selfieCamera: '32MP',
      ram: '8GB',
      battery: '5000 mAh, 25W',
      os: 'Android 15, One UI 7',
      network: '5G, Wi-Fi 6',
      build: 'Metal frame, IP67 water resistant',
      weight: '213 g'
    },
    description: 'Premium metal design, stellar low-light camera, and enduring battery make Galaxy A57 the quintessential mid-range leader.'
  },

  // --- GOOGLE PIXEL ---
  {
    id: 'pixel-9-pro-xl',
    slug: 'pixel-9-pro-xl',
    name: 'Google Pixel 9 Pro XL',
    brand: 'google',
    brandName: 'Google',
    price: 114999,
    regularPrice: 124000,
    saveAmount: 9001,
    status: 'In Stock',
    badge: 'Gemini AI',
    isHot: true,
    rating: 4.9,
    reviewsCount: 84,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-17-Pro-Max-cosmic-orange-8534.jpg',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-17-Pro-Max-cosmic-orange-8534.jpg'
    ],
    highlights: [
      'Google Tensor G4 Chip with 16GB RAM for Gemini Nano',
      '6.8-inch Super Actua LTPO OLED (3000 nits peak)',
      '50MP Triple Camera with 30x Super Res Zoom & Video Boost',
      '7 years of Android OS and Feature Drop updates'
    ],
    colors: [
      { name: 'Obsidian', hex: '#232528' },
      { name: 'Porcelain', hex: '#ebe7df' },
      { name: 'Hazel', hex: '#63655d' },
      { name: 'Rose Quartz', hex: '#e8c4c4' }
    ],
    regions: ['Japan Global', 'USA Unlocked', 'Physical Dual/eSIM'],
    storages: [
      { label: '128GB / 16GB', price: 114999, regularPrice: 124000 },
      { label: '256GB / 16GB', price: 126999, regularPrice: 136000 },
      { label: '512GB / 16GB', price: 144999, regularPrice: 155000 }
    ],
    specs: {
      processor: 'Google Tensor G4 (4 nm) + Titan M2 security',
      display: '6.8" LTPO OLED, 120Hz, 3000 nits, Gorilla Glass Victus 2',
      mainCamera: '50MP (OIS) + 48MP (5x Periscope) + 48MP Ultrawide',
      selfieCamera: '42MP Dual PD with AF',
      ram: '16GB',
      battery: '5060 mAh, 37W wired, 23W wireless',
      os: 'Android 15 (Pure Google Experience)',
      network: '5G, Wi-Fi 7, Bluetooth 5.3, Satellite SOS',
      build: 'Polished metal frame, Matte glass back, IP68',
      weight: '221 g'
    },
    description: 'The biggest, brightest Pixel yet powered by Tensor G4 and packed with on-device multimodal Gemini AI.'
  },
  {
    id: 'pixel-8a',
    slug: 'pixel-8a',
    name: 'Google Pixel 8a',
    brand: 'google',
    brandName: 'Google',
    price: 49999,
    regularPrice: 56000,
    saveAmount: 6001,
    status: 'In Stock',
    badge: 'AI Budget',
    rating: 4.8,
    reviewsCount: 77,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-163333-1411.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-163333-1411.png'
    ],
    highlights: [
      'Google Tensor G3 chip with Google AI features',
      '6.1" Actua 120Hz OLED smooth display',
      '64MP Dual Rear Camera with Best Take and Magic Editor',
      '7 years of guaranteed software updates'
    ],
    colors: [
      { name: 'Bay Blue', hex: '#6590b5' },
      { name: 'Aloe Green', hex: '#a1c181' },
      { name: 'Obsidian', hex: '#26282a' },
      { name: 'Porcelain', hex: '#eceae4' }
    ],
    regions: ['Global', 'USA Unlocked'],
    storages: [
      { label: '128GB / 8GB', price: 49999, regularPrice: 56000 },
      { label: '256GB / 8GB', price: 56999, regularPrice: 63000 }
    ],
    specs: {
      processor: 'Google Tensor G3 (4 nm)',
      display: '6.1" OLED, 120Hz, 2000 nits peak',
      mainCamera: '64MP (OIS) + 13MP Ultrawide',
      selfieCamera: '13MP',
      ram: '8GB LPDDR5x',
      battery: '4492 mAh, 18W',
      os: 'Android 14 / 15',
      network: '5G, Wi-Fi 6E',
      build: 'Aluminum frame, IP67',
      weight: '188 g'
    },
    description: 'Pixel 8a delivers Google AI camera wizardry, delightful pastels, and flagship Tensor G3 processing power at a sensible price.'
  },

  // --- XIAOMI ---
  {
    id: 'xiaomi-14-ultra',
    slug: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra 5G',
    brand: 'xiaomi',
    brandName: 'Xiaomi',
    price: 104999,
    regularPrice: 115000,
    saveAmount: 10001,
    status: 'In Stock',
    badge: 'Leica Master',
    isHot: true,
    rating: 4.9,
    reviewsCount: 115,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-Pro-5G-9101.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-Pro-5G-9101.png'
    ],
    highlights: [
      '1-inch Sony LYT-900 sensor with stepless variable aperture',
      'Quad 50MP Leica optical camera system',
      'Snapdragon 8 Gen 3 with IceLoop liquid cooling',
      '6.73" WQHD+ AMOLED 120Hz with 3000 nits'
    ],
    colors: [
      { name: 'Black Vegan Leather', hex: '#1c1c1c' },
      { name: 'White Vegan Leather', hex: '#e8e8e6' },
      { name: 'Blue Ceramic', hex: '#3b5368' }
    ],
    regions: ['Global Version (Official)', 'China Rom Dual SIM'],
    storages: [
      { label: '512GB / 16GB', price: 104999, regularPrice: 115000 },
      { label: '1TB / 16GB', price: 119999, regularPrice: 130000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 3 (4 nm)',
      display: '6.73" LTPO AMOLED, 120Hz, Dolby Vision, 3000 nits',
      mainCamera: '50MP (1" LYT-900) + 50MP (3.2x) + 50MP (5x Periscope) + 50MP Ultrawide',
      selfieCamera: '32MP',
      ram: '16GB LPDDR5X',
      battery: '5000 mAh (Global) / 5300 mAh, 90W Wired, 80W Wireless',
      os: 'Xiaomi HyperOS (Android 14/15)',
      network: '5G, Wi-Fi 7, Two-way Satellite',
      build: 'Titanium / High-strength Aluminum, IP68',
      weight: '220 g'
    },
    description: 'A genuine camera titan engineered with Leica Summilux lenses and unmatched photographic versatility.'
  },
  {
    id: 'redmi-note-13-pro-plus',
    slug: 'redmi-note-13-pro-plus',
    name: 'Xiaomi Redmi Note 13 Pro+ 5G',
    brand: 'xiaomi',
    brandName: 'Xiaomi',
    price: 36999,
    regularPrice: 41000,
    saveAmount: 4001,
    status: 'In Stock',
    badge: 'Super Seller',
    rating: 4.8,
    reviewsCount: 198,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-A57-5G-6910.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-A57-5G-6910.png'
    ],
    highlights: [
      '200MP OIS Ultra-Clear Main Camera',
      '1.5K 120Hz Curved AMOLED display',
      '120W HyperCharge (100% in 19 mins)',
      'IP68 Water and Dust Resistance'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#1c1c1e' },
      { name: 'Moonlight White', hex: '#f2f2f4' },
      { name: 'Aurora Purple', hex: '#bba7cb' }
    ],
    regions: ['Official BD', 'Global Dual SIM'],
    storages: [
      { label: '256GB / 8GB', price: 36999, regularPrice: 41000 },
      { label: '512GB / 12GB', price: 41999, regularPrice: 46000 }
    ],
    specs: {
      processor: 'MediaTek Dimensity 7200-Ultra (4 nm)',
      display: '6.67" Curved AMOLED, 120Hz, 1800 nits, Dolby Vision',
      mainCamera: '200MP (OIS) + 8MP Ultrawide + 2MP Macro',
      selfieCamera: '16MP',
      ram: '8GB / 12GB',
      battery: '5000 mAh, 120W HyperCharge',
      os: 'HyperOS (Android 14)',
      network: '5G, Wi-Fi 6',
      build: 'Gorilla Glass Victus, IP68',
      weight: '204 g'
    },
    description: '200MP flagship photography meets 120W HyperCharge in a curved, IP68 water-resistant masterpiece.'
  },

  // --- ONEPLUS ---
  {
    id: 'oneplus-13-5g',
    slug: 'oneplus-13-5g',
    name: 'OnePlus 13 5G',
    brand: 'oneplus',
    brandName: 'OnePlus',
    price: 94499,
    regularPrice: 102000,
    saveAmount: 7501,
    status: 'In Stock',
    badge: 'New Arrival',
    isHot: true,
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-60-Pro-5Ga-4221.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-60-Pro-5Ga-4221.png'
    ],
    highlights: [
      'Snapdragon 8 Elite Processor with 24GB LPDDR5X option',
      '6000 mAh Glacier Silicon-Carbon battery with 100W charge',
      'Hasselblad Triple 50MP Cameras with periscope zoom',
      '2K 120Hz Oriental Screen 2.0 with Glove & Rain touch'
    ],
    colors: [
      { name: 'Black Eclipse', hex: '#1d1e21' },
      { name: 'Midnight Ocean Blue', hex: '#264653' },
      { name: 'White Dawn', hex: '#f4f4f6' }
    ],
    regions: ['OxygenOS Global', 'China Dual SIM Flashed'],
    storages: [
      { label: '256GB / 12GB', price: 94499, regularPrice: 102000 },
      { label: '512GB / 16GB', price: 104999, regularPrice: 114000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Elite (3 nm)',
      display: '6.82" LTPO AMOLED 2K, 120Hz, 4500 nits peak',
      mainCamera: '50MP (LYT-808, OIS) + 50MP (3x Periscope) + 50MP Ultrawide',
      selfieCamera: '32MP',
      ram: '12GB / 16GB / 24GB',
      battery: '6000 mAh, 100W SuperVOOC, 50W AIRVOOC',
      os: 'OxygenOS 15 (Android 15)',
      network: '5G, Wi-Fi 7, Bluetooth 5.4',
      build: 'Micro-quad curved glass, IP68 / IP69',
      weight: '213 g'
    },
    description: 'OnePlus 13 sets a new benchmark in speed, endurance with a gargantuan 6000 mAh cell, and Hasselblad imaging brilliance.'
  },
  {
    id: 'oneplus-12r',
    slug: 'oneplus-12r',
    name: 'OnePlus 12R 5G',
    brand: 'oneplus',
    brandName: 'OnePlus',
    price: 52999,
    regularPrice: 58000,
    saveAmount: 5001,
    status: 'In Stock',
    badge: 'Performance Champ',
    rating: 4.8,
    reviewsCount: 132,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-70-Fusion-5G-orient-blue-1907.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-70-Fusion-5G-orient-blue-1907.png'
    ],
    highlights: [
      'Snapdragon 8 Gen 2 gaming chip',
      '5500 mAh battery with 100W SUPERVOOC charging',
      '4th-Gen 120Hz ProXDR Display with LTPO 4.0',
      'Dual Cryo-velocity VC cooling system'
    ],
    colors: [
      { name: 'Cool Blue', hex: '#688db3' },
      { name: 'Iron Gray', hex: '#3e3e42' }
    ],
    regions: ['Official BD', 'Global Dual SIM'],
    storages: [
      { label: '128GB / 8GB', price: 52999, regularPrice: 58000 },
      { label: '256GB / 16GB', price: 58999, regularPrice: 65000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 2 (4 nm)',
      display: '6.78" 1.5K AMOLED, 120Hz, 4500 nits, Dolby Vision',
      mainCamera: '50MP (Sony IMX890, OIS) + 8MP Ultrawide + 2MP Macro',
      selfieCamera: '16MP',
      ram: '8GB / 16GB',
      battery: '5500 mAh, 100W Fast Charge',
      os: 'OxygenOS 14 (Upgradable to 15)',
      network: '5G, Wi-Fi 7',
      build: 'Aluminum frame, Corning Gorilla Glass Victus 2',
      weight: '207 g'
    },
    description: 'Built for gamers and power-users wanting raw speed, 5500 mAh battery, and ultra-smooth OxygenOS.'
  },

  // --- NOTHING ---
  {
    id: 'nothing-phone-2',
    slug: 'nothing-phone-2',
    name: 'Nothing Phone (2)',
    brand: 'nothing',
    brandName: 'Nothing',
    price: 57999,
    regularPrice: 64000,
    saveAmount: 6001,
    status: 'In Stock',
    badge: 'Glyph Icon',
    rating: 4.8,
    reviewsCount: 95,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iphone-duo-7214.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iphone-duo-7214.png'
    ],
    highlights: [
      'Unique Glyph Interface with 33 addressable LED zones',
      'Snapdragon 8+ Gen 1 flagship processor',
      'Dual 50MP Sony flagship sensors (IMX890 OIS)',
      'Nothing OS 2.5 with clean monochrome widget aesthetics'
    ],
    colors: [
      { name: 'Dark Grey', hex: '#2e3033' },
      { name: 'White', hex: '#f2f3f5' }
    ],
    regions: ['Global Dual SIM', 'India Dual SIM'],
    storages: [
      { label: '128GB / 8GB', price: 57999, regularPrice: 64000 },
      { label: '256GB / 12GB', price: 63999, regularPrice: 70000 },
      { label: '512GB / 12GB', price: 71999, regularPrice: 78000 }
    ],
    specs: {
      processor: 'Snapdragon 8+ Gen 1 (4 nm)',
      display: '6.7" LTPO OLED, 120Hz, 1600 nits, HDR10+',
      mainCamera: '50MP (OIS) + 50MP Ultrawide',
      selfieCamera: '32MP',
      ram: '8GB / 12GB',
      battery: '4700 mAh, 45W wired, 15W wireless, 5W reverse',
      os: 'Nothing OS 2.5 (Android 14)',
      network: '5G, Wi-Fi 6',
      build: 'Transparent pillowed glass, recycled aluminum, IP54',
      weight: '201 g'
    },
    description: 'The transparent design icon engineered with a brighter Glyph interface, Sony 50MP optics, and refined hardware.'
  },

  // --- MOTOROLA ---
  {
    id: 'motorola-edge-70-fusion',
    slug: 'motorola-edge-70-fusion',
    name: 'Motorola Edge 70 Fusion 5G',
    brand: 'motorola',
    brandName: 'Motorola',
    price: 38499,
    regularPrice: 42000,
    saveAmount: 3501,
    status: 'In Stock',
    badge: 'Pantone Design',
    rating: 4.7,
    reviewsCount: 52,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-70-Fusion-5G-orient-blue-1907.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-70-Fusion-5G-orient-blue-1907.png'
    ],
    highlights: [
      'Curved 6.7" pOLED 144Hz 10-bit display',
      'Sony LYT-700C 50MP OIS sensor',
      'Curved vegan leather back with Pantone Curated colors',
      'IP68 underwater protection rating'
    ],
    colors: [
      { name: 'Orient Blue', hex: '#2b5876' },
      { name: 'Forest Green', hex: '#2d5a27' },
      { name: 'Marshmallow White', hex: '#f3f4f6' }
    ],
    regions: ['Official Dual SIM', 'Global'],
    storages: [
      { label: '256GB / 8GB', price: 38499, regularPrice: 42000 },
      { label: '256GB / 12GB', price: 41999, regularPrice: 46000 }
    ],
    specs: {
      processor: 'Snapdragon 7s Gen 2 (4 nm)',
      display: '6.7" Endless Edge pOLED, 144Hz, 1600 nits',
      mainCamera: '50MP (LYT-700C, OIS) + 13MP Ultrawide Macro',
      selfieCamera: '32MP',
      ram: '8GB / 12GB',
      battery: '5000 mAh, 68W TurboPower',
      os: 'Hello UI (Android 14)',
      network: '5G, Wi-Fi 6',
      build: 'Vegan leather / PMMA, IP68',
      weight: '175 g'
    },
    description: 'Immaculately contoured vegan leather, 144Hz curved screen, and flagship-level IP68 water submersion resistance.'
  },
  {
    id: 'motorola-edge-60-pro-5g',
    slug: 'motorola-edge-60-pro-5g',
    name: 'Motorola Edge 60 Pro 5G',
    brand: 'motorola',
    brandName: 'Motorola',
    price: 61999,
    regularPrice: 67000,
    saveAmount: 5001,
    status: 'In Stock',
    badge: 'Pro Grade',
    rating: 4.8,
    reviewsCount: 41,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-60-Pro-5Ga-4221.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-60-Pro-5Ga-4221.png'
    ],
    highlights: [
      'Snapdragon 8s Gen 3 processor',
      '125W TurboPower wired + 50W wireless',
      'Pantone Validated camera & display',
      'Triple 50MP Camera with 3x optical periscope'
    ],
    colors: [
      { name: 'Luxe Lavender', hex: '#a29bfe' },
      { name: 'Black Beauty', hex: '#1e2022' }
    ],
    regions: ['Global Dual SIM'],
    storages: [
      { label: '256GB / 12GB', price: 61999, regularPrice: 67000 },
      { label: '512GB / 16GB', price: 69999, regularPrice: 76000 }
    ],
    specs: {
      processor: 'Snapdragon 8s Gen 3',
      display: '6.7" Super HD (1220p) pOLED, 144Hz, 2000 nits',
      mainCamera: '50MP (OIS) + 50MP Ultrawide + 64MP 3x Telephoto',
      selfieCamera: '50MP AF',
      ram: '12GB / 16GB',
      battery: '4500 mAh, 125W TurboPower',
      os: 'Android 14 Hello UI',
      network: '5G, Wi-Fi 7',
      build: 'Sandblasted aluminum frame, IP68',
      weight: '186 g'
    },
    description: 'Featherweight luxury with blistering 125W charging, Pantone color tuning, and full focal range triple cameras.'
  },

  // --- HONOR ---
  {
    id: 'honor-600-pro',
    slug: 'honor-600-pro',
    name: 'Honor 600 Pro 5G',
    brand: 'honor',
    brandName: 'Honor',
    price: 78999,
    regularPrice: 84000,
    saveAmount: 5001,
    status: 'In Stock',
    badge: 'AI Falcon',
    rating: 4.8,
    reviewsCount: 45,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-Pro-5G-9101.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-Pro-5G-9101.png'
    ],
    highlights: [
      'Studio Harcourt Portrait mode engine',
      'Snapdragon 8s Gen 3 with GPU Turbo X',
      '5200 mAh Silicon-Carbon battery with 100W charge',
      '3840Hz Risk-Free PWM Dimming quad-curved screen'
    ],
    colors: [
      { name: 'Ocean Cyan', hex: '#529699' },
      { name: 'Moonlight White', hex: '#f0f0f3' },
      { name: 'Black', hex: '#1c1d1f' }
    ],
    regions: ['Official Dual SIM', 'Global'],
    storages: [
      { label: '256GB / 12GB', price: 78999, regularPrice: 84000 },
      { label: '512GB / 16GB', price: 86999, regularPrice: 93000 }
    ],
    specs: {
      processor: 'Snapdragon 8s Gen 3 (4 nm)',
      display: '6.78" AMOLED, 120Hz, 4000 nits peak, 3840Hz PWM',
      mainCamera: '50MP (H9000, OIS) + 50MP (2.5x Telephoto) + 12MP Ultrawide',
      selfieCamera: '50MP Dual Selfie',
      ram: '12GB / 16GB',
      battery: '5200 mAh, 100W Wired, 66W Wireless',
      os: 'MagicOS 8.0 (Android 14)',
      network: '5G, Wi-Fi 7',
      build: 'Artisanal glass, IP55 / IP65 splash resist',
      weight: '199 g'
    },
    description: 'Co-engineered with legendary Studio Harcourt Paris for studio portrait lighting and Silicon-Carbon battery marathon power.'
  },
  {
    id: 'honor-600',
    slug: 'honor-600',
    name: 'Honor 600 5G',
    brand: 'honor',
    brandName: 'Honor',
    price: 54999,
    regularPrice: 59000,
    saveAmount: 4001,
    status: 'In Stock',
    badge: 'Portrait AI',
    rating: 4.7,
    reviewsCount: 38,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-5Ga-3851.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-5Ga-3851.png'
    ],
    highlights: [
      '50MP Harcourt Portrait Dual Camera',
      'Ultra-slim 7.7mm lightweight body',
      '5200 mAh long-lasting battery with 100W charging',
      'Snapdragon 7 Gen 3 performance'
    ],
    colors: [
      { name: 'Coral Pink', hex: '#e8a598' },
      { name: 'Emerald Green', hex: '#3e6b5c' },
      { name: 'Moonlight White', hex: '#fafafa' }
    ],
    regions: ['Official Dual SIM'],
    storages: [
      { label: '256GB / 8GB', price: 54999, regularPrice: 59000 },
      { label: '256GB / 12GB', price: 58999, regularPrice: 63000 }
    ],
    specs: {
      processor: 'Snapdragon 7 Gen 3 (4 nm)',
      display: '6.7" AMOLED, 120Hz, 4000 nits',
      mainCamera: '50MP (Sony IMX906, OIS) + 50MP Telephoto + 12MP Ultrawide',
      selfieCamera: '50MP',
      ram: '8GB / 12GB',
      battery: '5200 mAh, 100W SuperCharge',
      os: 'MagicOS 8.0 (Android 14)',
      network: '5G, Wi-Fi 6',
      build: 'Sleek curved glass',
      weight: '187 g'
    },
    description: 'Professional DSLR portrait aesthetics made accessible in a whisper-thin 7.7mm silhouette.'
  },

  // --- VIVO ---
  {
    id: 'vivo-x100-pro',
    slug: 'vivo-x100-pro',
    name: 'Vivo X100 Pro 5G',
    brand: 'vivo',
    brandName: 'Vivo',
    price: 89999,
    regularPrice: 97000,
    saveAmount: 7001,
    status: 'In Stock',
    badge: 'ZEISS Optics',
    rating: 4.9,
    reviewsCount: 89,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-16-Pro-Maxaaaa-5516.png'
    ],
    highlights: [
      '1-inch Sony IMX989 sensor with ZEISS APO Floating Telephoto',
      'MediaTek Dimensity 9300 flagship 4nm chipset',
      'Vivo V3 imaging chip for 4K cinematic portrait video',
      '5400 mAh BlueOcean battery with 100W FlashCharge'
    ],
    colors: [
      { name: 'Sunset Orange Leather', hex: '#d96338' },
      { name: 'Asteroid Black', hex: '#222326' },
      { name: 'Stargaze Blue', hex: '#2b4c6f' }
    ],
    regions: ['Global Dual SIM', 'Funtouch OS'],
    storages: [
      { label: '256GB / 16GB', price: 89999, regularPrice: 97000 },
      { label: '512GB / 16GB', price: 98999, regularPrice: 106000 }
    ],
    specs: {
      processor: 'Dimensity 9300 (4 nm)',
      display: '6.78" LTPO AMOLED, 120Hz, 3000 nits, 2160Hz PWM',
      mainCamera: '50MP (1" IMX989) + 50MP ZEISS APO Telephoto (4.3x) + 50MP Ultrawide',
      selfieCamera: '32MP',
      ram: '16GB LPDDR5X',
      battery: '5400 mAh, 100W Wired, 50W Wireless',
      os: 'Funtouch 14 (Android 14)',
      network: '5G, Wi-Fi 7',
      build: 'Sun halo camera module, IP68',
      weight: '221 g'
    },
    description: 'The definitive mobile photography apparatus co-developed with ZEISS optics and a custom V3 imaging coprocessor.'
  },

  // --- OPPO ---
  {
    id: 'oppo-find-x7-ultra',
    slug: 'oppo-find-x7-ultra',
    name: 'Oppo Find X7 Ultra 5G',
    brand: 'oppo',
    brandName: 'Oppo',
    price: 99999,
    regularPrice: 108000,
    saveAmount: 8001,
    status: 'In Stock',
    badge: 'Quad Main Camera',
    rating: 4.9,
    reviewsCount: 68,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-Ultra-5G-Titanium-Silver-Blue-1865.jpg',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-Ultra-5G-Titanium-Silver-Blue-1865.jpg'
    ],
    highlights: [
      'World-first Dual Periscope Telephoto (3x and 6x optical)',
      '1-inch Sony LYT-900 primary sensor with Hasselblad tuning',
      'Snapdragon 8 Gen 3 performance',
      '5000 mAh battery with 100W SUPERVOOC charging'
    ],
    colors: [
      { name: 'Sepia Brown Leather', hex: '#634b3f' },
      { name: 'Ocean Blue', hex: '#243e56' },
      { name: 'Tailored Black', hex: '#1c1d1f' }
    ],
    regions: ['Global / Dual SIM'],
    storages: [
      { label: '256GB / 12GB', price: 99999, regularPrice: 108000 },
      { label: '512GB / 16GB', price: 109999, regularPrice: 119000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 3 (4 nm)',
      display: '6.82" QHD+ LTPO AMOLED, 120Hz, 4500 nits',
      mainCamera: '50MP (1" LYT-900) + 50MP (3x) + 50MP (6x Periscope) + 50MP Ultrawide',
      selfieCamera: '32MP',
      ram: '12GB / 16GB',
      battery: '5000 mAh, 100W SuperVOOC, 50W AirVOOC',
      os: 'ColorOS 14 (Android 14)',
      network: '5G, Wi-Fi 7',
      build: 'Two-tone glass and vegan leather, IP68',
      weight: '221 g'
    },
    description: 'The world’s only quad 50MP camera phone featuring dual periscope telephotos for uncompromised portrait and telephoto reach.'
  },

  // --- REALME ---
  {
    id: 'realme-gt-6',
    slug: 'realme-gt-6',
    name: 'Realme GT 6 5G',
    brand: 'realme',
    brandName: 'Realme',
    price: 52999,
    regularPrice: 57000,
    saveAmount: 4001,
    status: 'In Stock',
    badge: 'AI Flagship Killer',
    rating: 4.8,
    reviewsCount: 74,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-5Ga-3851.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-5Ga-3851.png'
    ],
    highlights: [
      '6000 nits Ultra Bright 8T LTPO Display',
      'Snapdragon 8s Gen 3 with NEXT AI tools',
      '5500 mAh battery with 120W SUPERVOOC charging',
      'Sony LYT-808 50MP OIS camera + 50MP Telephoto'
    ],
    colors: [
      { name: 'Fluid Silver', hex: '#d2d6dc' },
      { name: 'Razor Green', hex: '#264d3b' }
    ],
    regions: ['Official BD', 'Global Dual SIM'],
    storages: [
      { label: '256GB / 12GB', price: 52999, regularPrice: 57000 },
      { label: '512GB / 16GB', price: 59999, regularPrice: 65000 }
    ],
    specs: {
      processor: 'Snapdragon 8s Gen 3 (4 nm)',
      display: '6.78" 8T LTPO AMOLED, 120Hz, 6000 nits peak',
      mainCamera: '50MP (LYT-808, OIS) + 50MP Telephoto + 8MP Ultrawide',
      selfieCamera: '32MP',
      ram: '12GB / 16GB',
      battery: '5500 mAh, 120W SuperVOOC',
      os: 'realme UI 5.0 (Android 14)',
      network: '5G, Wi-Fi 6',
      build: 'Nano mirror craft, IP65',
      weight: '199 g'
    },
    description: 'Record-shattering 6000-nit display meets Snapdragon 8s Gen 3 processing and intelligent generative AI features.'
  },

  // --- IQOO ---
  {
    id: 'iqoo-12-5g',
    slug: 'iqoo-12-5g',
    name: 'iQOO 12 5G',
    brand: 'iqoo',
    brandName: 'iQOO',
    price: 74999,
    regularPrice: 82000,
    saveAmount: 7001,
    status: 'In Stock',
    badge: 'Gaming Monster',
    rating: 4.9,
    reviewsCount: 81,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-163333-1411.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/iPhone-163333-1411.png'
    ],
    highlights: [
      'Snapdragon 8 Gen 3 + Supercomputing Chip Q1',
      '144Hz 1.5K LTPO AMOLED with 3000 nits',
      '50MP Astro Camera + 64MP 3x Periscope Telephoto',
      '120W FlashCharge in BMW M Motorsport Legend design'
    ],
    colors: [
      { name: 'Legend (White BMW Stripes)', hex: '#f8fafc' },
      { name: 'Alpha Black', hex: '#1e2022' }
    ],
    regions: ['Global Dual SIM'],
    storages: [
      { label: '256GB / 12GB', price: 74999, regularPrice: 82000 },
      { label: '512GB / 16GB', price: 82999, regularPrice: 90000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 3 + Q1 Dedicated Display Chip',
      display: '6.78" LTPO AMOLED, 144Hz, 3000 nits peak',
      mainCamera: '50MP (1/1.3", OIS) + 64MP 3x Periscope + 50MP Ultrawide',
      selfieCamera: '16MP',
      ram: '12GB / 16GB',
      battery: '5000 mAh, 120W FlashCharge',
      os: 'Funtouch OS 14 (Android 14)',
      network: '5G, Wi-Fi 7',
      build: 'Porphyry glass, IP64',
      weight: '203 g'
    },
    description: 'Precision gaming speed with the dual-chip Snapdragon 8 Gen 3 + Q1 pairing and BMW Motorsport styling.'
  },

  // --- HUAWEI ---
  {
    id: 'huawei-pura-70-ultra',
    slug: 'huawei-pura-70-ultra',
    name: 'Huawei Pura 70 Ultra',
    brand: 'huawei',
    brandName: 'Huawei',
    price: 139999,
    regularPrice: 149000,
    saveAmount: 9001,
    status: 'In Stock',
    badge: 'DXOMARK #1',
    rating: 4.9,
    reviewsCount: 47,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-5Gaaaaa-6991.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-S25-5Gaaaaa-6991.png'
    ],
    highlights: [
      'Retractable 1-inch Ultra Lighting Pop-out Camera mechanism',
      'Ultra Speed Snapshot capable of freezing 300 km/h action',
      'Dual Satellite calling & messaging support',
      'Kunlun Glass 2 with IP68 waterproof rating'
    ],
    colors: [
      { name: 'Chuping Green Leather', hex: '#44624a' },
      { name: 'Mocha Brown', hex: '#583f34' },
      { name: 'Star Black', hex: '#1f2022' }
    ],
    regions: ['Global Dual SIM', 'EMUI / HarmonyOS'],
    storages: [
      { label: '512GB / 16GB', price: 139999, regularPrice: 149000 },
      { label: '1TB / 16GB', price: 156999, regularPrice: 168000 }
    ],
    specs: {
      processor: 'Kirin 9010 (7 nm)',
      display: '6.8" LTPO OLED, 120Hz, 2500 nits, Kunlun Crystal Glass',
      mainCamera: '50MP Retractable (1" sensor, sensor-shift OIS, f/1.6-4.0) + 50MP Macro Telephoto + 40MP Ultrawide',
      selfieCamera: '13MP AF',
      ram: '16GB',
      battery: '5200 mAh, 100W Wired, 80W Wireless, 20W Reverse',
      os: 'EMUI 14.2 / HarmonyOS 4.2',
      network: '5G, Wi-Fi 6, Beidou Satellite Calling',
      build: 'Embossed vegan leather, IP68 (2m for 30m)',
      weight: '226 g'
    },
    description: 'An engineering marvel featuring a physical mechanical pop-out lens barrel and world-topping DXOMARK image quality.'
  },

  // --- NOKIA ---
  {
    id: 'nokia-g42-5g',
    slug: 'nokia-g42-5g',
    name: 'Nokia G42 5G',
    brand: 'nokia',
    brandName: 'Nokia',
    price: 19999,
    regularPrice: 22500,
    saveAmount: 2501,
    status: 'In Stock',
    badge: 'QuickFix Repairable',
    rating: 4.6,
    reviewsCount: 39,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-70-Fusion-5G-orient-blue-1907.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-70-Fusion-5G-orient-blue-1907.png'
    ],
    highlights: [
      'QuickFix design: easily replace screen or battery at home',
      '3-day battery life with 5000 mAh capacity',
      '50MP AI Camera with OZO 3D audio recording',
      'Pure clean Android with guaranteed security updates'
    ],
    colors: [
      { name: 'So Purple', hex: '#6b4c7d' },
      { name: 'So Grey', hex: '#4a4d52' },
      { name: 'So Pink', hex: '#d98099' }
    ],
    regions: ['Official Dual SIM'],
    storages: [
      { label: '128GB / 6GB', price: 19999, regularPrice: 22500 },
      { label: '256GB / 8GB', price: 23999, regularPrice: 26000 }
    ],
    specs: {
      processor: 'Snapdragon 480+ 5G (8 nm)',
      display: '6.56" HD+ 90Hz, 560 nits',
      mainCamera: '50MP (f/1.8) + 2MP Depth + 2MP Macro',
      selfieCamera: '8MP',
      ram: '6GB / 8GB',
      battery: '5000 mAh, 20W Fast Charge',
      os: 'Clean Android 13 / 14',
      network: '5G, Wi-Fi 6',
      build: 'Recycled polycarbonate back, IP52',
      weight: '193 g'
    },
    description: 'Eco-conscious design with user repairability, 3-day battery lifespan, and 5G connectivity.'
  },

  // --- POCO ---
  {
    id: 'poco-f6-pro',
    slug: 'poco-f6-pro',
    name: 'Poco F6 Pro 5G',
    brand: 'poco',
    brandName: 'Poco',
    price: 58999,
    regularPrice: 64000,
    saveAmount: 5001,
    status: 'In Stock',
    badge: 'Flagship Speed',
    rating: 4.8,
    reviewsCount: 79,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-Pro-5G-9101.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Honor-600-Pro-5G-9101.png'
    ],
    highlights: [
      'Snapdragon 8 Gen 2 flagship powerhouse',
      'WQHD+ 120Hz Flow AMOLED (4000 nits peak)',
      '120W HyperCharge (100% in 19 mins)',
      '50MP Light Hunter 800 OIS camera'
    ],
    colors: [
      { name: 'Black', hex: '#1c1c1e' },
      { name: 'White', hex: '#f2f2f4' }
    ],
    regions: ['Official BD', 'Global Dual SIM'],
    storages: [
      { label: '256GB / 12GB', price: 58999, regularPrice: 64000 },
      { label: '512GB / 16GB', price: 65999, regularPrice: 72000 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 2 (4 nm)',
      display: '6.67" WQHD+ Flow AMOLED, 120Hz, 4000 nits',
      mainCamera: '50MP (OIS) + 8MP Ultrawide + 2MP Macro',
      selfieCamera: '16MP',
      ram: '12GB / 16GB',
      battery: '5000 mAh, 120W HyperCharge',
      os: 'Xiaomi HyperOS',
      network: '5G, Wi-Fi 7',
      build: 'Metal frame, Velvet glass back',
      weight: '209 g'
    },
    description: 'Ultra-fast performance meets 120W charging and a 2K resolution Flow AMOLED display.'
  },

  // --- INFINIX ---
  {
    id: 'infinix-zero-40-5g',
    slug: 'infinix-zero-40-5g',
    name: 'Infinix Zero 40 5G',
    brand: 'infinix',
    brandName: 'Infinix',
    price: 37999,
    regularPrice: 41000,
    saveAmount: 3001,
    status: 'In Stock',
    badge: 'Vlog King',
    rating: 4.7,
    reviewsCount: 54,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-A57-5G-6910.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Galaxy-A57-5G-6910.png'
    ],
    highlights: [
      '4K 60fps Front & Rear Vlog recording with GoPro Mode',
      'MediaTek Dimensity 8200 Ultimate 5G chip',
      '144Hz 3D Curved AMOLED screen',
      '108MP OIS Ultra-Clear Main Camera'
    ],
    colors: [
      { name: 'Violet Garden', hex: '#8a799f' },
      { name: 'Moving Titanium', hex: '#68727b' },
      { name: 'Rock Black', hex: '#232528' }
    ],
    regions: ['Official BD'],
    storages: [
      { label: '256GB / 12GB', price: 37999, regularPrice: 41000 },
      { label: '512GB / 12GB', price: 42999, regularPrice: 47000 }
    ],
    specs: {
      processor: 'Dimensity 8200 Ultimate (4 nm)',
      display: '6.78" 3D Curved AMOLED, 144Hz, 1300 nits',
      mainCamera: '108MP (OIS) + 50MP Ultrawide + 2MP Depth',
      selfieCamera: '50MP 4K 60fps with PDAF',
      ram: '12GB + 12GB Extended',
      battery: '5000 mAh, 45W Wired, 20W Wireless',
      os: 'XOS 14.5 (Android 14)',
      network: '5G, Wi-Fi 6E',
      build: 'Curved glass, IP54',
      weight: '198 g'
    },
    description: 'Engineered specifically for creators with 4K 60fps vlogging and 144Hz curved visual perfection.'
  },

  // --- TECNO ---
  {
    id: 'tecno-camon-30-premier',
    slug: 'tecno-camon-30-premier',
    name: 'Tecno Camon 30 Premier 5G',
    brand: 'tecno',
    brandName: 'Tecno',
    price: 49999,
    regularPrice: 55000,
    saveAmount: 5001,
    status: 'In Stock',
    badge: 'Sony PolarAce',
    rating: 4.8,
    reviewsCount: 47,
    image: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-60-Pro-5Ga-4221.png',
    gallery: [
      'https://adminapi.applegadgetsbd.com/storage/media/medium/Motorola-Edge-60-Pro-5Ga-4221.png'
    ],
    highlights: [
      'Sony PolarAce Imaging Chip with 4K Ultra Night Vision',
      'Quad 50MP Camera system with 3x periscope telephoto',
      'Dimensity 8200 Ultimate 5G Processor',
      '1.5K LTPO AMOLED 120Hz display'
    ],
    colors: [
      { name: 'Alps Snowy Silver', hex: '#e3e4e6' },
      { name: 'Hawaii Lava Black', hex: '#1e2022' }
    ],
    regions: ['Official BD'],
    storages: [
      { label: '512GB / 12GB', price: 49999, regularPrice: 55000 }
    ],
    specs: {
      processor: 'Dimensity 8200 Ultimate (4 nm) + Sony CXD5622GG ISP',
      display: '6.77" 1.5K LTPO AMOLED, 120Hz, 1400 nits',
      mainCamera: '50MP (Sony IMX890, OIS) + 50MP Periscope (3x) + 50MP Ultrawide',
      selfieCamera: '50MP Eye-tracking AF',
      ram: '12GB',
      battery: '5000 mAh, 70W Ultra Charge',
      os: 'HiOS 14 (Android 14)',
      network: '5G, Wi-Fi 6',
      build: 'Aerospace-grade metal unibody, Suede Tech-Art leather',
      weight: '210 g'
    },
    description: 'Professional cinema imaging equipped with dedicated Sony PolarAce processing and quad 50MP focal coverage.'
  }
];

// Helper functions
export function getPhoneBySlug(slug) {
  return PHONES.find(p => p.slug === slug);
}

export function getPhonesByBrand(brandSlug) {
  if (!brandSlug || brandSlug === 'all') return PHONES;
  return PHONES.filter(p => p.brand.toLowerCase() === brandSlug.toLowerCase());
}

export function getRelatedPhones(currentSlug, limit = 4) {
  const current = getPhoneBySlug(currentSlug);
  if (!current) return PHONES.slice(0, limit);
  return PHONES.filter(p => p.slug !== currentSlug && (p.brand === current.brand || Math.abs(p.price - current.price) < 40000)).slice(0, limit);
}
