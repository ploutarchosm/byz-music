import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/route').then(c => c.routes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@pages/byz-error/byz-error.component').then(
        c => c.ByzErrorComponent
      ),
    title: '_i18n.NotFound',
  },
];
