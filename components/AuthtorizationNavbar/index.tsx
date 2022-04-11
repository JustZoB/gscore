import React from "react";
import styled from "styled-components";
import { AuthtorizationNavbarItem } from "./AuthtorizationNavbarItem";

export const AuthtorizationNavbar: React.FC = () => {
  return (
    <AuthtorizationNavbarWrap>
      <AuthtorizationNavbarContainer>
        <AuthtorizationNavbarItem>Create account</AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem>Log in</AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem>Checkout</AuthtorizationNavbarItem>
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
