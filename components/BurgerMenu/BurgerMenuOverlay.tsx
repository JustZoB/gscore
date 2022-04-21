import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

export interface BurgerMenuOverlayProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BurgerMenuOverlay: React.FC<BurgerMenuOverlayProps> = ({ onClick, children }) => {
  const burgerMenuSlice = useSelector((state: RootState) => state.burgerMenuSlice);

  return (
    <BurgerMenuOverlayContainer active={burgerMenuSlice.isBurgerMenuShown} onClick={onClick}>
      {children}
    </BurgerMenuOverlayContainer>
  )
}

interface BurgerMenuOverlayContainerProps {
  active: boolean;
}

const BurgerMenuOverlayContainer = styled.div<BurgerMenuOverlayContainerProps>`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.active ? '1' : '0')};
  transform: ${(props) => (props.active ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)')};
  transition: opacity 0.3s ease 0s;

  @media screen and (max-width: 767.92px) {
    display: block;
  }
`
