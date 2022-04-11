import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { AuthtorizationNavbarItem } from "./AuthtorizationNavbarItem";

export const AuthtorizationNavbar: React.FC = () => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);

  return (
    <AuthtorizationNavbarWrap>
      <AuthtorizationNavbarContainer>
        <AuthtorizationNavbarItem active={authorization.nav === 'signup'}>Create account</AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem active={authorization.nav === 'signin'}>Log in</AuthtorizationNavbarItem>
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
