import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyle";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { StoreProvider } from "./context";
import { initialState, reducer } from "./reducers";
import Routes from "./routes";

function App() {
  const [storedTheme, setStoredTheme] = useTheme();

  //Saves choice to Local Storage
  const themeSwitcher = () => {
    storedTheme === "light" ? setStoredTheme("dark") : setStoredTheme("light");
  };

  return (
    <ThemeProvider theme={storedTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StoreProvider reducer={reducer} initialState={initialState}>
        <Header theme={storedTheme} handleClick={themeSwitcher} />
        <Container>
          <Routes />
        </Container>
      </StoreProvider>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export default App;
