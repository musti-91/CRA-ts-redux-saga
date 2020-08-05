import { AxiosError } from 'axios';
import { createAction } from 'redux-act';
import { IProfile } from 'types/store/profile.types';

export interface ISaveActionStart {
  id: string;
}
export interface ISaveActionSuccess {
  data?: IProfile;
}

export const saveAlbumStart = createAction<ISaveActionStart>('SAVE_ALBUM_START');
export const saveAlbumSuccess = createAction<ISaveActionSuccess>('SAVE_ALBUM_SUCCESS');
export const saveAlbumFailure = createAction<AxiosError>('SAVE_ALBUM_FAILURE');
