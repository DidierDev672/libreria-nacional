import { Injectable, computed, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Books } from '../shared/utils/data';
import { Book } from '../models/book.model';

interface State {
  data: Book[];
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  #state = signal<State>({
    data: [],
  });

  public books = computed(() => this.#state().data);
  constructor() {
    this.getAllBooks();
  }

  //! Método para obtener todos los libros
  getAllBooks(): Observable<Book[]> {
    this.#state.set({
      data: Books,
    });
    return of(Books);
  }

  //! Método para obtener un libro por su ID
  getBookById(bookId: string): Observable<Book | undefined> {
    const book = Books.find((b) => b.bookId === bookId);
    return of(book);
  }
}
