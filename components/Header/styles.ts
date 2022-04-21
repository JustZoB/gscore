import styled from "styled-components";
import colors from "../../utils/colors";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 86px;

  @media screen and (max-width: 1199.92px) {
    padding: 32px 60px;
  }
  @media screen and (max-width: 991.92px) {
    padding: 32px 40px;
  }
  @media screen and (max-width: 767.92px) {
    padding: 24px 32px;
  }
  @media screen and (max-width: 575.92px) {
    padding: 16px;
  }
`

export const LogoWrapper = styled.div`
  width: 171px;
  height: 42px;

  @media screen and (max-width: 991.92px) {
    width: 150px;
    height: 37px;
  }
  @media screen and (max-width: 767.92px) {
    width: 130px;
    height: 32px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767.92px) {
    display: none;
  }

  & > *:not(:last-child) {
    margin-right: 32px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > *:not(:first-child) {
    margin-left: 12px;
  }
`

export const LinkText = styled.p`
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: ${colors.white};
  text-decoration: none;
`

export const DropDownButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`

export const DropDownMenu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  border-radius: 12px;
  background-color: ${colors.darkerGray};
  cursor: default;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`
