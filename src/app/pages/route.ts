import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('@components/byz-main-layout/byz-main-layout.component').then(
        c => c.ByzMainLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/byz-home/byz-home.component').then(
            c => c.ByzHomeComponent
          ),
      },
    ],
  },
];
