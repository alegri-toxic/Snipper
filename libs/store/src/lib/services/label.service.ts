import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoadLabelsAction, LabelsStateModel, LabelsState, LabelsStateArray, AddLabelsAction, LoadLabelsSuccessAction, LoadLabelsFailedAction } from '../../../+state/labels';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  @Select(LabelsState) labelsState$: Observable<LabelsStateModel>;

  constructor(
    private readonly store: Store,
    private http: HttpClient
  ) { }

  loadLabels(teamId: number = 0): void {
    this.store.dispatch(new LoadLabelsAction(teamId));
    this.callLabelApi(teamId);
  }

  createLabel(data: LabelsStateArray): void {
    this.store.dispatch(new AddLabelsAction(data));
  }

  getLabelsState(): Observable<LabelsStateModel> {
    return this.labelsState$;
  }

  callLabelApi(teamId: number): void {
    const url = `/api/labels?query={labels(teamID:${teamId}){id,title,color}}`;
    this.http.get(url).toPromise().then((data: any[]) => {
      console.error(data);
      // this.store.dispatch(new LoadLabelsSuccessAction(data));
    }).catch((err: HttpErrorResponse) => {
      this.store.dispatch(new LoadLabelsFailedAction(err.message));
    });
  }

}
