import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then(
        (m) => m.PublicLayoutComponent
      ),
    title: 'WaveX - Transforming Fitness Through Water',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home | WaveX - Transforming Fitness Through Water',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/public/about/about.component').then(
            (m) => m.AboutComponent
          ),
        title: 'About Us | WaveX - Our Mission & Story',
      },
      {
        path: 'programs',
        loadComponent: () =>
          import('./pages/public/programs/programs.component').then(
            (m) => m.ProgramsComponent
          ),
        title: 'Programs | WaveX - Water-Based Fitness Programs',
      },
      {
        path: 'programs/wavex-circuit',
        loadComponent: () =>
          import(
            './pages/public/programs/wavex-circuit/wavex-circuit.component'
          ).then((m) => m.WavexCircuitComponent),
        title: 'WaveX Circuit | WaveX - Water-Based Fitness Programs',
      },
      {
        path: 'programs/wavex-flow',
        loadComponent: () =>
          import(
            './pages/public/programs/wavex-flow/wavex-flow.component'
          ).then((m) => m.WavexFlowComponent),
        title: 'WaveX Flow | WaveX - Water-Based Fitness Programs',
      },
      {
        path: 'programs/wavex-core',
        loadComponent: () =>
          import(
            './pages/public/programs/wavex-core/wavex-core.component'
          ).then((m) => m.WavexCoreComponent),
        title: 'WaveX Core | WaveX - Water-Based Fitness Programs',
      },
      {
        path: 'programs/wavex-kickbox',
        loadComponent: () =>
          import(
            './pages/public/programs/wavex-kickbox/wavex-kickbox.component'
          ).then((m) => m.WavexKickboxComponent),
        title: 'WaveX Kickbox | WaveX - Water-Based Fitness Programs',
      },
      {
        path: 'store',
        loadComponent: () =>
          import('./pages/public/store/store.component').then(
            (m) => m.StoreComponent
          ),
        title: 'Store | WaveX - Shop for Fitness Equipments',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/public/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        title: 'Cart | WaveX - Your Shopping Cart',
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/public/checkout/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
        title: 'Checkout | WaveX - Your Checkout',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/public/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        title: 'Contact Us | WaveX - Get in Touch',
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then(
        (m) => m.AdminLayoutComponent
      ),
    title: 'Admin Dashboard | WaveX',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/public/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: '404 Not Found | WaveX',
  },
];
