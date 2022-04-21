import styled from "styled-components";
import { TextFieldProps } from ".";
import colors from "../../utils/colors";

export const FieldContainer = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media screen and (max-width: 767.92px) {
    margin-bottom: 16px;
  }
`

export const Input = styled.input<TextFieldProps>`
  width: calc(100% - 52px);
  font-size: 16px;
  line-height: 18px;
  padding: 25px;
  color: ${colors.darkGray};
  background-color: ${colors.white};
  border: 1px solid ${(props) => (props.errors !== undefined ? colors.lightRed : colors.green)};
  border-radius: 6px;

  @media screen and (max-width: 767.92px) {
    width: calc(100% - 42px);
    padding: 15px 20px;
  }

  &:disabled {
    background-color: ${colors.lightGray};
  }
`

export const TextFieldError = styled.span`
  position: absolute;
  right: 26px;
  top: 26px;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.lightRed};
`

export const ErrorMessage = styled.p`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 30px;
  color: ${colors.lightRed};
`

export const CompleteMessage = styled.p`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 30px;
  color: ${colors.green};
`
