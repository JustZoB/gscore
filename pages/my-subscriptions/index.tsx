import styled from "styled-components";
import { H1 } from "../../components/Titles";
import { Subscribes } from "./Subscribes";
import { Codes } from "./Codes";
import { NoActive } from "./NoActive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetSubscribes } from "../../store/subscribes/actions";
import { RootState } from "../../store/store";
import { Loader } from "../../components/Loader";
import { setAccessToken } from "../../services/axios";

export default function MySubscriptions() {
  const dispatch = useDispatch();
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);

  useEffect(() => {
    setAccessToken(authorization.user.token)
    dispatch(fetchGetSubscribes())
  }, [dispatch, authorization])

  return (
    <MySubscriptionsContainer>
      <MySubscriptionsHeader>
        <H1 textAlign="left" marginBottom={0}>My subscriptions</H1>
      </MySubscriptionsHeader>
      {subscribesSlice.loading === 'loading' && !subscribesSlice.subscribes
        ? <Loader />
        : <>
          {subscribesSlice.subscribes ?
            <>
              <Subscribes subscribes={subscribesSlice.subscribes} />
              <Codes subscribes={subscribesSlice.subscribes} />
            </>
            :
            <NoActive />
          }
        </>
      }
    </MySubscriptionsContainer>
  )
}

export const MySubscriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MySubscriptionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media screen and (max-width: 991.92px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 767.92px) {
    margin-bottom: 32px;
  }
`
