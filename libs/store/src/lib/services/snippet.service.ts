import { Store, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SnippetsStateModel, SnippetsStateArray, LoadSnippetsAction, AddSnippetAction, SnippetsState } from '../../../+state/snippets';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  @Select(SnippetsState) snippetsState$: Observable<SnippetsStateModel>;

  constructor(
    private readonly store: Store
  ) { }

  loadSnippets(teamId: number = 0): void {
    this.store.dispatch(new LoadSnippetsAction(teamId));
  }

  createSnippet(data: SnippetsStateArray): void {
    this.store.dispatch(new AddSnippetAction(data));
  }

  getSnippetState(): Observable<SnippetsStateModel> {
    return this.snippetsState$;
  }
}
