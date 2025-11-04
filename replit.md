# OCU Dashboard de Análisis de Datos

## Overview
This is a React-based dashboard application for OCU (Organización de Consumidores y Usuarios) that provides comprehensive data analysis and visualization. The dashboard displays demand sources, supply sources, coverage maps, and action plans for content analysis.

## Project Architecture
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4.1 (pre-compiled)
- **UI Components**: Radix UI primitives + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Language Support**: Multi-language support via LanguageContext (Spanish/English)

## Key Features
- Google Trends analysis
- Keyword Planner integration
- Growth topics tracking
- Competitive radar analysis
- TikTok viral radar
- Early alerts system
- Content gap analysis
- Market pulse visualization
- Coverage mapping
- Action plan management

## Project Structure
```
/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── figma/        # Figma-related components
│   │   └── ...           # Dashboard components
│   ├── contexts/         # React contexts (Language)
│   ├── imports/          # Generated/imported components
│   ├── styles/           # Global CSS and Tailwind config
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Development

### Running the Project
The development server runs on port 5000:
```bash
npm run dev
```

Access the app at the webview URL provided by Replit.

### Building for Production
```bash
npm run build
```
Outputs to `/build` directory.

## Configuration

### Vite Configuration
- **Host**: 0.0.0.0 (required for Replit)
- **Port**: 5000 (required for Replit webview)
- **HMR**: Configured with clientPort 443 for Replit proxy
- **Build Output**: `build/` directory

### Deployment
Configured for autoscale deployment on Replit. The app is stateless and suitable for serverless deployment.

## Recent Changes
- November 4, 2025: Initial setup for Replit environment
  - Configured Vite for Replit (port 5000, host 0.0.0.0)
  - Created TypeScript configurations
  - Installed all dependencies
  - Fixed Figma asset import issue in Logo component
  - Set up development workflow
  - Configured deployment for autoscale

## Dependencies
All major dependencies are from the Radix UI ecosystem and React ecosystem:
- UI Primitives: @radix-ui/* components
- Charts: recharts
- Form handling: react-hook-form
- Date picker: react-day-picker
- Styling utilities: tailwind-merge, class-variance-authority
- Icons: lucide-react
- Theming: next-themes

## Notes
- The project uses Tailwind CSS v4 with pre-compiled styles in `src/index.css`
- Custom theme variables are defined in `src/styles/globals.css`
- The logo component had a Figma asset import that was replaced with a placeholder
- Multi-language support is implemented via React Context
