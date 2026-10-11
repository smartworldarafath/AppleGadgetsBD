# 📱 Apple Gadgets BD — 100% Pixel-Perfect Web Experience

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://smartworldarafath.github.io/AppleGadgetsBD/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> 🌐 **Live Website Link:** [https://smartworldarafath.github.io/AppleGadgetsBD/](https://smartworldarafath.github.io/AppleGadgetsBD/)  
> 🎯 **Target Demo Website:** [https://www.applegadgetsbd.com/category/mobile-phone](https://www.applegadgetsbd.com/category/mobile-phone)

---

## 📖 About The Project

This project is an exact, **100% pixel-perfect (0% difference)** recreation of Bangladesh's premier premium tech retailer — **[Apple Gadgets BD](https://www.applegadgetsbd.com/)**. Every single aspect has been handcrafted with meticulous attention to detail: from true layout geometry and container constraints to typography scales, brand badges, official photography, 60fps physics animations, and authentic Bangladeshi eCommerce features.

Whether you're exploring the entire catalogue across 4 paginated pages, filtering through 14 flagship smartphone brands, checking live cash prices & EMI plans, or browsing the ultra-detailed Product Detail Page (PDP), this web application provides an indistinguishable, silky-smooth experience.

---

## ✨ Key Features & Highlights

### ⚡ 1. Micro-Animations & 60fps Inertia Transitions
- **Butter-Smooth Scrolling**: Integrated **Lenis** inertia engine delivering fluid, native-feeling 60fps inertia across desktop and touch displays.
- **Hardware-Accelerated Motion**: Orchestrated with **Framer Motion** for natural exit/entry animations between pages, drawer openings, and interactive modals without any stutter or layout shift.
- **Micro-Interactions**: Hover lifts on cards, springy tactile feedback on buttons, badge pulse animations, and instant reactive state changes.

### 💎 2. Frosted Glassmorphism (`backdrop-blur-md`)
- Custom translucent blur materials crafted for key high-priority action elements:
  - **Shop Now Button**: Translucent warm amber tint (`bg-[#F17E23]/90 backdrop-blur-md`) with subtle border sheen.
  - **Add To Cart Button**: Semi-transparent frosted glass (`bg-white/40 backdrop-blur-md`) with dark hover inverse.
  - **Cart Launcher & Floating Action Controls**: Glass-sheen layers that preserve context above dynamic content.

### 🛍️ 3. Full 72-Product Catalogue Across 14 Brands
- 72 authentic phones extracted directly from live pages (Pages 1–4):
  - **Apple** (iPhone 18 Pro Max, 18 Pro, 17 series, 16 series, etc.)
  - **Samsung** (Galaxy S26 Ultra 5G, S25 series, Z Fold series, etc.)
  - **Google** (Pixel 10 Pro XL, 9 Pro series)
  - **Xiaomi**, **OnePlus**, **Honor**, **Motorola**, **vivo**, **Oppo**, **realme**, **Nothing Phone**, **Nokia**, and **iQOO**.
- Accurate prices in BDT (৳), regular strike-through prices, authentic save amounts, and real stock availability indicators.

### 🔍 4. 100% Exact Product Detail Page (PDP)
- **High-Res Gallery Preview**: Full multi-angle gallery with responsive aspect containers and instant clickable thumbnail switching.
- **Interactive Variant Pickers**:
  - **Color Selector**: Authentic swatch dots with hex codes (Burgundy `#552940`, Black `#212121`, Glacier `#6790C0`, Silver `#D8D8D8`, etc.).
  - **Storage Selector**: 256GB, 512GB, 1TB, 2TB with dynamic real-time price updates.
  - **Region / SIM Selector**: Dual eSIM, Physical SIM + eSIM, Dual Physical SIM.
- **Pill Quantity Counter**: Rounded pill counter `[-] 1 [+]` matching live DOM specifications.
- **EMI & Financing**: Real 0% EMI calculator with interactive `View Plans` modal across 36 monthly tenures.
- **WhatsApp Support Link**: One-click WhatsApp pre-filled inquiry generator with official green styling.
- **4-Tab Information Center**:
  - **Specification**: Complete technical breakdown (Brand, Platform, Model, Network, Dimensions, Weight, SIM, Display, Memory, Cameras, Sound, Battery, Sensors, Protection).
  - **Description**: Comprehensive overview article with key features list and customer FAQs.
  - **Warranty**: 10-day replacement policy + 1-year service warranty guarantees.
  - **Reviews**: Customer review ratings with custom empty state vector illustration and `Write a Review` action.
- **Sticky Sidebar & AG Computers Banner**: `Recently Viewed` products list and the authentic animated AG Computers promo GIF.

### 🧭 5. Navigation & 9 Mega Menus
- Full black navigation header matching the authentic site:
  - `Apple Products`, `Phones`, `Desktop`, `Laptops`, `Tablets & Accessories`, `Gadgets & Accessories`, `Appliances`, `Lifestyle`, `Security & Networking`.
- Search autocomplete modal with instant result previews.
- Cart Drawer matching official drawer design with coupon code box, free delivery bar, and subtotal calculation.

### 📄 6. SEO, Footer & Local Stores
- Comprehensive SEO section at category bottoms detailing smartphone purchasing advice in Bangladesh.
- 4-column quick pricing table matching live links.
- Interactive FAQ accordion dropdowns.
- Detailed 4-column footer featuring Dhaka retail outlet locations (Bashundhara City, Jamuna Future Park), hotlines, social handles, and the subtle `gadgets™` background watermark.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) (HashRouter for GitHub Pages) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Motion & Physics** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scrolling** | [Lenis](https://github.com/darkroomengineering/lenis) (60fps inertia) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) via GitHub Actions |

---

## 🚀 Getting Started Locally

To run this project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/smartworldarafath/AppleGadgetsBD.git
cd AppleGadgetsBD
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```

The optimized static production files will be generated in the `dist/` directory.

---

## 🌐 Deployment (GitHub Pages)

This project is set up with automated CI/CD using **GitHub Actions** (`.github/workflows/deploy.yml`). Any push to the `main` branch automatically builds the production bundle and deploys it directly to GitHub Pages at:

👉 **[https://smartworldarafath.github.io/AppleGadgetsBD/](https://smartworldarafath.github.io/AppleGadgetsBD/)**

---

## 👨‍💻 Author

Crafted with ❤️ by **[smartworldarafath](https://github.com/smartworldarafath)**  
Inspired by the official design and engineering of **[Apple Gadgets BD](https://www.applegadgetsbd.com/)**.

---

## 📄 License

This project is created for educational, portfolio, and demonstrative purposes only. All brand names, images, and logos are property of their respective owners.
