import { createAction } from 'redux-act';
import { AxiosError } from 'axios';

export const systemStart = createAction('SYSTEM_START');
export const systemReady = createAction('SYSTEM_READY');
export const systemFail = createAction<AxiosError>('SYSTEM_FAIL');

export const resetStore = createAction('RESET_STORE');
