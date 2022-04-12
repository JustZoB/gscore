import { Button } from "../components/Button";
import { CardBuy } from "../components/CardBuy";
import { TextField } from "../components/TextField";
import Link from 'next/link'
import { H1, H2, H3 } from "../components/Titles";
import styled from "styled-components";
import colors from '../utils/colors';
import { CardBuyItem, CardBuyList } from "../components/CardBuy/CardBuyList";

export default function Home() {
  return (
    <div>
      <H2>Get started with Gscore today!</H2>

      <Cards>
        <CardBuy marginTop={50}>
          <H1 marginBottom={0}>$77</H1>
          <H3 marginBottom={8}>Single site license</H3>
          <CardBuyText textColor={colors.lightGray}>
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </CardBuyText>
          <CardBuyList>
            <CardBuyItem>
              Single site license
            </CardBuyItem>
            <CardBuyItem>
              Special introductory pricing
            </CardBuyItem>
            <CardBuyItem>
              Unlimited Pages and Keywords
            </CardBuyItem>
            <CardBuyItem>
              Billed annually
            </CardBuyItem>
          </CardBuyList>
          <Link href="/authorization" passHref>
            <a>
              <Button
                label="Get Gscore"
                theme="secondary"
                size="big"
              />
            </a>
          </Link>
        </CardBuy>
        <CardBuy backgroundColor={colors.lightRed}>
          <H1 marginBottom={0}>$117</H1>
          <H3 marginBottom={8}>3 Site license</H3>
          <CardBuyText>
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </CardBuyText>
          <CardBuyList>
            <CardBuyItem backgroundColor={colors.lightRed}>
              All features for 3 sites
            </CardBuyItem>
            <CardBuyItem backgroundColor={colors.lightRed}>
              Special introductory pricing
            </CardBuyItem>
            <CardBuyItem backgroundColor={colors.lightRed}>
              Unlimited Pages and Keywords
            </CardBuyItem>
            <CardBuyItem backgroundColor={colors.lightRed}>
              Billed annually
            </CardBuyItem>
          </CardBuyList>
          <Link href="/authorization" passHref>
            <a>
              <Button
                label="Get Gscore"
                theme="secondary"
                size="big"
              />
            </a>
          </Link>
        </CardBuy>
        <CardBuy marginTop={50}>
          <H1 marginBottom={0}>$167</H1>
          <H3 marginBottom={8}>10 Site license</H3>
          <CardBuyText textColor={colors.lightGray}>
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </CardBuyText>
          <CardBuyList>
            <CardBuyItem>
              All features for 10 sites
            </CardBuyItem>
            <CardBuyItem>
              Special introductory pricing
            </CardBuyItem>
            <CardBuyItem>
              Unlimited Pages and Keywords
            </CardBuyItem>
            <CardBuyItem>
              Billed annually
            </CardBuyItem>
          </CardBuyList>
          <Link href="/authorization" passHref>
            <a>
              <Button
                label="Get Gscore"
                theme="secondary"
                size="big"
              />
            </a>
          </Link>
        </CardBuy>
      </Cards>
    </div>
  )
}

export const Cards = styled.div`
  display: flex;
  width: 100%;

  & > * {
    width: calc(33% - 20px);
    max-width: 404px;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`

export interface CardBuyTextProps {
  textColor?: string;
}

export const CardBuyText = styled.p<CardBuyTextProps>`
  color: ${(props) => (props.textColor != undefined ? props.textColor : colors.white)};
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-top: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${(props) => (props.textColor != undefined ? props.textColor : colors.white)};
  margin-bottom: 40px;
`