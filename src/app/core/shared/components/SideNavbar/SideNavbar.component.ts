import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentSearchComponent } from '../content-search/content-search.component';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContentSearchComponent,
  ],
  templateUrl: "./sideNavbar.component.html",
  styleUrl: './SideNavbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavbarComponent { }
