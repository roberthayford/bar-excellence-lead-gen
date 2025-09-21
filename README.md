# Bar Excellence - The Art of Hospitality

A luxury hospitality training and consultancy platform built with React, TypeScript, and modern web technologies.

## About Bar Excellence

Bar Excellence is a world-class hospitality training and consultancy company, elevating service standards across luxury venues since 2009. We specialize in cocktail training, service excellence, and hospitality consultancy for hotels, restaurants, and bars worldwide.

### Key Achievements
- 500+ venues trained globally
- 15 years of excellence in hospitality
- 98% client satisfaction rate
- Featured in Bar Magazine
- Weekly industry insights through Hospitality Blueprint newsletter

## Project Overview

This is a modern React SPA showcasing Bar Excellence's services, featuring:
- Elegant luxury design with custom typography
- Responsive layouts optimized for all devices
- Featured media section highlighting industry recognition
- Professional service presentations
- Interactive testimonials and case studies

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Development**: ESLint, TypeScript strict mode

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bar-excellence-elevate

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode 
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── pages/           # Route components (Index, Training, NotFound)
├── components/      # Reusable components
│   ├── ui/         # shadcn/ui component library
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedMediaSection.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   └── FooterSection.tsx
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets
```

## Design System

### Typography
- **Serif**: Cormorant Garamond (luxury headings)
- **Sans-serif**: Inter (body text)

### Color Palette
- Custom HSL color variables for theming
- Accent colors for luxury branding
- Responsive design with mobile-first approach

### Path Aliases
- `@/` maps to `./src/` for cleaner imports
- Configured aliases: `@/components`, `@/lib`, `@/hooks`, `@/ui`

## Features

### Components
- **HeroSection**: Elegant hero with luxury branding
- **FeaturedMediaSection**: Showcases Bar Magazine feature and Hospitality Blueprint newsletter
- **ServicesSection**: Professional service presentations
- **TestimonialsSection**: Client testimonials with luxury styling
- **Navigation**: Responsive navigation with smooth transitions

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Accessible design patterns

## Development Guidelines

### Adding New Routes
1. Create page component in `/src/pages/`
2. Import and add route in `App.tsx` above the "*" catch-all route
3. Update Navigation component if needed

### Styling Conventions
- Use existing shadcn/ui components from `/src/components/ui/`
- Follow established patterns with Tailwind classes
- Use semantic color variables (foreground, muted-foreground, etc.)
- Maintain luxury aesthetic with elegant typography and spacing

## Deployment

The application is configured for static hosting and can be deployed to any modern hosting platform that supports static sites.

## License

Proprietary - Bar Excellence Ltd.

## Contact

For questions about this project or Bar Excellence services:
- Website: [Bar Excellence](https://barexcellence.com)
- LinkedIn: [Bar Excellence](https://linkedin.com/company/bar-excellence)
- Newsletter: [Hospitality Blueprint](https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/)