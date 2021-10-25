import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import theme from "../../assets/styles/theme";
import Header from "../Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
