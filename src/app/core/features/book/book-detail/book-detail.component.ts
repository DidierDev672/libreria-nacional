import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from "@angular/core/rxjs-interop";
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book.model';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export default class BookDetailComponent {
  private route = inject(ActivatedRoute);
  bookService = inject(BookService);

  public book = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.bookService.getBookById(id))
    )
  );
}
