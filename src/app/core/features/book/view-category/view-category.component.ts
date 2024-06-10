import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./view-category.component.html",
  styleUrl: './view-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewCategoryComponent { }
