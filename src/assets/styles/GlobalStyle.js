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

    @media (min-width: 1800px) {
      font-size: 67.5%;
    }

    @media (max-width: 1400px) {
      font-size: 60%;
    }

    @media (max-width: 800px) {
      font-size: 55%;
    }

    @media (max-width: 680px) {
      font-size: 50%;
    }

    @media (max-width: 620px) {
      font-size: 47.5%;
    }

    @media (max-width: 420px) {
      font-size: 42.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.main.black};

    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
  }
`;
