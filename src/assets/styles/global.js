import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  body {
    font-size: 1.125rem;
  }

  button {
    cursor: pointer;
  }
`;
