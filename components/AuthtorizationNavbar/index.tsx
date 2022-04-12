import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setNav } from "../../store/authorization/reducers";
import { RootState } from "../../store/store";
import { AuthtorizationNavbarItem } from "./AuthtorizationNavbarItem";

export const AuthtorizationNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: RootState) => state.authorizationSlice);

  const navigateToSignIn: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!authorization.user) {
      dispatch(setNav('signin'))
    }
  }
  const navigateToSignUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!authorization.user) {
      dispatch(setNav('signup'))
    }
  }

  return (
    <AuthtorizationNavbarWrap>
      <AuthtorizationNavbarContainer>
        <AuthtorizationNavbarItem
          onClick={navigateToSignUp}
          active={authorization.nav === 'signup'}
        >
          Create account
        </AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem
          onClick={navigateToSignIn}
          active={authorization.nav === 'signin'}
        >
          Log in
        </AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem active={authorization.nav === 'checkout'}>Checkout</AuthtorizationNavbarItem>
      </AuthtorizationNavbarContainer>
    </AuthtorizationNavbarWrap>
  )
}

export const AuthtorizationNavbarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const AuthtorizationNavbarContainer = styled.div`
  display: flex;
  width: 620px;
  margin-bottom: 64px;
`
