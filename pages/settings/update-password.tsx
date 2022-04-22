import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { updatePasswordValidate } from "../../utils/validation";
import { H2, H3 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TextFieldError, ErrorMessage, FieldContainer, CompleteMessage } from "../../components/TextField/styles";
import { FormContainer, SettingsContainer } from "./styles";
import { fetchUpdatePassword } from "../../store/authorization/actions";
import { SettingsNavbar } from "./SettingsNavbar";

export default function UpdatePassword() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const CURRENT_PASSWORD_FIELD = 'currentPassword';
  const NEW_PASSWORD_FIELD = 'newPassword';

  const onUpdatePassword = (values: { currentPassword: string, newPassword: string }) => {
    dispatch(fetchUpdatePassword({
      currentPassword: values.currentPassword,
      newPassword: values.newPassword
    }))
  }

  return (
    <SettingsContainer>
      <H2 textAlign="left" marginBottom={48}>Settings</H2>
      <SettingsNavbar />
      <FormContainer>
        <Form
          onSubmit={onUpdatePassword}
          validate={updatePasswordValidate}
          render={({ handleSubmit }) => (
            <>
              <H3 textAlign="left" marginBottom={24}>Change password</H3>
              <FieldContainer>
                <Field
                  name={CURRENT_PASSWORD_FIELD}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        errors={meta.error}
                        type='password'
                        placeholder='Current Password'
                      />
                      {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                    </>
                  )}
                />
              </FieldContainer>
              <FieldContainer>
                <Field
                  name={NEW_PASSWORD_FIELD}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        errors={meta.error}
                        type='password'
                        placeholder='New Password'
                      />
                      {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                    </>
                  )}
                />
              </FieldContainer>

              {authorization.error &&
                <>
                  {authorization.error.message === "Request failed with status code 400"
                    ? <ErrorMessage>Incorrect email or password</ErrorMessage>
                    : <ErrorMessage>{authorization.error.message}</ErrorMessage>
                  }
                </>
              }

              {authorization.complete &&
                <CompleteMessage>{authorization.complete}</CompleteMessage>
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
    </SettingsContainer>
  )
}
