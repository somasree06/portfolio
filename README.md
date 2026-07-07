# Somasree V — AI/ML Portfolio

A world-class, futuristic portfolio website built for an AI Architect. Features immersive animations, glassmorphism design, interactive architecture diagrams, and a premium feel.

## Tech Stack

- **Framework**: Next.js 14 + React 18
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom animations
- **Animations**: Framer Motion + GSAP
- **3D**: Three.js / React Three Fiber
- **Icons**: Lucide + React Icons
- **Contact**: EmailJS
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

1. Copy `.env.example` to `.env.local`
2. Fill in your EmailJS credentials
3. Update `src/lib/constants.ts` with your personal data

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### CI/CD

GitHub Actions workflow is included at `.github/workflows/ci.yml`. Set up the following secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── layout.tsx        # Root layout with fonts, metadata
│   ├── page.tsx          # Main page composing all sections
│   ├── globals.css       # Global styles, utilities
│   └── sitemap.ts        # SEO sitemap
├── components/
│   ├── effects/          # Reusable animated components
│   │   ├── AnimatedText.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── GlowCard.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SectionHeading.tsx
│   ├── layout/           # Navbar, Footer
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/         # Page sections
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Architecture.tsx
│       ├── Experience.tsx
│       ├── Certifications.tsx
│       ├── Blog.tsx
│       └── Contact.tsx
├── hooks/                # Custom React hooks
│   ├── useInView.ts
│   ├── useMousePosition.ts
│   └── useScrollDirection.ts
└── lib/                  # Utilities and constants
    ├── constants.ts      # All site data
    └── utils.ts          # Helper functions
```

## Features

- Animated particle neural network background
- Custom cursor with glow trail
- Scroll progress indicator
- Glassmorphism UI components
- Animated section transitions
- Interactive project modals
- Architecture diagram visualizer
- Responsive across all devices
- SEO optimized with metadata
- Accessibility compliant

## License

MIT
