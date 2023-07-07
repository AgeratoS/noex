import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.background};

    transition: background-color .2s ease-in;

    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p, span {

    margin: 0;
    padding: 0;

    color: ${(props) => props.theme.palette.textColor};
    transition: color .2s ease-in;
  }
`;

export default GlobalStyle;
