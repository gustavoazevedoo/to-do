import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  html {
    font-size: 18px;
  }

  body {
    background: hsl(235, 21%, 11%);
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 575.98px) {
    html {
      font-size: 16px;
    }
  }
`;
