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

  @media screen and (max-width: 1199.92px) {
    font-size: 44px;
    line-height: 54px;
  }
  @media screen and (max-width: 991.92px) {
    font-size: 38px;
    line-height: 44px;
  }
  @media screen and (max-width: 767.92px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media screen and (max-width: 575.92px) {
    font-size: 24px;
    line-height: 26px;
  }
`
export const StyledH2 = styled.h2<TitleProps>`
  font-size: 44px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom != undefined ? props.marginBottom + 'px' : '40px')};
  color: ${colors.white};
  text-align: ${(props) => (props.textAlign != undefined ? props.textAlign : 'center')};

  @media screen and (max-width: 1199.92px) {
    font-size: 38px;
    line-height: 44px;
  }
  @media screen and (max-width: 991.92px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media screen and (max-width: 575.92px) {
    font-size: 24px;
    line-height: 26px;
  }
`
export const StyledH3 = styled.h3<TitleProps>`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom != undefined ? props.marginBottom + 'px' : '24px')};
  color: ${colors.white};
  text-align: ${(props) => (props.textAlign != undefined ? props.textAlign : 'center')};

  @media screen and (max-width: 1199.92px) {
    font-size: 22px;
    line-height: 24px;
  }
  @media screen and (max-width: 991.92px) {
    font-size: 20px;
    line-height: 22px;
  }
  @media screen and (max-width: 575.92px) {
    font-size: 18px;
    line-height: 20px;
  }
`
