import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { changePersonalDataValidate } from "../../utils/validation";
import { H2, H3 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TextFieldError, ErrorMessage, FieldContainer, CompleteMessage } from "../../components/TextField/styles";
import { FormContainer, SettingsContainer } from "./styles";
import { fetchUpdatePersonalData } from "../../store/authorization/actions";
import { SettingsNavbar } from "./SettingsNavbar";

export default function UpdateDataForm() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const USERNAME_FIELD = 'username';
  const EMAIL_FIELD = 'email';

  const onChangePersonalData = (values: { username: string, email: string, }) => {
    dispatch(fetchUpdatePersonalData({
      email: values.email,
      username: values.username
    }))
  }

  return (
    <SettingsContainer>
      <H2 textAlign="left" marginBottom={48}>Settings</H2>
      <SettingsNavbar />
      <FormContainer>
        <Form
          onSubmit={onChangePersonalData}
          validate={changePersonalDataValidate}
          render={({ handleSubmit }) => (
            <>
              <H3 textAlign="left" marginBottom={24}>Personal Info</H3>
              <FieldContainer>
                <Field
                  name={USERNAME_FIELD}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        errors={meta.error}
                        type='username'
                        placeholder='Username'
                      />
                      {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                    </>
                  )}
                />
              </FieldContainer>
              <FieldContainer>
                <Field
                  name={EMAIL_FIELD}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        errors={meta.error}
                        type='email'
                        placeholder='Email'
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
                label="Update personal data"
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
