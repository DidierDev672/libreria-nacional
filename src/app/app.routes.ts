import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () =>
      import('./core/features/book/book-list/book-list.component'),
    children: [],
  },
  {
    path: 'book/:id',
    loadComponent: () =>
      import('./core/features/book/book-detail/book-detail.component'),
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./core/features/book/catalogo/catalogo.component'),
    children: [
      {
        path: 'category/:category',
        loadComponent: () =>
          import('./core/features/book/view-category/view-category.component'),
      },
    ],
  },
  {
    path: 'category/:category',
    loadComponent: () =>
      import('./core/features/book/view-category/view-category.component'),
  },
  {
    path: 'book-form',
    loadComponent: () => import('./core/features/book/book-form/book-form.component')
  },
  {
    path: 'author',
    loadComponent: () => import('./core/features/book/author/author.component')
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  // { path: 'profile', component:  }
];
