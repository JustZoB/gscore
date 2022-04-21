import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export interface ItemProps {
  active: boolean;
}

export const AuthtorizationNavbarItem: React.FC<ItemProps> = ({ children, active }) => {
  return (
    <ItemContainer active={active}>
      <ItemText>{children}</ItemText>
      <ItemLine active={active} />
    </ItemContainer>
  )
}

export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
  cursor: ${(props) => (!props.active && props.onClick ? 'pointer' : 'defualt')};

  @media screen and (max-width: 575.92px) {
    width: 100%;
  }
`

export const ItemText = styled.p`
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${colors.white};

  @media screen and (max-width: 575.92px) {
    text-align: center;
    margin-bottom: 10px;
  }
`

export const ItemLine = styled.span<ItemProps>`
  width: 100%;
  height: 8px;
  background-color: ${(props) => (props.active ? colors.lightRed : colors.darkGray)};
  border-radius: 4px;
`
