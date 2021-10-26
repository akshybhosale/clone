import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import theme from "../../assets/styles/theme";
import Header from "../Header";
import Container from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header />
        <div className='test' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
