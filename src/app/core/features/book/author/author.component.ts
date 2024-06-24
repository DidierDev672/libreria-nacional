import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./author.component.html",
  styleUrl: './author.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthorComponent {
  authorService = inject(AuthorService);
}
