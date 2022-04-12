import styled from "styled-components";
import colors from "../../utils/colors";

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
