import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Product } from "../../services/axios";
import { setPayment } from "../../store/payment/reducers";
import colors from "../../utils/colors";
import { Button } from "../Button";
import { H1, H3 } from "../Titles";
import { CardBuyList } from "./CardBuyList";

export const CardBuy: React.FC<Product> = ({ id, sitesCount, name, prices }) => {
  const dispatch = useDispatch();

  const onChoose = () => {
    dispatch(setPayment({ sitesCount, price: prices[0] }))
  }
  return (
    <CardBuyContainer>
      <H1 marginBottom={0}>{prices[0].price}$</H1>
      <H3 marginBottom={8}>{name}</H3>
      <CardBuyText>
        Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
      </CardBuyText>
      <CardBuyList isEven={id % 2 === 1} sitesCount={sitesCount} />
      <Link href="/authorization/sign-up" passHref>
        <a>
          <Button
            label="Get Gscore"
            theme="secondary"
            size="big"
            onClick={onChoose}
          />
        </a>
      </Link>
    </CardBuyContainer>
  )
}

export interface CardBuyItemProps {
  isEven: boolean,
}

export const CardBuyContainer = styled.div`
  height: fit-content;
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  padding: 42px 48px;
  border: 0;
  border-radius: 12px;
`

export const CardBuyText = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-top: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${colors.white};
  margin-bottom: 40px;
`
