import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ByzMainLayoutComponent } from '@components/byz-main-layout/byz-main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ByzMainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'byzantine-music';
}
