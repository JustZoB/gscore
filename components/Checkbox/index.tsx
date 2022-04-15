import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Image from 'next/image';
import check from '../../public/check.svg';

interface CheckboxProps {
  checked: boolean;
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <CheckboxContainer>
      <CheckboxInput type='checkbox' {...props} />
      <CustomCheckbox checked={props.checked} />
      {props.checked &&
        <Image
          src={check}
          alt='Check'
          layout="fixed"
        />
      }
    </CheckboxContainer>
  )
}

const CheckboxContainer  = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`

const CheckboxInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

interface CustomCheckboxProps {
  checked: boolean;
}

const CustomCheckbox = styled.span<CustomCheckboxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28px;
  height: 28px;
  border: 1px solid ${(props) => (props.checked ? 'transparent' : colors.lightGray)};
  background-color: ${(props) => (props.checked ? colors.red : colors.white)};
  transform: translate(-50%, -50%);
  border-radius: 7px;
  cursor: pointer;
`
