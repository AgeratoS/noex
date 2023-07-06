import { ThemeProvider } from "styled-components";
import theme from "./core/theming";
import router from "./core/routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
