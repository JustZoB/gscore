import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Image from 'next/image';
import checkBlack from '../../public/checkCircleBlack.svg';
import checkRed from '../../public/checkCircleRed.svg';

export interface CardBuyListProps {
  isEven: boolean,
  sitesCount: number,
}

export interface CardBuyItemProps {
  isEven: boolean,
}

export const CardBuyList: React.FC<CardBuyListProps> = ({ isEven, sitesCount }) => {
  return (
    <CardBuyListContainer>
      <CardBuyItem isEven={isEven}>{sitesCount} sites license</CardBuyItem>
      <CardBuyItem isEven={isEven}>Special introductory pricing</CardBuyItem>
      <CardBuyItem isEven={isEven}>Unlimited Pages and Keywords</CardBuyItem>
      <CardBuyItem isEven={isEven}>Billed annually</CardBuyItem>
    </CardBuyListContainer>
  )
}

export const CardBuyItem: React.FC<CardBuyItemProps> = ({ children, isEven }) => {
  return (
    <StyledCardBuyItem>
      <Image
        src={isEven ? checkBlack : checkRed}
        alt='check'
      />
      <CardBuyText>
        {children}
      </CardBuyText>
    </StyledCardBuyItem>
  )
}

export const CardBuyListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  @media screen and (max-width: 767.92px) {
    margin-bottom: 25px;
  }
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

  @media screen and (max-width: 767.92px) {
    margin-left: 10px;
    font-size: 16px;
    line-height: 18px;
  }
`
