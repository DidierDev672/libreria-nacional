import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BookFormComponent {
  private bookService = inject(BookService);
  bookForm = new FormGroup({
    bookId: new FormControl([this.generateRandomCode(10), Validators.required]),
    title: new FormControl(['', Validators.required, Validators.minLength(20)]),
    author: new FormControl(['', Validators.required, Validators.minLength(20)]),
    category: new FormControl(['', Validators.required, Validators.minLength(13)]),
    pages: new FormControl(['', Validators.required, Validators.min(10)]),
    year: new FormControl(['', Validators.required, Validators.min(1900)]),
    publisher: new FormControl(['', Validators.required, Validators.minLength(20)]),
    language: new FormControl(['', Validators.required, Validators.minLength(20)]),
    type: new FormControl(['', Validators.required, Validators.minLength(20)]),
    imgUrl: new FormControl(['', Validators.required]),
  });

  onSubmit(): void  {
    if (this.bookForm.valid) {
      const book = this.bookForm.value;
      //this.bookService.addBook(book);
      console.log('Submitted book: ', book);
      this.bookForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  generateRandomCode(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
