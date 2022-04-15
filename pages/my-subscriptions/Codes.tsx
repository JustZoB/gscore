import { useSelector } from "react-redux";
import styled from "styled-components";
import { Code } from "../../components/Code";
import { Subscribe } from "../../services/axios";
import { RootState } from "../../store/store";

export interface CodesProps {
  subscribes: Subscribe[],
}

export const Codes: React.FC<CodesProps> = ({ subscribes }) => {
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);

  return (
    <CodesContainer>
      {subscribes.map(({ codes }, index ) => (
        <>
        {index + 1 === subscribesSlice.paginationActiveElement &&
          codes.map(({ id, code, origin, status}) => (
            <Code
              key={id}
              id={id}
              code={code}
              origin={origin}
              status={status}
            />
          ))
        }
        </>
      ))}
    </CodesContainer>
  )
}

const CodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`
