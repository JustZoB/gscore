import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export interface BurgerIconProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({ onClick }) => {
  return (
    <BurgerIconContainer onClick={onClick}>
      <BurgerIconLine />
      <BurgerIconLine />
      <BurgerIconLine />
    </BurgerIconContainer>
  )
}

const BurgerIconContainer = styled.div`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 18px;
  height: 18px;
  cursor: pointer;

  @media screen and (max-width: 767.92px) {
    display: flex;
  }
`

const BurgerIconLine = styled.span`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${colors.white};
`
