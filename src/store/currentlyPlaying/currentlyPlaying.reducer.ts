import {
  fetchCurrPlayingActionFailure,
  fetchCurrPlayingActionSuccess,
  fetchCurrPlayingActionStart,
} from './currentlyPlaying.actions';
import { ICurrentlyPlayingState } from 'types/store/currentlyPlaying.types';
import { createReducer } from 'redux-act';

const INITIAL_STATE: ICurrentlyPlayingState = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = createReducer<ICurrentlyPlayingState>({}, INITIAL_STATE);

reducer.on(fetchCurrPlayingActionStart, (state, payload) => ({
  ...state,
  loading: true,
  data: undefined,
  error: null,
}));
reducer.on(fetchCurrPlayingActionSuccess, (state, payload) => ({
  ...state,
  loading: false,
  data: payload,
  error: null,
}));

reducer.on(fetchCurrPlayingActionFailure, (state, payload) => ({
  ...state,
  loading: false,
  data: undefined,
  error: payload,
}));

export default reducer;
