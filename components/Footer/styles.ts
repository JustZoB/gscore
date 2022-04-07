import styled from "styled-components";
import colors from "../../utils/colors";

export const FooterContainer = styled.footer`
  position: relative;
  border-top: 1px solid ${colors.darkGray};
  background-color: ${colors.black};
  color: ${colors.lightGray};
  padding: 60px 86px 0;
`

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.darkGray};
  margin-top: 60px;
  padding: 40px 0;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
`

export const FooterText = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-top: 24px;
  color: ${colors.lightGray};
`
