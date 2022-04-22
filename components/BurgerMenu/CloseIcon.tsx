import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export interface CloseIconProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <CloseIconContainer onClick={onClick}>
      <CloseIconLine />
      <CloseIconLine />
    </CloseIconContainer>
  )
}

const CloseIconContainer = styled.div`
  position: relative;
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;

  & > *:first-child {
    transform: translateY(-50%) rotate(45deg);
  }

  & > *:last-child {
    transform: translateY(-50%) rotate(-45deg);
  }
`

const CloseIconLine = styled.span`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${colors.white};
`
