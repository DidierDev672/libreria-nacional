import { computed, inject, Injectable, signal } from '@angular/core';
import { Book } from '../../../domains/models/Book';
import { BookAllAdapterRepositoryService } from '../../driven-adapter/book/BookAllAdapterRepository.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

  private bookService = inject(BookAllAdapterRepositoryService);
  #state = signal<State>({
    data: [],
  });

  public listBooks = computed(() => this.#state().data);


  getAllBooks(): void {
    this.bookService.getAll().then((books) => {
      if (books) {
        this.#state().data = books;
      }
    });
  }

  queryBook(uuid: string): Observable<Book> {
    const queryBook = this.#state().data.find((book) => book.getUuid() === uuid);
    if(!queryBook){
      throw new Error(`Book with uuid ${uuid} not found.`);
    }

    console.log(queryBook);;;;

    return of(queryBook);
  }
}


interface State {
  data: Book[],
}