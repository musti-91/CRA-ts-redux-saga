import {
  fetchCurrPlayingActionSuccess,
  fetchCurrPlayingActionFailure,
  fetchCurrPlayingActionStart,
} from './currentlyPlaying.actions';
import { apiService } from 'services';
import { put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-act';

function* fetchCurrPlayingFlow(action: Action<any>) {
  try {
    const { data } = yield apiService.fetchCurrPlaying();
    yield put(fetchCurrPlayingActionSuccess(data));
  } catch (error) {
    fetchCurrPlayingActionFailure(error);
  }
}

function* fetchAlbumsSaga() {
  yield takeLatest(fetchCurrPlayingActionStart.getType(), fetchCurrPlayingFlow);
}
export default fetchAlbumsSaga;
