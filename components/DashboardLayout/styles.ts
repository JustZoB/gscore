import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  color: ${colors.white};
  min-height: 100vh;
`
export const ContentContainer = styled.main`
  position: relative;
  background-color: ${colors.black};
  color: ${colors.lightGray};
  padding: 20px 86px;
`
