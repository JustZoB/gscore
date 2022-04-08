import React from "react";
import { Input } from "./styles";

interface TextFieldProps {
  type?: 'text' | 'password' | 'email' | 'search' | undefined;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <Input
      {...props}
    />
  )
}
