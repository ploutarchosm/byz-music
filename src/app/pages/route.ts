import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
        title: '_i18n.Home',
      },
      {
        path: 'music-docs',
        loadComponent: () =>
          import('@pages/byz-editor/byz-editor.component').then(
            c => c.ByzEditorComponent
          ),
        title: '_i18n.MusicDocs',
      },
    ],
  },
];
