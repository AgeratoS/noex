import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./core/routing";
import useTheme from "./core/hooks/useTheme";
import { GlobalStyle } from "./core/theming";

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
