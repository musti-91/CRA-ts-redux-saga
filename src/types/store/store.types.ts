import { IPlayTrackState } from './playTrack.types';
import { ICurrentlyPlayingState } from './currentlyPlaying.types';
import { IAlbumsState } from './albums.types';
import { ISaveAlbumState } from './save.types';
import { ISearchResultState } from './search.types';
import { IProfileState } from 'types/store/profile.types';
import { ISystemState } from 'types/store/system.types';
import { IIntlState } from 'types/store/intl.types';
import { IAuthState } from './auth.types';

export interface IStore {
  system: ISystemState;
  intl: IIntlState;
  auth: IAuthState;
  profile: IProfileState;
  search: ISearchResultState;
  save: ISaveAlbumState;
  albums: IAlbumsState;
  currentlyPlaying: ICurrentlyPlayingState;
  playTrack: IPlayTrackState;
}
