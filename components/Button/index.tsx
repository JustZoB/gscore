import React from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  label: string;
  width?: 'fit-content' | 'max-content'  | 'min-content' | number;
  maxWidth?: string | number | undefined;
  textColor?: string;
  backgroundColor?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.label}
    </StyledButton>
  )
}
