import React from "react";
import { StyledH1, StyledH2, StyledH3 } from "./styles";

export interface TitleProps {
  textAlign?: 'center' | 'unset' | 'left' | 'righr';
  marginBottom?: number;
}

export const H1: React.FC<TitleProps> = (props) => {
  return (
    <StyledH1 {...props}>
      {props.children}
    </StyledH1>
  )
}

export const H2: React.FC<TitleProps> = (props) => {
  return (
    <StyledH2 {...props}>
      {props.children}
    </StyledH2>
  )
}

export const H3: React.FC<TitleProps> = (props) => {
  return (
    <StyledH3 {...props}>
      {props.children}
    </StyledH3>
  )
}
