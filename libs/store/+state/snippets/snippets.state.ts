import { State, Action, Selector, StateContext } from '@ngxs/store';
import { LoadSnippetsAction } from './snippets.actions';
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
      teamId: action.teamId,
      loaded: false,
      error: false,
      errorMessage: '',
      snippets: []
    };
    ctx.setState(newState);
  }
}
