import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  inject,
} from '@angular/core';
import { BookService } from '../../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../../shared/components/card/card.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { Book } from '../../../models/book.model';
import { switchMap } from 'rxjs';

interface State {
  data: Book[];
  category?: Book[];
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class BookListComponent {
  bookService = inject(BookService);
}
