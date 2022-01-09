import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import theme from '../../assets/styles/theme';
import handlePageClick from '../../functions/handlePageClick';
import Header from '../Header';
import Container from './styles';

function App() {
  const ref = useRef(null);

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
