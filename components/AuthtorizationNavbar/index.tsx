import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { AuthtorizationNavbarItem } from "./AuthtorizationNavbarItem";

export const AuthtorizationNavbar: React.FC = () => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const router = useRouter();

  return (
    <AuthtorizationNavbarWrap>
      <AuthtorizationNavbarContainer>
        <AuthtorizationNavbarItem active={true}>
          {authorization.user
            ? <>Create account</>
            : <Link href="/authorization/sign-up">Create account</Link>
          }
        </AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem active={router.route === '/authorization/sign-in' || router.route === '/authorization/checkout'}>
          {authorization.user
            ? <>Log in</>
            : <Link href="/authorization/sign-in">Log in</Link>
          }
        </AuthtorizationNavbarItem>
        <AuthtorizationNavbarItem active={router.route === '/authorization/checkout'}>
          Checkout
        </AuthtorizationNavbarItem>
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
