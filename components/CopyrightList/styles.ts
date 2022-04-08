import styled from "styled-components";
import colors from "../../utils/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalFooterStyle = createGlobalStyle`
  a {
    color: ${colors.white};
  }
`

export const CopyrightListContainer = styled.ul`
  display: flex;
  flex-direction: row;
`
export const CopyrightListItem = styled.li`
  list-style-type: none;
  font-size: 18px;
  
  &:not(:last-child) {
    margin-right: 5px;
    padding-right: 5px;
    border-right: 2px solid ${colors.lightGray};
  }
`
export const CopyrightText = styled.p`
  color: ${colors.lightGray};
`
