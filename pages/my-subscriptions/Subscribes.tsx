import { CardSubscribe } from "./CardSubscribe";
import { Subscribe } from "../../services/axios";

export interface SubscribesProps {
  subscribes: Subscribe[],
}

export const Subscribes: React.FC<SubscribesProps> = ({ subscribes }) => {
  return (
    <>
      {subscribes.map(({
        id,
        currentPeriodStart,
        currentPeriodEnd,
        status,
        product,
      }) => (
        <CardSubscribe
          key={id}
          id={id}
          currentPeriodStart={currentPeriodStart}
          currentPeriodEnd={currentPeriodEnd}
          status={status}
          product={product}
        />
      ))}
    </>
  )
}
