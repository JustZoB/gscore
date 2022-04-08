// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import { AuthorizationWrap } from "./styles";
import { Checkout } from "./Checkout";

export default function Authorization() {
  return (
    <AuthorizationWrap>
      {/* <SignUp />
      <SignIn /> */}
      <Checkout />
    </AuthorizationWrap>
  )
}
