import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { updatePasswordValidate } from "../../utils/validation";
import { H3 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TextFieldError, ErrorMessage } from "../../components/TextField/styles";
import { FormContainer } from "./styles";

export const UpdatePassword: React.FC = () => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const CURRENT_PASSWORD_FIELD = 'currentPassword';
  const NEW_PASSWORD_FIELD = 'newPassword';

  const onUpdatePassword = (values: { currentPassword: string, newPassword: string }) => {
    console.log(values.currentPassword, values.newPassword)
  }

  return (
    <FormContainer>
      <Form
        onSubmit={onUpdatePassword}
        validate={updatePasswordValidate}
        render={({ handleSubmit }) => (
          <>
            <H3 textAlign="left" marginBottom={24}>Change password</H3>
            <Field
              name={CURRENT_PASSWORD_FIELD}
              render={({ input, meta }) => (
                <>
                  <TextField
                    {...input}
                    type='password'
                    placeholder='Current Password'
                  />
                  {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                </>
              )}
            />
            <Field
              name={NEW_PASSWORD_FIELD}
              render={({ input, meta }) => (
                <>
                  <TextField
                    {...input}
                    type='password'
                    placeholder='New Password'
                  />
                  {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                </>
              )}
            />

            {authorization.error &&
              <>
                {authorization.error.message === "Request failed with status code 400"
                  ? <ErrorMessage>Incorrect email or password</ErrorMessage>
                  : <ErrorMessage>{authorization.error.message}</ErrorMessage>
                }
              </>
            }

            <Button
              label="Update password"
              theme="primary"
              onClick={handleSubmit}
            />
          </>
        )}
      />
    </FormContainer>
  )
}
