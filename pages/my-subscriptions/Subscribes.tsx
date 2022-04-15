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
          }, index ) => (
            <CardSubscribe
              key={id}
              id={id}
              currentPeriodStart={currentPeriodStart}
              currentPeriodEnd={currentPeriodEnd}
              status={status}
              product={product}
              active={subscribesSlice.paginationActiveElement === index + 1}
            />
          ))}
        </SubscribesItems>
      </SubscribesWrap>
      <Paginations />
    </>
  )
}

const SubscribesWrap = styled.div`
  width: 100%;
`

interface SubscribesItemsProps {
  activeElement: number,
  length: number,
}

const SubscribesItems = styled.div<SubscribesItemsProps>`
  display: flex;
  width: ${(props) => (`${props.length * 50}%`)};
  transform: ${(props) => (`translateX(-${100 / props.length * (props.activeElement - 1)}%)`)};
  transition: 0.5s;

  & > * {
    width: ${(props) => (`calc(${100 / props.length}% - ${(props.length - 1) * 28 / props.length}px)`)};

    &:not(:last-child) {
      margin-right: 28px;
    }
  }
`
