import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateModel } from '@store/store.model';
import { Store } from '@ngxs/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-byz-body',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './byz-body.component.html',
  styleUrl: './byz-body.component.scss',
})
export class ByzBodyComponent {
  pageTitle$ = this.store.select<AppStateModel>(state => state.app.page);
  constructor(private store: Store) {}
}
