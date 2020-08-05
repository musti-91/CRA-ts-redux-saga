import { SimpleActionCreator } from 'redux-act';

export interface IIntlState {
  locale: string;
}

export type TUpdateLocale = SimpleActionCreator<string, {}>;
