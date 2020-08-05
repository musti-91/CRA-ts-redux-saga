import React from 'react';
import { ThemeProvider } from 'styled-components';

import branding from 'styling/branding';
import GlobalStyle from './global-style';

// unsure which types are correct since it's being reused for the styleguide
const theme = (Component: any) => {
  return (props: any) => {
    return (
      <ThemeProvider theme={branding}>
        <React.Fragment>
          <Component {...props} />
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    );
  };
};

export default theme;
