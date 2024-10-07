import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../../../store/book/BookStore.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detail-book',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./detail-book.component.html",
  styleUrl: './detail-book.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DetailBookComponent {
  private route = inject(ActivatedRoute);

  private bookService = inject(BookStoreService);

  public book = toSignal(
    this.route.params.pipe(
      switchMap(({ uuid }) => this.bookService.queryBook(uuid)),
    )
  );
}
