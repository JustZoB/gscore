import styled from "styled-components";
import colors from "../../utils/colors";

export const FooterContainer = styled.footer`
  position: relative;
  border-top: 1px solid ${colors.darkGray};
  background-color: ${colors.black};
  color: ${colors.lightGray};
  padding: 60px 86px 0;
  margin-top: 40px;

  @media screen and (max-width: 1199.92px) {
    padding: 60px 60px 0;
  }
  @media screen and (max-width: 991.92px) {
    padding: 50px 40px 0;
  }
  @media screen and (max-width: 767.92px) {
    padding: 50px 32px 0;
  }
  @media screen and (max-width: 575.92px) {
    padding: 40px 16px 0;
  }
`

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.darkGray};
  margin-top: 60px;
  padding: 40px 0;

  @media screen and (max-width: 767.92px) {
    flex-direction: column;
    margin-top: 40px;
    padding: 32px 0;

    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`

export const FooterText = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-top: 24px;
  font-family: Inter;
  color: ${colors.lightGray};
`
