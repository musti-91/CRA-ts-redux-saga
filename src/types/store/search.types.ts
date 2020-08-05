export interface ISearchResult {}
export interface ISearchResultState {
  loading: boolean;
  error?: any;
  data?: ISearchResult;
}
