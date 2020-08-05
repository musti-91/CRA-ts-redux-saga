import { ISaveAlbumState } from './../../types/store/save.types';
import { saveAlbumStart, saveAlbumSuccess, saveAlbumFailure } from './save.actions';
import { createReducer } from 'redux-act';

const INITIAL_STATE: ISaveAlbumState = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = createReducer<ISaveAlbumState>({}, INITIAL_STATE);

reducer.on(saveAlbumStart, (state, payload) => ({
  ...state,
  loading: true,
  data: undefined,
  error: null,
}));

reducer.on(saveAlbumSuccess, (state, payload) => ({
  ...state,
  loading: false,
  data: payload.data,
  error: null,
}));

reducer.on(saveAlbumFailure, (state, payload) => ({
  ...state,
  loading: false,
  data: undefined,
  error: payload,
}));

export default reducer;
