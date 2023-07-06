import { ThemeProvider, createGlobalStyle } from "styled-components";
import router from "./core/routing";
import { RouterProvider } from "react-router-dom";
import useTheme from "./core/hooks/useTheme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.background};

    transition: background-color .2s ease-in;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    color: ${(props) => props.theme.palette.textColor};

    transition: color .2s ease-in;
  }
`;

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
