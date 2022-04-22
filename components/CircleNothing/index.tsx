import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export const CircleNothing: React.FC = () => {
  return (
    <CircleContainer>
      <XMark>
        <LeftLine />
        <RightLine />
      </XMark>
    </CircleContainer>
  )
}

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border-radius: 100%;
  background-color: ${colors.darkGray};
  margin-bottom: 24px;
`

const XMark = styled.div`
  position: relative;
`

const LeftLine = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transform: translate(-50%, -50%) rotate(45deg);
`

const RightLine = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transform: translate(-50%, -50%) rotate(-45deg);
`
