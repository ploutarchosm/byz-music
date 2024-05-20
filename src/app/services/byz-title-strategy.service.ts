import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { SetPage } from '@store/action';
import { Store } from '@ngxs/store';

@Injectable()
export class ByzTitleStrategyService extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly translate: TranslateService,
    private readonly store: Store
  ) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      const pageTitle = this.translate.instant(title);
      this.store.dispatch(new SetPage(pageTitle));
      this.title.setTitle(`${environment.appName} | ${pageTitle}`);
    }
  }
}
