# 🥗 Fresh Greens - Salad Bar Website

A modern, responsive website for a salad bar company built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd ~/Desktop/Coding\ Stuff/salad-bar-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
salad-bar-website/
├── public/
│   └── images/           # Static images
│       ├── menu/         # Menu item photos
│       ├── gallery/      # Gallery photos
│       ├── team/         # Team member photos
│       └── icons/        # Custom icons
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── ui/           # Reusable UI components (Button, Card, etc.)
│   │   ├── sections/     # Page sections (Hero, Features, etc.)
│   │   └── forms/        # Form components
│   ├── data/             # Static data (menu, locations, company info)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── styles/           # Additional styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons (via inline SVGs)
- **Deployment:** Vercel (recommended)

## 📄 Pages to Build

- [ ] **Home** (`/`) - Hero, Featured Menu, Features, Testimonials, CTA
- [ ] **Menu** (`/menu`) - Full menu with filtering
- [ ] **Build Your Own** (`/build`) - Interactive salad builder
- [ ] **Locations** (`/locations`) - Store locator with map
- [ ] **About** (`/about`) - Company story, values, team
- [ ] **Catering** (`/catering`) - Catering services and inquiry form
- [ ] **Contact** (`/contact`) - Contact form and info
- [ ] **Order** (`/order`) - Online ordering flow

## 🎨 Customization

### Brand Colors
Edit the Tailwind config to update brand colors:
- Primary: Green (`green-600`)
- Secondary: Amber (`amber-500`)
- Neutral: Gray scale

### Company Information
Update `src/data/company.ts` with your actual:
- Company name and tagline
- Contact information
- Social media links
- Mission and values

### Menu Items
Update `src/data/menu.ts` with your actual:
- Signature salads
- Ingredients and prices
- Nutritional information

### Locations
Update `src/data/locations.ts` with your actual:
- Store addresses
- Hours of operation
- Contact details

## 📦 Available Scripts

```bash
# Development
npm run dev       # Start dev server

# Production
npm run build     # Build for production
npm run start     # Start production server

# Linting
npm run lint      # Run ESLint
```

## 🖼️ Adding Images

Place your images in the `public/images/` directory:
- Menu photos: `public/images/menu/`
- Gallery: `public/images/gallery/`
- Team photos: `public/images/team/`

Reference them in code as `/images/menu/your-image.jpg`

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Run `npm run build` and deploy the `.next` folder.

## 📝 Next Steps

1. Add your actual company information to the data files
2. Replace placeholder images with real photos
3. Set up a CMS for dynamic content (optional)
4. Add analytics (Google Analytics, Vercel Analytics)
5. Set up contact form backend
6. Integrate payment processing for online orders

## 📄 License

This project is private and proprietary.

---

Built with 💚 for healthy eating
