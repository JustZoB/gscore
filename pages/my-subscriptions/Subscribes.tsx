import styled from "styled-components";
import { CardSubscribe } from "./CardSubscribe";
import { Subscribe } from "../../services/axios";
import { Paginations } from "../../components/Paginations";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export interface SubscribesProps {
  subscribes: Subscribe[],
}

export const Subscribes: React.FC<SubscribesProps> = ({ subscribes }) => {
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);

  return (
    <>
      <SubscribesWrap>
        <SubscribesItems
          activeElement={subscribesSlice.paginationActiveElement}
          length={subscribesSlice.paginationLength}
        >
          {subscribes.map(({
            id,
            currentPeriodStart,
            currentPeriodEnd,
            status,
            product,
          }, index) => (
            <CardSubscribeWrap key={id}>
              <CardSubscribe
                id={id}
                currentPeriodStart={currentPeriodStart}
                currentPeriodEnd={currentPeriodEnd}
                status={status}
                product={product}
                active={subscribesSlice.paginationActiveElement === index + 1}
              />
            </CardSubscribeWrap>
          ))}
        </SubscribesItems>
      </SubscribesWrap>
      <Paginations />
    </>
  )
}

const SubscribesWrap = styled.div`
  width: calc(100% + 28px);
  margin: 0 -14px;

  @media screen and (max-width: 1199.92px) {
    width: calc(100% + 20px);
    margin: 0 -10px;
  }
  @media screen and (max-width: 767.92px) {
    width: calc(100% + 12px);
    margin: 0 -6px;
  }
`

interface SubscribesItemsProps {
  activeElement: number,
  length: number,
}

const SubscribesItems = styled.div<SubscribesItemsProps>`
  display: flex;
  width: ${(props) => (`${props.length * 100 / 3}%`)};
  transform: ${(props) => (`translateX(-${100 / props.length * (props.activeElement - 1)}%)`)};
  transition: 0.5s;

  @media screen and (max-width: 1199.92px) {
    width: ${(props) => (`${props.length * 100 / 2}%`)};
  }
  @media screen and (max-width: 767.92px) {
    width: ${(props) => (`${props.length * 100}%`)};
  }

  & > * {
    width: ${(props) => (`${100 / props.length}%`)};
  }
`

const CardSubscribeWrap = styled.div`
  & > * {
    margin: 0 14px 20px;

    @media screen and (max-width: 1199.92px) {
      margin: 0 10px 20px;
    }
    @media screen and (max-width: 767.92px) {
      margin: 0 6px 20px;
    }
  }
`
