# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 19 application for displaying football player profiles. It uses standalone components with lazy loading and includes a mock data service. The application showcases modern Angular architecture without NgModules.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:4200)
npm start
# or
ng serve

# Build the application
npm run build
# or
ng build

# Build and watch for changes
npm run watch
# or
ng build --watch --configuration development

# Run unit tests with Karma
npm test
# or
ng test

# Generate new standalone components/services
ng generate component component-name --standalone
ng generate service service-name
```

## Architecture

### Angular 19 Standalone Components Structure
- **AppComponent**: Root standalone component with navigation
- **InicioComponent**: Homepage standalone component
- **ListaJugadoresComponent**: Player list standalone component with filtering
- **DetalleJugadorComponent**: Player detail standalone component

### Routing Configuration
- **app.routes.ts**: Main routes configuration
  - Root path (`/`): InicioComponent (direct import)
  - `/jugadores`: Lazy-loaded jugadores routes
- **jugadores.routes.ts**: Player-specific routes
  - `/jugadores`: ListaJugadoresComponent
  - `/jugadores/detalle/:id`: DetalleJugadorComponent

### Data Service
- **JugadoresDataService**: Provides mock player data using RxJS Observables
  - `getJugadores()`: Returns all players
  - `getJugadorPorId(id)`: Returns specific player by ID
  - `getJugadoresPorPosicion(posicion)`: Filters players by position
  - `buscarJugadores(termino)`: Search players by name

### Player Model (Jugador interface)
Contains properties for player information including:
- Basic info (name, position, age, team)
- Statistics (matches, goals, assists, cards)
- Biography, achievements, and market value

### Component Imports
Each standalone component includes required Angular modules:
- **AppComponent**: RouterOutlet, RouterLink, RouterLinkActive
- **InicioComponent**: RouterLink
- **ListaJugadoresComponent**: CommonModule, FormsModule
- **DetalleJugadorComponent**: CommonModule, RouterLink

## Key Angular 19 Features Used
- Standalone components (no NgModules required)
- Lazy loading with loadChildren pointing to route files
- RxJS for reactive data management
- Angular Router for navigation
- TypeScript for type safety
- Bootstrap 5 integration via CDN

## Important Notes
- **NO MODULE FILES**: This project does NOT use NgModule files (app.module.ts, jugadores.module.ts, etc.)
- **Standalone Components Only**: All components are standalone with their own imports
- **Route-based Lazy Loading**: Uses route files instead of module-based lazy loading

## Build Configuration
- Output path: `dist/perfil-futbolista`
- Production build includes optimization and output hashing
- Development build includes source maps
- Budget warnings: 500kB initial, 1MB max

## HTML Structure Requirements
- **index.html**: DOCTYPE must be first line, no comments before it
- All script/style tags must be properly closed
- Bootstrap CSS/JS loaded via CDN