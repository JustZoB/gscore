import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Image from 'next/image';
import copy from '../../public/copy.svg';

interface TextFieldProps {
  placeholder: string;
  value: string;
  copy?: boolean;
  readOnly?: boolean;
  onChange?: (event: any) => void;
}

export const CodeTextField: React.FC<TextFieldProps> = (props) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const copyValue = () => {
    navigator.clipboard.writeText(props.value)
    setShowMessage(true)
    setTimeout(function () {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <TextFieldContainer>
      <TextField {...props} />
      {props.copy &&
        <CopyButtonContainer>
          <CopyButton onClick={copyValue}>
            <Image
              src={copy}
              alt='Copy'
              layout="fixed"
            />
          </CopyButton>
          <CopiedMessageContainer showMessage={showMessage}>
            <CopiedMessage>Copied!</CopiedMessage>
          </CopiedMessageContainer>
        </CopyButtonContainer>
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

const CopyButtonContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`

const CopyButton = styled.div`
  cursor: pointer;
`

interface CopiedProps {
  showMessage: boolean;
}

const CopiedMessageContainer = styled.div<CopiedProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -40px;
  right: 50%;
  transform: translateX(50%);
  width: 70px;
  height: 30px;
  background-color: ${colors.gray};
  border-radius: 4px;
  opacity: ${(props) => (props.showMessage ? 1 : 0)};
  transition: 0.5s;
`

const CopiedMessage = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-size: 500;
`