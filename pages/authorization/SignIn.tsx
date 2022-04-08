import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { signInValidate } from "../../utils/validation";
import { AuthorizationContainer, TextFieldError } from "./styles";
import { H2 } from "../../components/Titles";

export const SignIn: React.FC = () => {
  const EMAIL_FIELD = 'email';
  const PASSWORD_FIELD = 'password';

  const onSignIn = (values: { email: string, password: string }) => {
    console.log(values)
  }

  return (
    <AuthorizationContainer>
      <H2 textAlign="left" marginBottom={24}>Log in</H2>
      <Form
        onSubmit={onSignIn}
        validate={signInValidate}
        render={({ handleSubmit }) => (
          <>
            <Field
              name={EMAIL_FIELD}
              render={({ input, meta }) => (
                <>
                  <TextField
                    {...input}
                    placeholder='Email'
                  />
                  {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                </>
              )}
            />
            <Field
              name={PASSWORD_FIELD}
              render={({ input, meta }) => (
                <>
                  <TextField
                    {...input}
                    placeholder='Password'
                  />
                  {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                </>
              )}
            />

            <Button
              label="Log in"
              width={'fit-content'}
              onClick={handleSubmit}
            />
            {/* {auth.error &&
              <>
                {auth.error.name === "QueryFailedError"
                  ? <ErrorMessage>This e-mail is already taken</ErrorMessage>>
                  : <ErrorMessage>{auth.error.message}</ErrorMessage>>
                }
              </>
            } */}
          </>
        )}
      />
    </AuthorizationContainer>
  )
}
