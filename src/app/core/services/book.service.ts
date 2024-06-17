import { Injectable, computed, effect, signal } from '@angular/core';
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

  books = computed(() => {
    const data = this.data().data;
    const numberItem = (data.length / 3);
    if (numberItem >= 1) {
      const filterData = data.sort(() => Math.random() - 0.5);
      const randomItems = filterData.slice(0, numberItem);
      return randomItems;
    }
    return data;
  });

  category = computed(() => this.data().category);

  constructor() {
    this.getAllBooks();
  }

  //! Métodos para los agregar libros
  addBook(book: Book): void {
    Books.push(book);
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

  //! Método para obtener por "Autor"
  getByAuthorBook(author: string): Observable<Book[] | []>{
    const QueryAuthor = Books.filter((a) => a.authors === author);
    console.log(QueryAuthor);
    this.data.set({
      data: QueryAuthor,
    });
    return of(QueryAuthor);
  }
}
