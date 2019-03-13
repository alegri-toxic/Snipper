import { SnippetsStateArray } from './snippets.model';

export class LoadSnippetsAction {
  public static readonly type = '[Snippets] Load Snippets';
  constructor(public payload: number) { }
}

export class LoadSnippetsSuccessAction {
  public static readonly type = '[Snippets] Successfully Loaded Snippets';
  constructor(public payload: SnippetsStateArray[]) { }
}

export class LoadSnippetsFailedAction {
  public static readonly type = '[Snippets] Failed Loading Snippets';
  constructor(public payload: any) { }
}

export class AddSnippetAction {
  public static readonly type = '[Snippets] Add Snippet';
  constructor(public payload: SnippetsStateArray) { }
}
