import { Routes } from '@angular/router';

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
        loadComponent: () =>
          import('./pages/public/home/home.component').then(
            (m) => m.HomeComponent
          ),
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
        path: 'programs/test',
        loadComponent: () =>
          import(
            './pages/public/programs/single-program/single-program.component'
          ).then((m) => m.SingleProgramComponent),
        title: 'Program Details | WaveX - Water-Based Fitness Programs',
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
