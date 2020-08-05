import { createAction } from 'redux-act';

export const updateLocale = createAction<string>('LOCALE_UPDATE');
