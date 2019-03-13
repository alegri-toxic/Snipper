export interface SnippetsStateModel {
  teamId: number;
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string;
  snippets: any[]; // TODO: Add Interface
}
