import React from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  label: string;
  theme: 'primary' | 'secondary';
  size?: 'big';
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
