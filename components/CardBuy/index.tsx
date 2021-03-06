import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "../../services/axios";
import { setPayment } from "../../store/payment/reducers";
import { RootState } from "../../store/store";
import { fetchUpgradeSubscribe } from "../../store/subscribes/actions";
import colors from "../../utils/colors";
import { Button } from "../Button";
import { H1, H3 } from "../Titles";
import { CardBuyList } from "./CardBuyList";

export const CardBuy: React.FC<Product> = ({ id, sitesCount, name, prices, upgrade }) => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);
  const dispatch = useDispatch();
  const router = useRouter();

  const onChoose = () => {
    dispatch(setPayment({ sitesCount, price: prices[0] }))
  }

  const onUpgrade = () => {
    const onSuccesfulUpdate = () => {
      router.push('/my-subscriptions')
    }

    dispatch(fetchUpgradeSubscribe({
      productId: id,
      subscribeId: subscribesSlice.activeIdSubscribe,
      callBack: onSuccesfulUpdate,
    }));
  }

  return (
    <CardBuyContainer>
      <H1 marginBottom={0}>{prices[0].price}$</H1>
      <H3 marginBottom={8}>{name}</H3>
      <CardBuyText>
        Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
      </CardBuyText>
      <CardBuyList isEven={id % 2 === 1} sitesCount={sitesCount} />
      {upgrade
        ? <Button
          label="Upgrade Gscore"
          theme="secondary"
          size="big"
          onClick={onUpgrade}
        />
        : <>
          {authorization.user
            ? <Link href="/authorization/checkout" passHref>
              <a>
                <Button
                  label="Get Gscore"
                  theme="secondary"
                  size="big"
                  onClick={onChoose}
                />
              </a>
            </Link>
            : <Link href="/authorization/sign-up" passHref>
              <a>
                <Button
                  label="Get Gscore"
                  theme="secondary"
                  size="big"
                  onClick={onChoose}
                />
              </a>
            </Link>
          }
        </>
      }
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

  @media screen and (max-width: 1199.92px) {
    padding: 30px 34px;
  }
  @media screen and (max-width: 767.92px) {
    padding: 20px 28px;
  }
`

export const CardBuyText = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-top: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${colors.white};
  margin-bottom: 40px;

  @media screen and (max-width: 767.92px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`
