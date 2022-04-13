import Link from "next/link";
import { Button } from "../../components/Button";
import { AuthorizationContainer, } from "./styles";
import { H2 } from "../../components/Titles";
import { TableBlockContainer, TableBlockContent, TableBlockContentItem, TableBlockContentText, TableBlockHeader, TableBlockHeaderText } from "../../components/TableBlock/styles";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux"
import { clearSubscribe } from "../../store/payment/reducers";

export const StartYourSubscription: React.FC = () => {
  const payment = useSelector((state: RootState) => state.paymentSlice);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearSubscribe())
  }

  return (
    <AuthorizationContainer>
      <H2 textAlign="left" marginBottom={16}>Start your subscription</H2>
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
      <Link href="/my-subscriptions" passHref>
        <a>
          <Button
            label="Go to my subscriptions"
            theme="primary"
            size="big"
            onClick={handleClick}
          />
        </a>
      </Link>
        
    </AuthorizationContainer>
  )
}
