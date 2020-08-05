import { IAlbums } from 'types/store/albums.types';
import { AxiosError } from 'axios';
import { createAction } from 'redux-act';

export interface IAlbumsActionStart {}
export interface IAlbumsActionSuccess {
  data?: IAlbums;
}

export const fetchAlbumsStart = createAction<IAlbumsActionStart>('FETCH_ALBUMS_START');
export const fetchAlbumsSuccess = createAction<IAlbumsActionSuccess>('FETCH_ALBUMS_SUCCESS');
export const fetchAlbumsFailure = createAction<AxiosError>('FETCH_ALBUMS_FAILURE');
