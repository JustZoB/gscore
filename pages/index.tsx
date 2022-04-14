import { CardBuy } from "../components/CardBuy";
import { H2 } from "../components/Titles";
import styled from "styled-components";
import colors from '../utils/colors';
import axios, { Product } from "../services/axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearing } from "../store/authorization/reducers";

export async function getServerSideProps() {
  const response = await axios.get<Product[]>(`/products`)

  return { props: { products: response.data } }
}

export default function Home({ products }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStart = () => {
      dispatch(clearing())
    }

    router.events.on('routeChangeComplete', handleStart)
  }, [router, dispatch])

  return (
    <>
      <H2>Get started with Gscore today!</H2>
      {products && products.length !== 0 &&
        <Cards>
          {products.map(({ id, sitesCount, name, prices }) => (
            <CardBuy
              key={id}
              id={id}
              sitesCount={sitesCount}
              name={name}
              prices={prices}
            />
          ))}
        </Cards>
      }
    </>
  )
}

export const Cards = styled.div`
  display: flex;
  width: 100%;

  & > * {
    width: calc(33% - 20px);
    max-width: 404px;

    &:nth-child(2n - 1) {
      margin-top: 50px;
      color: ${colors.lightGray};
      background-color: ${colors.darkerGray};
    }

    &:nth-child(2n) {
      color: ${colors.white};
      background-color: ${colors.lightRed};
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`
