import { IPlayTrack } from 'types/store/playTrack.types';
import { AxiosError } from 'axios';
import { createAction } from 'redux-act';

export interface IPlayTrackAction {}
export interface IPlayTrackSuccess {
  data?: IPlayTrack;
}

export const playTrackStart = createAction<IPlayTrackAction>('PLAY_TRACK_START');
export const playTrackSuccess = createAction<IPlayTrackSuccess>('PLAY_TRACK_SUCCESS');
export const playTrackFailure = createAction<AxiosError>('PLAY_TRACK_FAILURE');
