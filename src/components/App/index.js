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

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Footer';

function App() {
  const [categories, setCategories] = useState();

  const searchRef = useRef(null);
  const headerRef = useRef(null);

  function handleScroll() {
    if (window.scrollY !== 0) {
      headerRef.current.classList.add('no-transparency');
    } else {
      headerRef.current.classList.remove('no-transparency');
    }
  }

  useEffect(() => {
    (async () => {
      const apiCategories = await tmdb.getCategories();
      setCategories(apiCategories);
    })();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={(e) => handlePageClick(e, searchRef)}>
        <GlobalStyle />
        <Header searchRef={searchRef} headerRef={headerRef} />
        {categories && <Overview item={categories[0].items[Math.floor(Math.random() * 20)]} />}
        <div className="movie-rows">
          {categories && categories.map((category) => <MovieRow category={category} />)}
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
