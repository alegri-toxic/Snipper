import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LabelsState, LabelsStateModel } from './labels.state';
import { LabelsAction } from './labels.actions';

describe('Labels store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([LabelsState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: LabelsStateModel = {
      items: ['item-1']
    };
    store.dispatch(new LabelsAction('item-1'));
    const actual = store.selectSnapshot(LabelsState.getState);
    expect(actual).toEqual(expected);
  });

});
