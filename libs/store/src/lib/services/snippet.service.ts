import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SnippetsState } from '../../../+state/snippets/snippets.state';
import { LoadSnippetsAction } from '../../../+state/snippets/snippets.actions';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(
    private readonly store: Store,
    private readonly state: SnippetsState) { }

  getSnippets(): void {
    this.store.dispatch(new LoadSnippetsAction(0));
  }
}
