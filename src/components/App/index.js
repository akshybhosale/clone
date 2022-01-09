import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import tmdb from '../../tmdb';

import GlobalStyle from '../../assets/styles/GlobalStyle';
import theme from '../../assets/styles/theme';
import handlePageClick from '../../functions/handlePageClick';
import Header from '../Header';
import Container from './styles';

function App() {
  const [categories, setCategories] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const apiCategories = await tmdb.getCategories();
      setCategories(apiCategories);
    })();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={(e) => handlePageClick(e, ref)}>
        <GlobalStyle />
        <Header searchRef={ref} />
        <div className="test" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
