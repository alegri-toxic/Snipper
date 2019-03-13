export class LoadSnippetsAction {
  public static readonly type = '[Snippets] Load Team Snippets';
  constructor(public teamId: number) { }
}
