import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SnippetsState, SnippetsStateModel } from './snippets.state';
import { SnippetsAction } from './snippets.actions';

describe('Snippets store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SnippetsState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: SnippetsStateModel = {
      items: ['item-1']
    };
    store.dispatch(new SnippetsAction('item-1'));
    const actual = store.selectSnapshot(SnippetsState.getState);
    expect(actual).toEqual(expected);
  });

});
