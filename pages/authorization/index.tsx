import { AuthorizationWrap } from "./styles";
import { Checkout } from "./Checkout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { AuthtorizationNavbar } from "../../components/AuthtorizationNavbar";

export default function Authorization() {
  return (
    <>
      <AuthtorizationNavbar />
      <AuthorizationWrap>
        <SignUp />
        {/* <SignIn /> */}
        {/* <Checkout /> */}
      </AuthorizationWrap>
    </>
  )
}
