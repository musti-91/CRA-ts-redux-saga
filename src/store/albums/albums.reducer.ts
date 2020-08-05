import { IAlbumsState } from 'types/store/albums.types';
import { fetchAlbumsFailure, fetchAlbumsStart, fetchAlbumsSuccess } from './albums.actions';
import { createReducer } from 'redux-act';

const INITIAL_STATE: IAlbumsState = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = createReducer<IAlbumsState>({}, INITIAL_STATE);

reducer.on(fetchAlbumsStart, (state, payload) => ({
  ...state,
  loading: true,
  data: undefined,
  error: null,
}));

reducer.on(fetchAlbumsSuccess, (state, payload) => ({
  ...state,
  loading: false,
  data: payload,
  error: null,
}));

reducer.on(fetchAlbumsFailure, (state, payload) => ({
  ...state,
  loading: false,
  data: undefined,
  error: payload,
}));

export default reducer;
