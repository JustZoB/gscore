import styled from "styled-components";
import colors from "../../utils/colors";

export const CopyrightListContainer = styled.ul`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767.92px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const CopyrightListItem = styled.li`
  list-style-type: none;
  
  &:not(:last-child) {
    margin-right: 5px;
    padding-right: 5px;
    border-right: 2px solid ${colors.lightGray};
  }
`

export const CopyrightText = styled.p`
  color: ${colors.lightGray};
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  font-family: Inter;
`

export const CopyrightLink = styled.a`
  color: ${colors.white};
  font-size: 18px;
  line-height: 30px;
  text-decoration: underline;
  font-family: Inter;
  font-weight: 500;
`
