import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bookshop',
    title: 'Bookshop',
    loadComponent: () =>
      import('../app/core/infrastructure/UI/Home/Home.component'),
    children: [
      {
        path: 'book/:uuid',
        title: 'Detalle del libro',
        loadComponent: () =>
          import(
            '../app/core/infrastructure/UI/books/detail-book/detail-book.component'
          ),
      },
      {
        path: '',
        title: 'Todos los libros',
        loadComponent: () =>
          import(
            '../app/core/infrastructure/UI/books/book-all/book-all.component'
          ),
      }
    ]
  },
  {
    path: '',
    redirectTo: '/bookshop',
    pathMatch: 'full',
  },
  // { path: 'profile', component:  }
];
