import Link from "next/link";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { H3 } from "../../components/Titles";
import { CircleNothing } from "../../components/CircleNothing";

export const NoActive: React.FC = () => {
  return (
    <NoActiveWrap>
      <NoActiveContainer>
        <CircleNothing />
        <H3 marginBottom={8}>No active subscriptions</H3>
        <NoActiveText>
          You can subscribe right now by clicking on the button below
        </NoActiveText>
        <Link href="/" passHref>
          <a>
            <Button
              label="Get Gscore"
              theme="primary"
            />
          </a>
        </Link>
      </NoActiveContainer>
    </NoActiveWrap>
  )
}

const NoActiveWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NoActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 380px;
`

const NoActiveText = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 32px;
`
