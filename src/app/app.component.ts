import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/shared/components/navbar/navbar.component';
import { SideNavbarComponent } from './core/shared/components/SideNavbar/SideNavbar.component';
import { ContentSearchComponent } from './core/shared/components/content-search/content-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SideNavbarComponent,
    ContentSearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
