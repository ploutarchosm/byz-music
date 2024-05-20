// Angular Modules
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// External Modules
import { AppStateModel } from '@store/store.model';
import { Store } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';

// Internal Modules
import { ByzMainLayoutComponent } from '@components/byz-main-layout/byz-main-layout.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ByzMainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private state$ = this.store.select<AppStateModel>(state => state.app);

  constructor(
    private store: Store,
    private translation: TranslateService
  ) {}

  ngOnInit(): void {
    this.state$.subscribe({
      next: res => {
        this.translation.setDefaultLang(res.language);
      },
      error: err => {
        throw new Error(err);
      },
    });
  }
}
