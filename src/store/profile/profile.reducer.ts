import { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } from './profile.actions';
import { createReducer } from 'redux-act';

import { IProfileState } from 'types/store/profile.types';

const INITIAL_STATE: IProfileState = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = createReducer<IProfileState>({}, INITIAL_STATE);

reducer.on(fetchProfileStart, (state, payload) => ({
  ...state,
  loading: true,
  data: undefined,
  error: null,
}));

reducer.on(fetchProfileSuccess, (state, payload) => ({
  ...state,
  loading: false,
  data: payload.data,
  error: null,
}));

reducer.on(fetchProfileFailure, (state, payload) => ({
  ...state,
  loading: false,
  data: undefined,
  error: payload,
}));

export default reducer;
