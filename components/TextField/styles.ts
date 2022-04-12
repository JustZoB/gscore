import styled from "styled-components";
import colors from "../../utils/colors";

export const FieldContainer = styled.div`
  position: relative;
`

export const Input = styled.input`
  position: relative;
  width: calc(100% - 52px);
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 24px;
  padding: 25px;
  color: ${colors.darkGray};
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 6px;
`

export const TextFieldError = styled.span`
  position: absolute;
  right: 26px;
  margin-top: 26px;
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
