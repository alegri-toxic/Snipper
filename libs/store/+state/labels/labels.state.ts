import { State, Action, Selector, StateContext } from '@ngxs/store';
import { LoadLabelsAction, LoadLabelsSuccessAction, LoadLabelsFailedAction, AddLabelsAction } from './labels.actions';
import { LabelsStateModel } from './labels.model';

@State<LabelsStateModel>({
  name: 'labels',
  defaults: {
    teamId: 0,
    loading: true,
    loaded: true,
    error: false,
    errorMessage: '',
    labels: []
  }
})
export class LabelsState {

  constructor( ) {}

  @Selector()
  public static getState(state: LabelsStateModel) {
    return state;
  }

  @Selector()
  public static getTeam(state: LabelsStateModel): number {
    return state.teamId;
  }

  @Selector()
  public static getErrorMessage(state: LabelsStateModel): string {
    return state.errorMessage;
  }

  @Selector()
  public static getLabels(state: LabelsStateModel): any[] {
    return state.labels;
  }

  @Selector()
  public static isLoading(state: LabelsStateModel): boolean {
    return state.loading;
  }

  @Selector()
  public static isLoaded(state: LabelsStateModel): boolean {
    return state.loaded;
  }

  @Selector()
  public static isError(state: LabelsStateModel): boolean {
    return state.error;
  }

  @Action(LoadLabelsAction)
  public load(ctx: StateContext<LabelsStateModel>, action: LoadLabelsAction) {
    const state = ctx.getState();
    const newState = {
      ...state,
      teamId: action.payload,
      loaded: false,
      error: false,
      errorMessage: '',
      labels: []
    };
    return ctx.setState(newState);
  }

  @Action(LoadLabelsSuccessAction)
  public success(ctx: StateContext<LabelsStateModel>, action: LoadLabelsSuccessAction) {
    const state = ctx.getState();
    const newState = {
      ...state,
      loading: false,
      loaded: true,
      labels: action.payload
    };
    return ctx.setState(newState);
  }

  @Action(LoadLabelsFailedAction)
  public failed(ctx: StateContext<LabelsStateModel>, action: LoadLabelsFailedAction) {
    const state = ctx.getState();
    const newState = {
      ...state,
      loading: false,
      error: true,
      errorMessage: action.payload
    };
    return ctx.setState(newState);
  }

  @Action(AddLabelsAction)
  public create(ctx: StateContext<LabelsStateModel>, action: AddLabelsAction) {
    const state = ctx.getState();
    const labels = [
      ...state.labels,
      action.payload
    ];
    const newState = {
      ...state,
      labels: labels
    };
    return ctx.setState(newState);
  }
}
