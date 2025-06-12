import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then(
        (m) => m.PublicLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/public/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/public/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'programs',
        loadComponent: () =>
          import('./pages/public/programs/programs.component').then(
            (m) => m.ProgramsComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/public/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then(
        (m) => m.AdminLayoutComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/public/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
