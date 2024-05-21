import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-byz-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './byz-navbar.component.html',
  styleUrl: './byz-navbar.component.scss',
})
export class ByzNavbarComponent {}
