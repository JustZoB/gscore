import styled from "styled-components";
import { TitleProps } from ".";
import colors from "../../utils/colors";

export const StyledH1 = styled.h1<TitleProps>`
  font-size: 54px;
  line-height: 64px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom != undefined ? props.marginBottom + 'px' : '48px')};
  color: ${colors.white};
  text-align: ${(props) => (props.textAlign != undefined ? props.textAlign : 'center')};
`
export const StyledH2 = styled.h2<TitleProps>`
  font-size: 44px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom != undefined ? props.marginBottom + 'px' : '40px')};
  color: ${colors.white};
  text-align: ${(props) => (props.textAlign != undefined ? props.textAlign : 'center')};
`
export const StyledH3 = styled.h3<TitleProps>`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom != undefined ? props.marginBottom + 'px' : '24px')};
  color: ${colors.white};
  text-align: ${(props) => (props.textAlign != undefined ? props.textAlign : 'center')};
`
