import axios, { Subscribe } from "../../services/axios";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { H1 } from "../../components/Titles";
import { Subscribes } from "./Subscribes";
import { Codes } from "./Codes";
import { NoActive } from "./NoActive";

// export async function getServerSideProps() {
//   const response = await axios.get<Subscribe[]>(`/subscribe/self`);

//   return { props: { subscribes: response.data } }
// }

export default function MySubscriptions({ subscribes }) {
  return (
    <MySubscriptionsContainer>
      <MySubscriptionsHeader>
        <H1 textAlign="left" marginBottom={24}>My subscriptions</H1>
        {subscribes &&
          <Button
            label="Upgrade"
            theme="primary"
          />
        }
      </MySubscriptionsHeader>
      {subscribes ?
        <>
          <Subscribes subscribes={subscribes} />
          <Codes subscribes={subscribes} />
        </>
        :
        <NoActive />
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
  margin-bottom: 48px;
`
