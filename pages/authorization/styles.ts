import styled from "styled-components";
import colors from "../../utils/colors";

export const AuthorizationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const AuthorizationContainer = styled.div`
  position: relative;
  width: 620px;
  justify-self: center;
`
export const HaveAnAccountContainer = styled.div`
  display: flex;
  margin-top: 48px;
`

export interface AuthorizationTextProps {
  fontSize?: number;
}

export const AuthorizationText = styled.p<AuthorizationTextProps>`
  font-size: ${(props) => (props.fontSize != undefined ? props.fontSize : '14px')};
  line-height: 18px;
  margin-bottom: 32px;
  color: ${colors.white};
`
export const AuthorizationLink = styled.a`
  font-size: 16px;
  line-height: 18px;
  margin-left: 8px;
  color: ${colors.lightRed};
  cursor: pointer;
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

export const CheckoutTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`

export const CheckoutTotalText = styled.p`
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
  color: ${colors.white};
`
