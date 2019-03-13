export interface SnippetsStateModel {
  teamId: number;
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string;
  snippets: SnippetsStateArray[];
}


export interface SnippetsStateArray {
  id: number;
  title: string;
  description: string;
  code: string;
}
