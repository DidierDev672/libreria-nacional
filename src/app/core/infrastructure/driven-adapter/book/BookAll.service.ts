import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CustomResponse } from '../../shared/CustomResponse';
import { createHeaders } from '../../shared/create-headers';

@Injectable({
  providedIn: 'root'
})
export class BookAllService {
  private URL: string = '';
  private NAME_SERVICE: string = 'all-books';
  private http = inject(HttpClient);
  constructor() {
    this.URL = `http://localhost:8080/bookshop/${this.NAME_SERVICE}`;
  }

  getAllBooks() {
    const headers = createHeaders();
    return this.http.get<CustomResponse>(this.URL, { headers: headers});
  }

}
