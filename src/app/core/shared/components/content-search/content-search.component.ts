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
  isOpen = false;
  selectOptions: string = '';
  options = ['Libro', 'Autor', 'Genero'];
  bookService = inject(BookService);

  @Input() title: string = '';

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectChoice(options: string) {
    this.isOpen = !this.isOpen;
    this.selectOptions = options;
  }

  search(): void {
    switch (this.selectOptions) {
      case 'Libro': {
        this.bookService.getByNameBook(this.title);
        break;
      }
      case 'Autor': {
        this.bookService.getByAuthorBook(this.title);
        break;
      }
      default: {
        break;
      }
    }
  }
}
