import axios, { Subscribe } from "../../services/axios";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { H1 } from "../../components/Titles";
import { Subscribes } from "./Subscribes";
import { Codes } from "./Codes";
import { NoActive } from "./NoActive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetSubscribes } from "../../store/subscribes/actions";
import { RootState } from "../../store/store";
import { Loader } from "../../components/Loader";

export default function MySubscriptions() {
  const dispatch = useDispatch();
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);

  useEffect(() => {
    dispatch(fetchGetSubscribes())
  }, [dispatch])

  return (
    <MySubscriptionsContainer>
      <MySubscriptionsHeader>
        <H1 textAlign="left" marginBottom={0}>My subscriptions</H1>
        {subscribesSlice.subscribes && subscribesSlice.loading !== 'loading' &&
          <Button
            label="Upgrade"
            theme="primary"
          />
        }
      </MySubscriptionsHeader>
      {subscribesSlice.loading === 'loading'
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
`
