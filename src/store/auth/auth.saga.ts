import { takeLatest, put } from 'redux-saga/effects';
import { Action } from 'redux-act';

import { apiService } from 'services';
import history from 'custom-history';

import {
  fetchTokenStart,
  fetchTokenSuccess,
  fetchTokenFail,
  // refreshTokenStart,
  IFetchTokenStartAction,
} from './auth.actions';

function* fetchTokensFlow(action: Action<IFetchTokenStartAction>) {
  try {
    const { code } = action.payload;
    const { data } = yield apiService.fetchTokens(code);

    if (data.accessToken && data.refreshToken) {
      yield put(fetchTokenSuccess(data));
      yield history.push('/');
    } else {
      throw new Error('no tokens');
    }
  } catch (error) {
    fetchTokenFail(error);
  }
}

// function* refreshTokenFlow() {
//   yield null;
//   // TODO...
// }

function* authSaga() {
  yield takeLatest(fetchTokenStart.getType(), fetchTokensFlow);
  // yield takeLatest(refreshTokenStart.getType(), refreshTokenFlow);
}

export default authSaga;
