import { Button } from "../../components/Button";
import { CheckoutTotalContainer, CheckoutTotalText } from "./styles";
import { H2 } from "../../components/Titles";
import {
  TableBlockContainer,
  TableBlockContent,
  TableBlockContentItem,
  TableBlockContentText,
  TableBlockHeader,
  TableBlockHeaderText
} from "../../components/TableBlock/styles";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuy } from "../../store/payment/actions";
import { AuthtorizationNavbar } from "../../components/AuthtorizationNavbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Wrap } from "../../components/Containers";

export default function Checkout() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const payment = useSelector((state: RootState) => state.paymentSlice);
  const dispatch = useDispatch();
  const router = useRouter();

  const onPurchase = () => {
    const onSuccesfulCheckout = () => {
      router.push('/start-your-subscription')
    }

    dispatch(fetchBuy({
      priceId: payment.price.id,
      callBack: onSuccesfulCheckout,
    }))
  }

  useEffect(() => {
    if (authorization.loading !== 'loading' && !authorization.user) router.push('/authorization/sign-up')
  }, [authorization, router])

  return (
    <>
      <AuthtorizationNavbar />
      <Wrap>
        <Container>
          <H2 textAlign="left" marginBottom={24}>Checkout</H2>
          <TableBlockContainer>
            <TableBlockHeader>
              <TableBlockHeaderText>Package name</TableBlockHeaderText>
              <TableBlockHeaderText>Price</TableBlockHeaderText>
            </TableBlockHeader>
            <TableBlockContent>
              <TableBlockContentItem>
                {payment.sitesCount &&
                  <TableBlockContentText>{payment.sitesCount} sites license</TableBlockContentText>
                }
                {payment.price &&
                  <TableBlockContentText>{payment.price.price}$</TableBlockContentText>
                }
              </TableBlockContentItem>
            </TableBlockContent>
          </TableBlockContainer>
          <CheckoutTotalContainer>
            <CheckoutTotalText>Total:</CheckoutTotalText>
              {payment.price &&
                <CheckoutTotalText>{payment.price.price}$</CheckoutTotalText>
              }
          </CheckoutTotalContainer>
          {payment.price &&
            <Button
              label="Purchase"
              theme="primary"
              onClick={onPurchase}
            />
          }
        </Container>
      </Wrap>
    </>
  )
}
