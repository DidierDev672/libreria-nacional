import { inject, Injectable } from '@angular/core';
import { GenericGetAllRepository } from '../../../domains/repository/GenericGetAllRepository';
import { Book } from '../../../domains/models/Book';
import { BookAllService } from './BookAll.service';
import { MapperBookService } from '../../mappers/MapperBook.service';
import { CustomResponse } from '../../shared/CustomResponse';

@Injectable({
  providedIn: 'root'
})
export class BookAllAdapterRepositoryService implements GenericGetAllRepository<Book> {
  private bookService: BookAllService;
  private mapperBook = inject(MapperBookService);
  
  private constructor(bookService: BookAllService) {
    this.bookService = bookService;
  }

  public static init(bookService: BookAllService) {
    return new BookAllAdapterRepositoryService(bookService);
  }
  
  getAll(): Promise<Book[] | undefined> {
    return new Promise<Book[] | undefined>((resolve, reject) => {
      this.bookService.getAllBooks().subscribe(
        (books) => resolve(this.handleResponse(books)),
        (error) => reject(this.handleError(error))
      );
    });
  }

  private handleResponse(data: CustomResponse): Book[] | undefined {
    if(data.statusCode !== 200){
      throw new Error(`Error ${data.statusCode}: ${data.message}`);
    }

    console.log(data.data);
    return Array.isArray(data.data)
    ? data.data.map(item => this.mapperBook.mapBook(item))
    : [this.mapperBook.mapBook(data.data)];
  }

  private handleError(error: any): void {
    console.error('Error retrieving books', error);
    throw error;
  }

}
