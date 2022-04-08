import { Button } from "../../components/Button";
import { AuthorizationContainer, CheckoutTotalContainer, CheckoutTotalText, TextFieldError } from "./styles";
import { H2 } from "../../components/Titles";
import { TableBlockContainer, TableBlockContent, TableBlockContentItem, TableBlockContentText, TableBlockHeader, TableBlockHeaderText } from "../../components/TableBlock/styles";

export const Checkout: React.FC = () => {
  const onSignIn = (values: { email: string, password: string }) => {
    console.log(values)
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
            <TableBlockContentText>Single site license</TableBlockContentText>
            <TableBlockContentText>$77</TableBlockContentText>
          </TableBlockContentItem>
        </TableBlockContent>
      </TableBlockContainer>
      <CheckoutTotalContainer>
        <CheckoutTotalText>Total:</CheckoutTotalText>
        <CheckoutTotalText>77$</CheckoutTotalText>
      </CheckoutTotalContainer>
      <Button
        label="Purchase"
        width={'fit-content'}
      />
    </AuthorizationContainer>
  )
}
