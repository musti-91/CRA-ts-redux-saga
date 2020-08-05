import { playTrackFailure, playTrackStart, playTrackSuccess } from './playTrack.actions';
import { IPlayTrackState } from 'types/store/playTrack.types';
import { createReducer } from 'redux-act';

const INITIAL_STATE: IPlayTrackState = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = createReducer<IPlayTrackState>({}, INITIAL_STATE);

reducer.on(playTrackStart, (state, payload) => ({
  ...state,
  loading: true,
  data: undefined,
  error: null,
}));

reducer.on(playTrackSuccess, (state, payload) => ({
  ...state,
  loading: false,
  data: payload,
  error: null,
}));

reducer.on(playTrackFailure, (state, payload) => ({
  ...state,
  loading: false,
  data: undefined,
  error: payload,
}));

export default reducer;
