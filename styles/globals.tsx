import { createGlobalStyle } from "styled-components";
import colors from "../utils/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: THICCCBOI;
  }

  body {
    background-color: ${colors.black};
    overflow-x: hidden;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`
