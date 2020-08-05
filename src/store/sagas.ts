import { all } from 'redux-saga/effects';

import watchSystem from './system/system.saga';
import watchAuth from './auth/auth.saga';
import watchProfile from './profile/profile.saga';
import searchSaga from './search/search.saga';
import saveSaga from './saveAlbum/save.saga';
import albumsSaga from './albums/albums.saga';
import currPlayingSaga from './currentlyPlaying/currentlyPlaying.saga';
import playTrackSaga from './playTrack/playTrack.saga';

export default function* sagas() {
  yield all([
    watchSystem(),
    watchAuth(),
    watchProfile(),
    searchSaga(),
    saveSaga(),
    albumsSaga(),
    currPlayingSaga(),
    playTrackSaga(),
  ]);
}
