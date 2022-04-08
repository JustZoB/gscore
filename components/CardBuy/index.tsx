import React from "react";
import { StyledCardBuy } from "./styles";

export interface CardBuyProps {
  backgroundColor?: string;
  marginTop?: number;
}

export const CardBuy: React.FC<CardBuyProps> = (props) => {
  return (
    <StyledCardBuy {...props}>
      {props.children}
    </StyledCardBuy>
  )
}
