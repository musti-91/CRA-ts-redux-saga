import { createAction } from 'redux-act';
import { AxiosError } from 'axios';

export interface IFetchTokenStartAction {
  code: string;
}

export interface IFetchTokenSuccessAction {
  accessToken: string;
  refreshToken: string;
}

export const setTokens = createAction<IFetchTokenSuccessAction>('TOKEN_SET');

export const fetchTokenStart = createAction<IFetchTokenStartAction>('TOKEN_FETCH_START');
export const fetchTokenSuccess = createAction<IFetchTokenSuccessAction>('TOKEN_FETCH_SUCCESS');
export const fetchTokenFail = createAction<AxiosError>('TOKEN_FETCH_FAIL');

export const refreshTokenStart = createAction('TOKEN_REFRESH_START');
export const refreshTokenSuccess = createAction('TOKEN_REFRESH_SUCCESS');
export const refreshTokenFail = createAction('TOKEN_REFRESH_FAIL');
