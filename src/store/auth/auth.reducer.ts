import { createReducer } from 'redux-act';

import {
  setTokens,
  fetchTokenStart,
  fetchTokenSuccess,
  fetchTokenFail,
  refreshTokenStart,
  refreshTokenSuccess,
  refreshTokenFail,
} from 'store/auth/auth.actions';

import { IAuthState } from 'types/store/auth.types';

const INITIAL_STATE: IAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
};

const reducer = createReducer<IAuthState>({}, INITIAL_STATE);

reducer.on(setTokens, (state, payload) => ({
  ...state,
  accessToken: payload.accessToken,
  refreshToken: payload.refreshToken,
}));

reducer.on(fetchTokenStart, (state, payload) => ({
  ...state,
}));

reducer.on(fetchTokenSuccess, (state, payload) => ({
  ...state,
  accessToken: payload.accessToken,
  refreshToken: payload.refreshToken,
}));

reducer.on(fetchTokenFail, (state, payload) => ({
  ...state,
  accessToken: undefined,
  refreshToken: undefined,
}));

reducer.on(refreshTokenStart, (state, payload) => ({
  ...state,
}));

reducer.on(refreshTokenSuccess, (state, payload) => ({
  ...state,
}));

reducer.on(refreshTokenFail, (state, payload) => ({
  ...state,
}));

export default reducer;
