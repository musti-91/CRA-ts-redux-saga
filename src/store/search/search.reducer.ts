import { ISearchResultState } from './../../types/store/search.types';
import {
  fetchSearchResultStart,
  fetchSearchResultSuccess,
  fetchSearchResultFailure,
} from './search.actions';
import { createReducer } from 'redux-act';

const INITIAL_STATE: ISearchResultState = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = createReducer<ISearchResultState>({}, INITIAL_STATE);

reducer.on(fetchSearchResultStart, (state, payload) => ({
  ...state,
  loading: true,
  data: undefined,
  error: null,
}));

reducer.on(fetchSearchResultSuccess, (state, payload) => ({
  ...state,
  loading: false,
  data: payload.data,
  error: null,
}));

reducer.on(fetchSearchResultFailure, (state, payload) => ({
  ...state,
  loading: false,
  data: undefined,
  error: payload,
}));

export default reducer;
