# OCU Dashboard de Análisis de Datos

## Overview
This is a data analysis dashboard application built with React, TypeScript, and Vite. The project was originally designed in Figma and imported to Replit. It displays various analytics components including demand sources, supply sources, coverage maps, and action plans.

## Project Structure
- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **UI Components**: Radix UI components library
- **Styling**: Tailwind CSS v4 (pre-compiled in src/index.css)
- **Charts**: Recharts library for data visualization
- **Language Support**: Multi-language support via LanguageContext

## Recent Changes (November 4, 2025)
1. **Initial Setup**:
   - Created TypeScript configuration files (tsconfig.json, tsconfig.node.json)
   - Installed all npm dependencies
   - Created .gitignore file for Node.js projects

2. **Vite Configuration**:
   - Updated server to bind to `0.0.0.0:5000` (required for Replit)
   - Added `allowedHosts: true` to allow Replit's proxy access
   - Configured HMR with `clientPort: 443` for WebSocket connections
   - Removed `open: true` flag (not needed in cloud environment)
   - **Added Vite proxy**: Configured `/api` routes to proxy to backend on port 3000

3. **Fixed Import Issues**:
   - Replaced Figma asset import in Logo.tsx with a placeholder div
   - The original image import used a Figma-specific URL that doesn't work in standard Vite

4. **Backend Implementation** (NEW):
   - Created Express + TypeScript backend in `server/` directory
   - Implemented REST API endpoints:
     - `/api/trends/google-trends` - Google Trends data
     - `/api/trends/keyword-planner` - Keyword Planner data
     - `/api/tematicas` - Trending topics data
   - Backend runs on port 3000 with CORS enabled
   - Data uses camelCase keys (cancelSubscription, claimInsurance, productReturn)
   - Services layer in frontend (`src/services/`) for API consumption
   
5. **Deployment Configuration**:
   - Configured for autoscale deployment (stateless web application)

## Key Files
- `vite.config.ts`: Vite configuration with Replit-specific settings
- `src/App.tsx`: Main application component with dashboard layout
- `src/contexts/LanguageContext.tsx`: Multi-language support
- `src/components/`: UI components for various dashboard sections
- `src/index.css`: Pre-compiled Tailwind CSS v4 styles
- `src/styles/globals.css`: Custom CSS variables and theme configuration

## Running Locally

### Development Mode
The project has two workflows that run automatically:

1. **Frontend (dev)**: Vite development server on port 5000
```bash
npm run dev
```

2. **Backend (backend)**: Express API server on port 3000
```bash
npm run server
```

The frontend proxies `/api` requests to the backend automatically via Vite proxy configuration.

### Building for Production
```bash
npm run build
```
Output directory: `build/`

Backend production mode:
```bash
npm run server:prod
```

## Important Notes
- The project uses Tailwind CSS v4, which is already compiled in `src/index.css`
- Custom color schemes and design tokens are defined in `src/styles/globals.css`
- The `allowedHosts: true` setting in Vite config is critical for Replit deployment
- Logo component has a placeholder image (original Figma asset removed)

## Project Architecture
The dashboard is organized into several main sections:
1. **Fuentes de Demanda** (Demand Sources): Analysis of consumer search information
2. **Fuentes de Oferta** (Supply Sources): Supply-side data analysis
3. **Mapa de Cobertura** (Coverage Map): Geographic coverage visualization
4. **Plan de Acción** (Action Plan): Strategic action planning interface

## Dependencies
Main production dependencies:
- React & React DOM (18.3.1)
- Radix UI component library (various packages)
- Recharts (2.15.2) for charts
- Lucide React for icons
- React Hook Form (7.55.0)
- Next Themes (0.4.6) for theme management

Development dependencies:
- Vite (6.3.5)
- TypeScript
- @vitejs/plugin-react-swc for fast React refresh
