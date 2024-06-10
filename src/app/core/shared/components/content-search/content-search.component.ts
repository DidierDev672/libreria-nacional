import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, signal } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: "./content-search.component.html",
  styleUrl: './content-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSearchComponent {
  bookService = inject(BookService);

  @Input() title: string = '';

  search(): void {
    this.bookService.getByNameBook(this.title);
  }
}
