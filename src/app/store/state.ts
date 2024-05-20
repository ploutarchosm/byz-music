// Angular modules
import { Injectable } from '@angular/core';

// External modules
import { Action, State, StateContext, StateToken } from '@ngxs/store';

// Internal modules
import { AppStateModel } from '@store/store.model';
import { environment } from '@env/environment.prod';
import { SetPage, ChangeLanguage } from '@store/action';
const APP_STATE_TOKEN = new StateToken<string>('app');

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: {
    language: environment.defaultLanguage,
    page: undefined,
  },
})
@Injectable()
export class ApplicationState {
  @Action(ChangeLanguage)
  changeLanguage(ctx: StateContext<AppStateModel>, data: { payload: string }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      language: data.payload,
    });
  }

  @Action(SetPage)
  setPage(ctx: StateContext<AppStateModel>, data: { payload: string }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      page: data.payload,
    });
  }
}
