import { Injectable, signal } from '@angular/core';
import { Author } from '../models/author.model';
import { Authors } from '../shared/utils/authors';

interface State {
  data: Author[],
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor() { }

  authors = signal<State>({
    data: Authors,
  });

  getAuthorsByName(name: string): Author | undefined {
    const nameAuthor = this.authors().data.find(a => a.name === name);
    return nameAuthor;
  }

}
