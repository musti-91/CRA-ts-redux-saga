import { playTrackSuccess, playTrackFailure, playTrackStart } from './playTrack.actions';
import { apiService } from 'services';
import { put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-act';

function* playTrackFlow(action: Action<any>) {
  try {
    const { data } = yield apiService.play();
    yield put(playTrackSuccess(data));
  } catch (error) {
    playTrackFailure(error);
  }
}

function* playTrackSaga() {
  yield takeLatest(playTrackStart.getType(), playTrackFlow);
}
export default playTrackSaga;
