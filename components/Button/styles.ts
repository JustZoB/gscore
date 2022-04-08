import styled from "styled-components";
import { ButtonProps } from ".";
import colors from "../../utils/colors";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (props.width != undefined ? (Number.isInteger(props.width) ? props.width + 'px' : props.width) : '100%')};
  max-width: ${(props) => (props.maxWidth != undefined ? props.maxWidth + 'px' : 'unset')};
  background-color: ${(props) => (props.backgroundColor != undefined ? props.backgroundColor : colors.lightRed)};
  color: ${(props) => (props.textColor != undefined ? props.textColor : colors.white)};
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  padding: 26px 38px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`
