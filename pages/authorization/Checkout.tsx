import { Button } from "../../components/Button";
import { AuthorizationContainer, CheckoutTotalContainer, CheckoutTotalText } from "./styles";
import { H2 } from "../../components/Titles";
import { TableBlockContainer, TableBlockContent, TableBlockContentItem, TableBlockContentText, TableBlockHeader, TableBlockHeaderText } from "../../components/TableBlock/styles";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuy } from "../../store/payment/actions";

export const Checkout: React.FC = () => {
  const payment = useSelector((state: RootState) => state.paymentSlice);
  const dispatch = useDispatch();

  const onPurchase = () => {
    dispatch(fetchBuy(payment.price.id))
  }

  return (
    <AuthorizationContainer>
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
    </AuthorizationContainer>
  )
}
