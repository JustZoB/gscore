import styled from "styled-components";
import colors from "../../utils/colors";

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
  color: ${colors.white};
`

export const AuthorizationLink = styled.a`
  font-size: 16px;
  line-height: 18px;
  margin-left: 8px;
  color: ${colors.lightRed};
  cursor: pointer;
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
