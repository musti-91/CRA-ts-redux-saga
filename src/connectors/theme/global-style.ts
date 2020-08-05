import { createGlobalStyle } from 'styled-components';
import './normalize.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }

  p {
    line-height: 1.5;
  }
`;
