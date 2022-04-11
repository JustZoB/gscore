import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export interface ItemProps {
  active: boolean;
}

export const AuthtorizationNavbarItem: React.FC = ({ children }) => {
  return (
    <ItemContainer active={false} >
      <ItemText>{children}</ItemText>
      <ItemLine active={false} />
    </ItemContainer>
  )
}

export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 10px);

  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const ItemText = styled.p`
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${colors.white};
`

export const ItemLine = styled.span<ItemProps>`
  width: 100%;
  height: 8px;
  background-color: ${(props) => (props.active ? colors.lightRed : colors.darkGray)};
  border-radius: 4px;
`
