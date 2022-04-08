import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Image from 'next/image';
import checkBlack from '../../public/checkCircleBlack.svg';
import checkRed from '../../public/checkCircleRed.svg';

export interface CardBuyItemProps {
  backgroundColor?: string;
}

export const CardBuyItem: React.FC<CardBuyItemProps> = ({ children, backgroundColor }) => {
  return (
    <StyledCardBuyItem>
      <Image
        src={backgroundColor != undefined ? checkRed : checkBlack}
        alt='check'
        layout="fixed"
      />
      <CardBuyText>
        {children}
      </CardBuyText>
    </StyledCardBuyItem>
  )
}

export const CardBuyList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`

export const StyledCardBuyItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 22px;
  }
`

export const CardBuyText = styled.p`
  margin-left: 14px;
  font-size: 18px;
  line-height: 20px;
  color: ${colors.white};
`
