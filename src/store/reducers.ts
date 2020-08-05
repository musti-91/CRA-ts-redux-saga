import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import systemReducer from './system/system.reducer';
import intlReducer from './intl/intl.reducer';
import authReducer from './auth/auth.reducer';
import profileReducer from './profile/profile.reducer';
import searchReducer from './search/search.reducer';
import saveReducer from './saveAlbum/save.reducer';
import albumsReducer from './albums/albums.reducer';
import currentlyPlayingReducer from './currentlyPlaying/currentlyPlaying.reducer';
import playTrackReducer from './playTrack/playTrack.reducer';

const reducers = {
  system: systemReducer,
  intl: intlReducer,
  auth: persistReducer({ key: 'auth', storage }, authReducer),
  profile: profileReducer,
  search: searchReducer,
  save: saveReducer,
  albums: albumsReducer,
  currentlyPlaying: currentlyPlayingReducer,
  playTrack: playTrackReducer,
};

export default reducers;
