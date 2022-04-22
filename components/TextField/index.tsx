import React from "react";
import { Input } from "./styles";

export interface TextFieldProps {
  placeholder: string;
  name: string;
  onBlur: (event?: React.FocusEvent<HTMLElement, Element>) => void;
  onChange: (event: any) => void;
  onFocus: (event?: React.FocusEvent<HTMLElement, Element>) => void;
  type?: string;
  value: any;
  checked?: boolean;
  multiple?: boolean;
  errors: Object | undefined;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <Input
      {...props}
    />
  )
}
