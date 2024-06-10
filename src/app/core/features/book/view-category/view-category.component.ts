import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
  ],
  templateUrl: "./view-category.component.html",
  styleUrl: './view-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewCategoryComponent {
  bookService = inject(BookService);
  categoryService = inject(CategoryService);
  route = inject(ActivatedRoute);

  public bookCategory = toSignal(
    this.route.params.pipe(
      switchMap(( { category } ) => this.bookService.getByCategoryBook(category))
    )
  );

  public categoric = toSignal(
    this.route.params.pipe(
      switchMap(({ category }) => this.categoryService.getByNameCategory(category))
    )
  );
}
