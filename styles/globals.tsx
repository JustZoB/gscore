import { createGlobalStyle } from "styled-components";
import colors from "../utils/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`
