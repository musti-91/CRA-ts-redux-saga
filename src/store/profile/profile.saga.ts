import { apiService } from 'services';
import history from 'custom-history';
import { put, takeLatest } from 'redux-saga/effects';
import { getAccessToken } from 'store/auth/auth.selectors';
import { Action } from 'redux-act';
import { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } from './profile.actions';

import storeConfig from 'store';

function* fetchProfileFlow(action: Action<any>) {
  try {
    const state = storeConfig.store.getState();

    // @ts-ignore
    const accessToken = getAccessToken(state);
    if (accessToken) {
      const { data } = yield apiService.fetchProfile(accessToken);
      yield put(fetchProfileSuccess({ data }));
      yield history.push('/profile');
    } else {
      throw new Error('no tokens');
    }
  } catch (error) {
    fetchProfileFailure(error);
  }
}

function* profileSage() {
  yield takeLatest(fetchProfileStart.getType(), fetchProfileFlow);
}
export default profileSage;
