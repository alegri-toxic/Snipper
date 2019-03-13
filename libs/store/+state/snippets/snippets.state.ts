import { State, Action, Selector, StateContext } from '@ngxs/store';
import { LoadSnippetsAction, LoadSnippetsSuccessAction, LoadSnippetsFailedAction, AddSnippetAction } from './snippets.actions';
import { SnippetsStateModel } from './snippets.model';

@State<SnippetsStateModel>({
  name: 'snippets',
  defaults: {
    teamId: 0,
    loading: true,
    loaded: false,
    error: false,
    errorMessage: '',
    snippets: []
  }
})
export class SnippetsState {

  @Selector()
  public static getState(state: SnippetsStateModel): SnippetsStateModel {
    return state;
  }

  @Selector()
  public static getTeam(state: SnippetsStateModel): number {
    return state.teamId;
  }

  @Selector()
  public static getErrorMessage(state: SnippetsStateModel): string {
    return state.errorMessage;
  }

  @Selector()
  public static getSnippets(state: SnippetsStateModel): any[] {
    return state.snippets;
  }

  @Selector()
  public static isLoading(state: SnippetsStateModel): boolean {
    return state.loading;
  }

  @Selector()
  public static isLoaded(state: SnippetsStateModel): boolean {
    return state.loaded;
  }

  @Selector()
  public static isError(state: SnippetsStateModel): boolean {
    return state.error;
  }

  @Action(LoadSnippetsAction)
  public load(ctx: StateContext<SnippetsStateModel>, action: LoadSnippetsAction) {
    const state = ctx.getState();
    const newState = {
      ...state,
      teamId: action.payload,
      loaded: false,
      error: false,
      errorMessage: '',
      snippets: []
    };
    return ctx.setState(newState);
  }

  @Action(LoadSnippetsSuccessAction)
  public success(ctx: StateContext<SnippetsStateModel>, action: LoadSnippetsSuccessAction) {
    const state = ctx.getState();
    const newState = {
      ...state,
      loading: false,
      loaded: true,
      snippets: action.payload
    };
     return ctx.setState(newState);
  }

  @Action(LoadSnippetsFailedAction)
  public failed(ctx: StateContext<SnippetsStateModel>, action: LoadSnippetsFailedAction) {
    const state = ctx.getState();
    const newState = {
      ...state,
      loading: false,
      error: true,
      errorMessage: action.payload
    };
     return ctx.setState(newState);
  }

  @Action(AddSnippetAction)
  public create(ctx: StateContext<SnippetsStateModel>, action: AddSnippetAction) {
    const state = ctx.getState();
    const snippets = [
      ...state.snippets,
      action.payload
    ];
    const newState = {
      ...state,
      snippets
    };
    console.error(newState);
     return ctx.setState(newState);
  }
}
