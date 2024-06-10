import { Injectable, computed, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Books } from '../shared/utils/data';
import { Book } from '../models/book.model';

interface State {
  data: Book[];
  category?: Book[];
}



@Injectable({
  providedIn: 'root',
})
export class BookService {

  data = signal<State>({
    data: Books,
    category: []
  });

  books = computed(() => this.data().data);

  category = computed(() => this.data().category);

  constructor() {
    this.getAllBooks();
  }

  //! Método para obtener todos los libros
  getAllBooks(): Observable<Book[]> {
    return of(this.data().data);
  }

  //! Método para obtener un libro por su ID
  getBookById(bookId: string): Observable<Book | undefined> {
    const book = Books.find((b) => b.bookId === bookId);
    return of(book);
  }

  //! Método para obtener por un nombre
  getByNameBook(title: string): Observable<Book[] | []>{
    const book = Books.filter((b) => b.title === title);

    if (book.length > 0) {
      this.data.set({
        data: book,
      });
    }
    return of(book);
  }

  //! Método para obtener por un categoría
  getByCategoryBook(category: string): Observable<Book[] | []>{
    const categoric = Books.filter((b) => b.category === category);
    this.data.set({
      data: Books,
      category: categoric
    });
    return of(categoric);
  }
}
