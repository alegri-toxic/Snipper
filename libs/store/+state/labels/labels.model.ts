
export interface LabelsStateModel {
  teamId: number;
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string;
  labels: LabelsStateArray[];
}


export interface LabelsStateArray {
  id: number;
  title: string;
  color: string;
  count: number;
}
