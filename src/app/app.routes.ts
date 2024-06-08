import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () =>
      import('./core/features/book/book-list/book-list.component'),
    children: [],
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  // { path: 'profile', component:  }
];
