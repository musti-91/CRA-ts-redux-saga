import { Action } from 'redux-act';
import { apiService } from 'services';
import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchSearchResultSuccess,
  fetchSearchResultFailure,
  fetchSearchResultStart,
  ISearchActionStart,
} from './search.actions';

function* fetchSearchAlbums(action: Action<ISearchActionStart>) {
  try {
    // const state = storeConfig.store.getState();

    // // @ts-ignore
    // const accessToken = getAccessToken(state);
    // if (accessToken) {
    const { payload } = action;
    // @ts-ignore
    const { data } = yield apiService.fetchArtistAlbums(payload);
    yield put(fetchSearchResultSuccess({ data }));
    // } else {
    //   throw new Error('no tokens');
    // }
  } catch (error) {
    fetchSearchResultFailure(error);
  }
}
function* searchSaga() {
  yield takeLatest(fetchSearchResultStart.getType(), fetchSearchAlbums);
}
export default searchSaga;
