export class ChangeLanguage {
  static readonly type = '[Action] Change Language';
  constructor(public payload: string) {}
}

export class SetPage {
  static readonly type = '[Action] Set Page';
  constructor(public payload: string) {}
}
