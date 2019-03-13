import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadLabelsAction, LabelsStateModel, LabelsState, LabelsStateArray, AddLabelsAction } from '../../../+state/labels';

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

  async callLabelApi(teamId: number): Promise<void> {
    // const url = "/api/labels/" + teamId;
    const url = "/api/labels/";
    const data = await this.http.get(url).toPromise();
    console.error(data);
  }

}
