import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ByzTitleStrategyService extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly translate: TranslateService
  ) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      const pageTitle = this.translate.instant(title);
      this.title.setTitle(pageTitle);
    }
  }
}
