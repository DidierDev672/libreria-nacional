import { Injectable } from '@angular/core';
import { DescriptionModel } from '../../domains/models/DescriptionModel';
import { DetailModel } from '../../domains/models/DetailModel';
import { Genre } from '../../domains/models/Genre';
import { Author } from '../../domains/models/Author';
import { Editorial } from '../../domains/models/Editorial';
import { Know } from '../../domains/models/Know';
import { Book } from '../../domains/models/Book';

@Injectable({
  providedIn: 'root',
})
export class MapperBookService {
  constructor() {}

  mapBook(json: any): Book {
    return new Book(
      json.uuid,
      json.title,
      this.mapAuthor(json.authors),
      this.mapEditorial(json.editorial),
      this.mapDetailModel(json.detailModel),
      this.mapDescriptionModel(json.descriptionModel),
      json.photo,
    );
  }

  private mapEditorial(json: any): Editorial {
    return new Editorial(
      json.uuid,
      json.name,
      this.mapAuthor(json.authors) ?? [],
      this.mapBooks(json.books),
      this.mapKnow(json.know),
      json.photo,
    );
  }

  private mapBooks(json: any[]): Book[] {
    return json.map((book: any) => this.mapBook(book));
  }

  private mapKnow(json: any): Know {
    return new Know(json.title, json.description);
  }

  private mapDetailModel(json: any): DetailModel {
    return new DetailModel(
      json.title,
      this.mapAuthor(json.authors),
      this.mapGenre(json.genres),
      json.ISBN,
      json.language,
      json.pages,
      json.year,
    );
  }

  private mapAuthor(json: any[]): Author[] {
    if(json === undefined){
      return [];
    }
    return json.map(
      (author: any) =>
        new Author(
          author.uuid,
          author.name,
          this.mapGenre(author.genre),
          author.description,
          author.photo,
        ),
    );
  }

  private mapGenre(json: any[]): Genre[] {
    if(json === undefined) {
      return [];
    }
    return json.map((genre: any) => new Genre(genre.uuid, genre.name));
  }

  private mapDescriptionModel(json: any): DescriptionModel {
    return new DescriptionModel(json.title, json.description);
  }
}
