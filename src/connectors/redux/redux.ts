import store from 'store';
import { withRedux } from 'packages/redux';

export default function(BaseComponent: React.ComponentClass) {
  return withRedux(BaseComponent, store);
}
