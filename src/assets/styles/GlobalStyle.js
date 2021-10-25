import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
  }
`;