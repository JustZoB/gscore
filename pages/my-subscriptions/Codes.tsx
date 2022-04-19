import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Code } from "../../components/Code";
import { ErrorMessage } from "../../components/TextField/styles";
import { Subscribe } from "../../services/axios";
import { RootState } from "../../store/store";
import { fetchManageHoldingCodes } from "../../store/subscribes/actions";
import CodeStatus from "../../utils/codeStatus";
import colors from "../../utils/colors";

export interface CodesProps {
  subscribes: Subscribe[],
}

export const Codes: React.FC<CodesProps> = ({ subscribes }) => {
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(fetchManageHoldingCodes({
      codesIds: subscribesSlice.keepHoldingCodesIds,
      subscribeId: subscribesSlice.keepHoldingSubscribeId,
    }));
  }

  return (
    <>
      {subscribes.map(({ id, codes, product }, index ) => (
        <span key={id}>
          <CodesContainer>
            {index + 1 === subscribesSlice.paginationActiveElement &&
              codes.map(({ id, code, origin, status, subscribeId }) => (
                <Code
                  key={id}
                  id={id}
                  subscribeId={subscribeId}
                  code={code}
                  origin={origin}
                  status={status}
                />
              ))
            }
          </CodesContainer>
          {codes[0].status === CodeStatus.HOLD &&
            <>
              <KeepFormContainer>
                <KeepFormText>Select the domains you want to keep</KeepFormText>
                <Button
                  label="Сonfirm"
                  theme="primary"
                  onClick={onConfirm}
                />
              </KeepFormContainer>
              {subscribesSlice.error &&
                <>
                  {subscribesSlice.error.message === "Request failed with status code 400"
                    ? <ErrorMessage>You need to select exactly {product.sitesCount} code(s)</ErrorMessage>
                    : <ErrorMessage>{subscribesSlice.error.message}</ErrorMessage>
                  }
                </>
              }
            </>
          }
        </span>
      ))}
    </>
  )
}

const CodesContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`

const KeepFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`

const KeepFormText = styled.p`
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  color: ${colors.white}
`
