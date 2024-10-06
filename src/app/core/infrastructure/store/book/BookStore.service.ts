import { computed, inject, Injectable, signal } from '@angular/core';
import { Book } from '../../../domains/models/Book';
import { BookAllAdapterRepositoryService } from '../../driven-adapter/book/BookAllAdapterRepository.service';

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
}


interface State {
  data: Book[],
}