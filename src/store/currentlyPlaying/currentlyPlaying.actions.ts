import { ICurrentlyPlaying } from 'types/store/currentlyPlaying.types';
import { AxiosError } from 'axios';
import { createAction } from 'redux-act';

export interface ICurrPlayingActionStart {}
export interface ICurrPlayingActionSuccess {
  data?: ICurrentlyPlaying;
}

export const fetchCurrPlayingActionStart = createAction<ICurrPlayingActionStart>(
  'FETCH_CURRENTLY_PLAYING_START',
);
export const fetchCurrPlayingActionSuccess = createAction<ICurrPlayingActionSuccess>(
  'FETCH_CURRENTLY_PLAYING_SUCCESS',
);
export const fetchCurrPlayingActionFailure = createAction<AxiosError>(
  'FETCH_CURRENTLY_PLAYING_FAILURE',
);
