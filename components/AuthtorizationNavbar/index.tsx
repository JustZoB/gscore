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
        {authorization.user
          ? <AuthtorizationNavbarItem active={true}>Create account</AuthtorizationNavbarItem>
          : <Link href="/authorization/sign-up" passHref>
            <a>
              <AuthtorizationNavbarItem active={true}>Create account</AuthtorizationNavbarItem>
            </a>
          </Link>
        }
        {authorization.user
          ? <AuthtorizationNavbarItem
            active={router.route === '/authorization/sign-in' || router.route === '/authorization/checkout'}
          >
            Log in
          </AuthtorizationNavbarItem>
          : <Link href="/authorization/sign-in" passHref>
            <a>
              <AuthtorizationNavbarItem
                active={router.route === '/authorization/sign-in' || router.route === '/authorization/checkout'}
              >
                Log in
              </AuthtorizationNavbarItem>
            </a>
          </Link>
        }
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
  margin-bottom: 64px;

  @media screen and (max-width: 767.92px) {
    margin-bottom: 40px;
  }
`

export const AuthtorizationNavbarContainer = styled.div`
  display: flex;
  width: 620px;
  
  @media screen and (max-width: 575.92px) {
    flex-direction: column;
  }

  & > * {
    width: calc(33.33% - 10px);

    @media screen and (max-width: 575.92px) {
      width: 100%;
    }

    &:not(:last-child) {
      margin-right: 15px;

      @media screen and (max-width: 575.92px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
`
