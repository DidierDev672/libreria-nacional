import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bookshop',
    title: 'Bookshop',
    loadComponent: () => import('../app/core/infrastructure/UI/books/book-all/book-all.component'),
  },
  {
    path: '',
    redirectTo: '/bookshop',
    pathMatch: 'full',
  },
  // { path: 'profile', component:  }
];
