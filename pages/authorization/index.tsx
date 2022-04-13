import { AuthorizationWrap } from "./styles";
import { Checkout } from "./Checkout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { StartYourSubscription } from "./StartYourSubscription";
import { AuthtorizationNavbar } from "../../components/AuthtorizationNavbar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Authorization() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const payment = useSelector((state: RootState) => state.paymentSlice);

  return (
    <>
      {payment.subscribe ?
        <>
          <AuthorizationWrap>
            <StartYourSubscription />
          </AuthorizationWrap>
        </>
        :
        <>
          <AuthtorizationNavbar />
          <AuthorizationWrap>
            {authorization.user ?
              <>
                {authorization.user.token && <Checkout />}
              </>
              :
              <>
                {authorization.nav === 'signup' && <SignUp />}
                {authorization.nav === 'signin' && <SignIn />}
              </>
            }
          </AuthorizationWrap>
        </>
      }
    </>
  )
}
