import { AxiosError } from 'axios';
import { createAction } from 'redux-act';

export interface ISearchActionStart {
  payload: string;
}
export interface ISearchActionSuccess {
  data?: any;
}

export const fetchSearchResultStart = createAction<ISearchActionStart>('SEARCH_ALBUMS_START');
export const fetchSearchResultSuccess = createAction<ISearchActionSuccess>('SEARCH_ALBUMS_SUCCESS');
export const fetchSearchResultFailure = createAction<AxiosError>('SEARCH_ALBUMS_FAILURE');
