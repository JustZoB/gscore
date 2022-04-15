import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Image from 'next/image';
import copy from '../../public/copy.svg';

interface TextFieldProps {
  placeholder: string;
  value: string;
  copy?: boolean;
}

export const CodeTextField: React.FC<TextFieldProps> = (props) => {
  const copyValue = () => {
    navigator.clipboard.writeText(props.value)
  }

  return (
    <TextFieldContainer>
      <TextField {...props} readOnly />
      {props.copy &&
        <CopyButton onClick={copyValue}>
          <Image
            src={copy}
            alt='Copy'
            layout="fixed"
          />
        </CopyButton>
      }
    </TextFieldContainer>
  )
}

const TextFieldContainer  = styled.div`
  position: relative;
  width: 100%;
`

const TextField = styled.input<TextFieldProps>`
  width: ${(props) => (props.copy ? 'calc(100% - 85px)' : 'calc(100% - 50px)')};
  font-size: 16px;
  line-height: 18px;
  padding: ${(props) => (props.copy ? '25px 50px 25px 25px' : '25px')};
  color: ${colors.gray};
  background-color: ${colors.darkGray};
  border-radius: 6px;
  border: 0;
`

const CopyButton = styled.div`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
