import { LabelsStateArray } from './labels.model';

export class LoadLabelsAction {
  public static readonly type = '[Labels] Load Labels';
  constructor(public payload: number) {}
}

export class LoadLabelsSuccessAction {
  public static readonly type = '[Labels] Successfully Loaded Labels';
  constructor(public payload: LabelsStateArray[]) {}
}

export class LoadLabelsFailedAction {
  public static readonly type = '[Labels] Failed Loading Labels';
  constructor(public payload: any) { }
}

export class AddLabelsAction {
  public static readonly type = '[Labels] Add Label';
  constructor(public payload: LabelsStateArray) { }
}
