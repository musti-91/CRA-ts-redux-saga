import { all, put, takeLatest, call } from 'redux-saga/effects';

import { initServices } from 'services';
import { systemStart, systemReady, systemFail } from './system.actions';

function* initApp() {
  try {
    /**
     * initialize all services
     * afterwards you can use them in the saga flows
     */
    yield call(initServices);

    yield put(systemReady());
  } catch (e) {
    yield put(systemFail(e));
  }
}

export default function* watchSystem() {
  yield all([takeLatest(systemStart.getType(), initApp)]);
}
