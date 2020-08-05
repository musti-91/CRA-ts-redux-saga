import config from 'config';
import { Store } from 'redux';
import { generateStore } from 'packages/redux';

import reducers from './reducers';
import sagas from './sagas';

import { systemStart } from './system/system.actions';

function bootApp(store: Store) {
  store.dispatch(systemStart());
}

const storeConfig = generateStore(sagas, reducers, {
  enableDevTools: config.ENABLE_DEV_TOOLS,
  persistConfig: {}, // override persist config,
  onBeforeLift: bootApp,
});

// start booting process by firing redux action
storeConfig.store.dispatch(systemStart());

export default storeConfig;
