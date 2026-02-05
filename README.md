# Admin Dashboard - Manager Pro

A modern, responsive admin dashboard built with Angular 21, featuring NgRx state management, interactive charts, and a clean Material Design-inspired UI.

## Features

- 📊 **Analytics Dashboard** - Real-time metrics with stat cards, line charts, and bar charts
- 🛒 **Orders Management** - Comprehensive order tracking with pagination and filtering
- 🔐 **Authentication** - Role-based access control with login flow
- 📱 **Responsive Design** - Mobile drawer sidebar, horizontal scroll, and adaptive grid layouts
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🧪 **Unit Tests** - Component testing with Jasmine/Karma

## Tech Stack

- **Framework**: Angular 21 (NgModule-based architecture)
- **State Management**: NgRx (Store, Effects, Selectors)
- **Charts**: ng2-charts with Chart.js
- **Styling**: SCSS with CSS Variables
- **Icons**: Material Icons
- **Testing**: Jasmine, Karma

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── core/                    # Core services and models
│   │   ├── models/              # Data interfaces (Analytics, Order)
│   │   └── services/            # Business logic services
│   │       ├── analytics.service.ts
│   │       ├── orders.service.ts
│   │       ├── auth.service.ts
│   │       └── ui-state.service.ts
│   ├── guards/                  # Route guards
│   │   ├── auth-guard.ts
│   │   └── role-guard.ts
│   ├── layout/                  # Layout components
│   │   ├── layout/              # Main layout wrapper
│   │   ├── sidebar/             # Collapsible navigation sidebar
│   │   └── navbar/              # Top navigation bar
│   ├── pages/                   # Feature pages
│   │   ├── dashboard/           # Dashboard with analytics
│   │   │   └── recent-orders/   # Recent orders table
│   │   ├── orders/              # Full orders page
│   │   └── login/               # Login page
│   ├── shared/                  # Reusable components
│   │   └── components/
│   │       ├── stat-card/       # Metric display cards
│   │       └── chart-card/      # Chart wrapper component
│   ├── store/                   # NgRx state management
│   │   ├── analytics/           # Analytics state
│   │   │   ├── analytics.actions.ts
│   │   │   ├── analytics.effects.ts
│   │   │   ├── analytics.reducer.ts
│   │   │   └── analytics.selectors.ts
│   │   └── orders/              # Orders state
│   │       ├── orders.actions.ts
│   │       ├── orders.effects.ts
│   │       ├── orders.reducer.ts
│   │       └── orders.selectors.ts
│   ├── app.component.ts         # Root component
│   └── app.routes.ts            # Application routing
├── styles.scss                  # Global styles and CSS variables
└── index.html                   # HTML entry point
```

## Architecture

### NgModule-Based Structure
This project uses classic **NgModule-based architecture** with feature modules for clear separation of concerns:
- **LayoutModule**: Manages the app shell (sidebar, navbar, main layout)
- **DashboardModule**: Dashboard page and recent orders
- **OrdersModule**: Full orders management page
- **ReportsModule**: Analytics and reports
- **SharedModule**: Reusable components (StatCard, ChartCard) and common modules

### Mobile-First Responsive Layout
- **Drawer Sidebar**: On screens ≤ 768px, the sidebar becomes an off‑canvas drawer with a dark backdrop
- **Horizontal Scroll**: Mobile content area allows horizontal scrolling so all dashboard items stay accessible
- **Adaptive Grids**: Dashboard cards and charts use `auto-fit/minmax` grids for fluid layouts
- **Compact Navbar**: Search and username are hidden on mobile to prevent overflow

### State Management
NgRx is used for predictable state management:
- **Root Features**: `analytics` and `orders` are registered in `AppModule` so they’re available on app start
- **Actions**: Define events (e.g., `loadAnalytics`, `loadOrders`)
- **Reducers**: Pure functions that update state
- **Effects**: Handle side effects like API calls
- **Selectors**: Efficiently derive data from the store

### Shared Components
- **StatCardComponent**: Metric display with icon, value, title, and optional trend
- **ChartCardComponent**: Wrapper around ng2-charts; supports both `[data]/[options]` and `[chartData]/[chartOptions]` inputs

### Lazy Loading
Routes use lazy-loaded NgModules (`loadChildren`) for code splitting and improved initial load times.

### Services
- **AnalyticsService**: Provides mock analytics data
- **OrdersService**: Manages order data (20 mock items)
- **AuthService**: Handles authentication state
- **UiStateService**: Manages UI state (sidebar collapse)

## Key Features

### 1. Mobile Drawer Sidebar
- Off‑canvas drawer on screens ≤ 768px with dark backdrop
- Collapses to icons on tablets (≤ 1024px)
- Toggle button in navbar
- Smooth CSS transitions
- Auto‑closes on backdrop tap

### 2. Dashboard Analytics
- 4 stat cards with icons and trend indicators
- Line chart for sales data (7 days)
- Bar chart for daily visits
- Recent orders table (first 8 orders)

### 3. Orders Management
- Full table with 20 mock orders
- Pagination controls (rows per page selector)
- Status badges (Pending, Approved, In Progress)
- Product icons using Material Icons
- Click rows to navigate

### 4. Authentication
- Login page with form
- Role-based route guards
- Protected routes (dashboard, orders)
- User profile display in navbar

## Design Decisions

### Why SCSS?
SCSS provides powerful features like variables, nesting, and mixins while maintaining compatibility with standard CSS. CSS variables are used for theming.

### Why NgRx?
NgRx provides:
- Centralized state management
- Time-travel debugging with Redux DevTools
- Predictable data flow
- Easy testing of business logic

### Why NgModule-Based Architecture?
- Clear feature boundaries (Layout, Dashboard, Orders, Reports)
- Shared components and modules are exported once and reused
- Compatible with existing Angular codebases and libraries
- Explicit declarations/imports make dependencies easy to trace

### Mock Data
Mock data is used for demonstration purposes. In production, replace services with HTTP calls to real APIs.

## Testing

### Run Unit Tests
```bash
ng test
```

### Run E2E Tests
```bash
ng e2e
```

### Test Coverage
```bash
ng test --code-coverage
```

Example test files:
- `stat-card.component.spec.ts` - Component rendering tests
- `auth.service.spec.ts` - Service logic tests

## Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

## Linting

```bash
ng lint
```

## Color Palette

The application uses a consistent color scheme defined in CSS variables:

- **Primary**: `#3B86FF` (Blue)
- **Success**: `#2ECC71` (Green)
- **Warning**: `#FEC400` (Yellow)
- **Danger**: `#E74C3C` (Red)
- **Background**: `#F8F9FD` (Light Gray)
- **Text Dark**: `#3D3D3D`
- **Text Gray**: `#A4A6B3`

## Mobile Development

### Responsive Breakpoints
- **Desktop**: > 1024px (full sidebar, full layout)
- **Tablet**: ≤ 1024px (sidebar collapses to icons)
- **Mobile**: ≤ 768px (drawer sidebar, horizontal scroll enabled)

### Mobile Drawer Behavior
- Sidebar slides in from the left with a dark backdrop
- Tapping the backdrop closes the drawer
- Navbar hides search and username text to prevent overflow
- Content area allows horizontal scrolling so dashboard items stay accessible

### Testing Mobile Layout
- Use browser devtools device emulation or real devices
- Verify drawer open/close and backdrop tap-to-close
- Check horizontal scroll on dashboard and recent orders table

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Connect to real backend API
- [ ] Add user management page
- [ ] Implement real-time notifications
- [ ] Add data export functionality
- [ ] Dark mode toggle
- [ ] Advanced filtering and search
- [ ] Multi-language support (i18n)

## License

This project is licensed under the MIT License.

## Author

Built with ❤️ using Angular

---

For questions or issues, please open an issue in the repository.
