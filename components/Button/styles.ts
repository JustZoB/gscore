import styled from "styled-components";
import { ButtonProps } from ".";
import colors from "../../utils/colors";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (props.size === 'big' ? '100%' : 'fit-content')};
  height: fit-content;
  background-color: ${(props) => (props.theme !== 'primary' ? colors.white : colors.lightRed)};
  color: ${(props) => (props.theme !== 'primary' ? colors.lightRed : colors.white)};
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  padding: 20px 38px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme !== 'primary' ? colors.white : colors.darkRed)};
    color: ${(props) => (props.theme !== 'primary' ? colors.darkRed : colors.white)};
  }
`
