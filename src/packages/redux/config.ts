import { applyMiddleware, compose, createStore, combineReducers, Store } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import _merge from 'lodash/merge';
import storage from 'redux-persist/lib/storage';

import { middlewares, sagaMiddleware } from './middlewares';
import { IStore } from 'types/store/store.types';

type Optional<T> = { [P in keyof T]?: T[P] };
interface IOptions {
  enableDevTools: string | boolean;
  persistConfig?: Optional<PersistConfig>;
  onBeforeLift?: (store: Store) => void;
}

let devToolsExtension = (f: any) => f;

const defaultOptions: IOptions = {
  enableDevTools: true,
  persistConfig: {
    key: 'root',
    storage,
    version: 1,
    debug: true,
    whitelist: [],
  },
  onBeforeLift: (store: Store) => {},
};

const generateStore = (sagas: any, reducers: any, options: IOptions) => {
  const opts = _merge(defaultOptions, options);

  if (
    opts.enableDevTools &&
    (global as any).window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ) {
    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
  }

  const enhancer = compose(
    applyMiddleware(...middlewares),
    devToolsExtension,
  );

  const appReducer = combineReducers(reducers);

  const rootReducer = (state: IStore, action: any) => {
    if (action.type === 'RESET_STORE') {
      // @ts-ignore TODO: check if there is a better way of resetting store
      state = undefined;
    }

    return appReducer(state, action);
  };

  // @ts-ignore TODO: check if there is a better way of resetting store
  const persistedReducer = persistReducer(opts.persistConfig as PersistConfig, rootReducer);
  const store = createStore(persistedReducer, enhancer as any);
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  // @ts-ignore onBeforeLift can't be undefined, we set it as a noop function in the defaultOptions
  const onBeforeLift = () => opts.onBeforeLift(store);

  return { store, persistor, onBeforeLift };
};

export default generateStore;
