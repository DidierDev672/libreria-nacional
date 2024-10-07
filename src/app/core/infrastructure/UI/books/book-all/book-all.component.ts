import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BookStoreService } from '../../../store/book/BookStore.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-all',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: "./book-all.component.html",
  styleUrl: './book-all.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BookAllComponent implements OnInit {
  bookStore = inject(BookStoreService);
  ngOnInit(): void {
    this.bookStore.getAllBooks();
  }
}
