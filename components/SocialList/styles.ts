import styled from "styled-components";
import colors from "../../utils/colors";

export const SocialListContainer = styled.ul`
  display: flex;
  flex-direction: row;
`
export const SocialItem = styled.li`
  list-style-type: none;
  
  &:not(:last-child) {
    margin-right: 20px;
  }
`
