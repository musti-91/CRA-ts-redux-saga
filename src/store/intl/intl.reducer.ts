import { createReducer } from 'redux-act';

import config from 'config';
import { IIntlState } from 'types/store/intl.types';
import { updateLocale } from './intl.actions';

const INITIAL_STATE = {
  locale: config.DEFAULT_LOCALE,
};

const reducer = createReducer<IIntlState>({}, INITIAL_STATE);

reducer.on(updateLocale, (state, locale) => ({
  ...state,
  locale,
}));

export default reducer;
