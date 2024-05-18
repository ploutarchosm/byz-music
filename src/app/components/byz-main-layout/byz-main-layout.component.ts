import { Component } from '@angular/core';
import { ByzNavbarComponent } from '@components/byz-navbar/byz-navbar.component';
import { ByzBodyComponent } from '@components/byz-body/byz-body.component';

@Component({
  selector: 'app-byz-main-layout',
  standalone: true,
  imports: [ByzNavbarComponent, ByzBodyComponent],
  templateUrl: './byz-main-layout.component.html',
  styleUrl: './byz-main-layout.component.scss',
})
export class ByzMainLayoutComponent {}
