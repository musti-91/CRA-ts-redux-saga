import { AxiosError } from 'axios';
import { createAction } from 'redux-act';
import { IProfile } from 'types/store/profile.types';

export interface IFetchProfileAction {}
export interface IFetchProfileSuccessAction {
  data?: IProfile;
}

export const fetchProfileStart = createAction<IFetchProfileAction>('FETCH_PROFILE_START');
export const fetchProfileSuccess = createAction<IFetchProfileSuccessAction>(
  'FETCH_PROFILE_SUCCESS',
);
export const fetchProfileFailure = createAction<AxiosError>('FETCH_PROFILE_FAILURE');
