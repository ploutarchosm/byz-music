import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule, Store } from '@ngxs/store';
import { ApplicationState } from '@store/state';
import { ChangeLanguage, SetPage } from '@store/action';

describe('AppComponent', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        TranslateModule.forRoot(),
        NgxsModule.forRoot([ApplicationState]),
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should dispatch language', () => {
    store.dispatch(new ChangeLanguage('el'));

    const feed = store.selectSnapshot(state => state.app.language);
    expect(feed).toBe('el');
  });

  it('should dispatch page title', () => {
    store.dispatch(new SetPage('Home Page'));

    const feed = store.selectSnapshot(state => state.app.page);
    expect(feed).toBe('Home Page');
  });
});
