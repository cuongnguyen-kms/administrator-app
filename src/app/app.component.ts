import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from './shared';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    ...SHARED_IMPORTS,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'administrator-app';
}
