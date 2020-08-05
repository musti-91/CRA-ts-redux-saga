import { apiService } from 'services';
import { put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-act';
import { fetchAlbumsFailure, fetchAlbumsStart, fetchAlbumsSuccess } from './albums.actions';

function* fetchAlbumsFlow(action: Action<any>) {
  try {
    const { data } = yield apiService.fetchAlbums();
    yield put(fetchAlbumsSuccess(data));
  } catch (error) {
    fetchAlbumsFailure(error);
  }
}

function* fetchAlbumsSaga() {
  yield takeLatest(fetchAlbumsStart.getType(), fetchAlbumsFlow);
}
export default fetchAlbumsSaga;
