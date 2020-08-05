import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const withRedux = (
  Component: any,
  { store, persistor, onBeforeLift }: any,
  Loader: any = null,
) =>
  class Enhance extends React.Component {
    public render() {
      return (
        <Provider store={store}>
          <PersistGate
            loading={Loader}
            persistor={persistor}
            onBeforeLift={onBeforeLift}
          >
            <Component {...this.props} />
          </PersistGate>
        </Provider>
      );
    }
  };

export default withRedux;
