import styled from "styled-components";
import { CardBuyProps } from ".";
import colors from "../../utils/colors";

export const StyledCardBuy = styled.div<CardBuyProps>`
  height: fit-content;
  background-color: ${(props) => (props.backgroundColor != undefined ? props.backgroundColor : colors.darkerGray)};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  padding: 42px 48px;
  border: 0;
  border-radius: 12px;
  margin-top: ${(props) => (props.marginTop != undefined ? props.marginTop + 'px' : 0)};
`
