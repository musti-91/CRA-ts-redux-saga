import React from 'react';
import { ROUTE } from 'pages/routes.constants';

/**
 * use lazy imports to get code splitting out-of-the-box
 * you can use "webpackChunkName" to name this chunk
 */
const componentPromise = import(
  './Callback' /* webpackChunkName: "callback", webpackPreload: true */
);
const Component = React.lazy(() => componentPromise);

export default {
  component: Component,
  exact: true,
  path: ROUTE.CALLBACK,
};
