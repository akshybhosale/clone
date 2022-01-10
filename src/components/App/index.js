import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import tmdb from '../../tmdb';

import GlobalStyle from '../../assets/styles/GlobalStyle';
import theme from '../../assets/styles/theme';
import handlePageClick from '../../functions/handlePageClick';
import Header from '../Header';
import Container from './styles';
import Overview from '../Overview';
import MovieRow from '../MovieRow';

function App() {
  const [categories, setCategories] = useState();

  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const apiCategories = await tmdb.getCategories();
      setCategories(apiCategories);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={(e) => handlePageClick(e, ref)}>
        <GlobalStyle />
        <Header searchRef={ref} />
        {categories && <Overview item={categories[0].items[Math.floor(Math.random() * 20)]} />}
        {categories && categories.map((category) => <MovieRow category={category} />)}
      </Container>
    </ThemeProvider>
  );
}

export default App;
