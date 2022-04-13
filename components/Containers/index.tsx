import React from "react";
import { StyledContainer, StyledWrap } from "./styles";

export const Container: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export const Wrap: React.FC = ({ children }) => {
  return (
    <StyledWrap>
      {children}
    </StyledWrap>
  )
}
