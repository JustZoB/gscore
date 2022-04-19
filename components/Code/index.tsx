import React, { useState } from "react";
import { StatusText } from "./CodeStatusText";
import { CodeContainer, CodeErrorMessageContainer, CodeItem, CodeItemContent, CodeItemHeader, DomainFieldContainer } from "./styles";
import { CodeTextField } from "./CodeTextField";
import { Checkbox } from "../Checkbox";
import CodeStatus from "../../utils/codeStatus";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchActiveCode } from "../../store/subscribes/actions";
import { Field, Form } from "react-final-form";
import { RootState } from "../../store/store";
import { ErrorMessage, TextFieldError } from "../TextField/styles";
import { domainValidate } from "../../utils/validation";
import { Loader } from "../Loader";
import { addIdToKeeping, removeIdFromKeeping } from "../../store/subscribes/reducers";

export interface CodeProps {
  id: number,
  subscribeId: number,
  status: CodeStatus,
  code: string,
  origin: string | null,
}

export const Code: React.FC<CodeProps> = ({ id, status, code, origin, subscribeId }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);
  const domain = origin === null ? '' : origin;
  const DOMAIN_FIELD = 'domain';

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    isChecked ? dispatch(removeIdFromKeeping({ id })) : dispatch(addIdToKeeping({ id, subscribeId }));
  }

  const onActivateCode = (values: { domain: string }) => {
    dispatch(fetchActiveCode({
      origin: values.domain,
      code,
    }));
  }

  return (
    <CodeContainer>
      <CodeItem>
        <CodeItemHeader />
        <CodeItemContent>
          <Checkbox checked={isChecked} onChange={changeCheckbox} disabled={status !== CodeStatus.HOLD} />
        </CodeItemContent>
      </CodeItem>
      <CodeItem>
        <CodeItemHeader>License code</CodeItemHeader>
        <CodeItemContent>
          <CodeTextField placeholder="" value={code} copy={true} readOnly={true} />
        </CodeItemContent>
      </CodeItem>
      <CodeItem full>
        <CodeItemHeader>Domain</CodeItemHeader>
        <CodeItemContent>
          {status === CodeStatus.ACTIVE
          ? <CodeTextField placeholder="" value={domain} readOnly={true} />
          : <Form
              onSubmit={onActivateCode}
              validate={domainValidate}
              render={({ handleSubmit }) => (
                <>
                  <DomainFieldContainer>
                    <Field
                      name={DOMAIN_FIELD}
                      render={({ input, meta }) => (
                        <>
                          <CodeTextField {...input} placeholder="" />
                          {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                        </>
                      )}
                    />

                    {/* {subscribesSlice.error &&
                      <CodeErrorMessageContainer>
                        <ErrorMessage>{subscribesSlice.error.message}</ErrorMessage>
                      </CodeErrorMessageContainer>
                    } */}
                  </DomainFieldContainer>

                  {subscribesSlice.loading === 'loading'
                  ? <Loader />
                  : <Button
                      label="Activate"
                      theme="secondary"
                      onClick={handleSubmit}
                    />
                  }
                  {/* <Button
                    label="Activate"
                    theme="secondary"
                    onClick={handleSubmit}
                  /> */}
                </>
              )}
            />
        }
        </CodeItemContent>
      </CodeItem>
      {/* {status === CodeStatus.INACTIVE &&
        <CodeItem>
          <CodeItemHeader />
          <CodeItemContent>
            <Button
              label="Activate"
              theme="secondary"
            />
          </CodeItemContent>
        </CodeItem>
      } */}
      <CodeItem>
        <CodeItemHeader>Status</CodeItemHeader>
        <CodeItemContent>
          <StatusText status={status} />
        </CodeItemContent>
      </CodeItem>
    </CodeContainer>
  )
}
