import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import useTheme from "./core/hooks/useTheme";
import { GlobalStyle } from "./core/theming";
import AnimatedRouting from "./core/routing";


function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AnimatedRouting />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
