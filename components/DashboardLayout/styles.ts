import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.black};
  color: ${colors.white};
  min-height: 100vh;
`
export const ContentContainer = styled.main`
  position: relative;
  flex: 1;
  background-color: ${colors.black};
  color: ${colors.lightGray};
  padding: 20px 86px;

  @media screen and (max-width: 1199.92px) {
    padding: 20px 60px;
  }
  @media screen and (max-width: 991.92px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 767.92px) {
    padding: 20px 32px;
  }
  @media screen and (max-width: 575.92px) {
    padding: 20px 16px;
  }
`
