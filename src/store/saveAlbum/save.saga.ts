import { apiService } from 'services';
import { put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-act';
import { saveAlbumFailure, saveAlbumStart, saveAlbumSuccess } from './save.actions';

function* saveAlbumFlow(action: Action<any>) {
  try {
    const { payload } = action;
    const { data } = yield apiService.saveAlbumToPlaylist(payload);
    yield put(saveAlbumSuccess(data));
  } catch (error) {
    saveAlbumFailure(error);
  }
}

function* saveAlbumSaga() {
  yield takeLatest(saveAlbumStart.getType(), saveAlbumFlow);
}
export default saveAlbumSaga;
