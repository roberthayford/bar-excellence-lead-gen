# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode 
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Architecture

This is a React SPA built with Vite, TypeScript, and Tailwind CSS. Key architectural patterns:

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Development**: ESLint, TypeScript strict mode

### Project Structure
- `/src/pages/` - Route components (Index, Training, NotFound)
- `/src/components/` - Reusable components (Navigation, HeroSection, FooterSection)
- `/src/components/ui/` - shadcn/ui component library
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions
- `/src/assets/` - Static assets

### Component Architecture
- Uses composition pattern with layout components (Navigation, FooterSection)
- Pages are simple layouts combining reusable components
- All new routes must be added above the catch-all "*" route in App.tsx:18-22

### Styling Patterns
- Uses Tailwind CSS with CSS variables for theming
- Custom fonts: Cormorant Garamond (serif), Inter (sans-serif)
- Design system uses HSL color variables (--primary, --secondary, etc.)
- Responsive design with mobile-first approach

### Path Aliases
- `@/` maps to `./src/` for cleaner imports
- `@/components`, `@/lib`, `@/hooks`, `@/ui` are configured aliases

### Development Environment
- Vite dev server runs on host "::" port 8080
- TypeScript with relaxed settings (noImplicitAny: false, strictNullChecks: false)
- ESLint configured for React with hooks and refresh plugins

## Adding New Features

When adding new routes:
1. Create page component in `/src/pages/`
2. Import and add route in `App.tsx` above the "*" catch-all route
3. Update Navigation component if needed

When adding new UI components:
- Use existing shadcn/ui components from `/src/components/ui/`
- Follow existing patterns for styling with Tailwind classes
- Use semantic color variables (foreground, muted-foreground, etc.)