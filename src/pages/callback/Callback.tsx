import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import { SimpleActionCreator } from 'redux-act';

import config from 'config';
import { IFetchTokenStartAction, fetchTokenStart } from 'store/auth/auth.actions';

interface IProps {
  fetchTokenStart: SimpleActionCreator<IFetchTokenStartAction>;
}

const Callback: React.FC<IProps> = ({ fetchTokenStart }) => {
  useEffect(() => {
    const { code } = qs.parse(window.location.search);

    debugger;

    if (code && typeof code === 'string') {
      // We have a code in the callback url, try to get the access token by dispatching the fetchTokenStart action
      fetchTokenStart({ code });
    } else {
      // Something went wrong with the callback, redirect back to the API auth page.
      window.location.assign(config.API_BASE);
    }
  }, [fetchTokenStart]);

  return null;
};

const mapDispatchToProps = {
  fetchTokenStart,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(Callback);
