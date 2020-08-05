import { createReducer } from 'redux-act';

import { ISystemState } from 'types/store/system.types';
import { systemStart, systemReady, systemFail } from './system.actions';

const INITIAL_STATE: ISystemState = {
  booting: false,
  ready: false,
  error: undefined,
};

const reducer = createReducer<ISystemState>({}, INITIAL_STATE);

reducer.on(systemStart, state => ({
  ...state,
  booting: true,
  ready: false,
}));

reducer.on(systemReady, state => ({
  ...state,
  booting: false,
  ready: true,
}));

reducer.on(systemFail, (state, payload) => ({
  ...state,
  booting: false,
  ready: false,
  error: payload,
}));

export default reducer;
