import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { signUpValidate } from "../../utils/validation";
import { AuthorizationContainer, AuthorizationLink, AuthorizationText, HaveAnAccountContainer, TextFieldError } from "./styles";
import { H2 } from "../../components/Titles";

export const SignUp: React.FC = () => {
  const EMAIL_FIELD = 'email';
  const USERNAME_FIELD = 'username';
  const PASSWORD_FIELD = 'password';

  const onSignUp = (values: { username: string, email: string, password: string }) => {
    console.log(values)
  }

  const nextStep = () => {
    console.log('nextstep')
  }

  return (
    <AuthorizationContainer>
      <H2 textAlign="left" marginBottom={24}>Create account</H2>
      <Form
        onSubmit={onSignUp}
        validate={signUpValidate}
        render={({ handleSubmit }) => (
          <>
          <Field
              name={USERNAME_FIELD}
              render={({ input, meta }) => (
                <>
                  <TextField
                    {...input}
                    placeholder='Username'
                  />
                  {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                </>
              )}
            />
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
              label="Sign Up"
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
      <HaveAnAccountContainer>
        <AuthorizationText fontSize={16}>
          Have an account?
        </AuthorizationText>
        <AuthorizationLink onClick={nextStep}>
          Go to the next step
        </AuthorizationLink>
      </HaveAnAccountContainer>
    </AuthorizationContainer>
  )
}
