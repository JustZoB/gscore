import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { signUpValidate } from "../../utils/validation";
import { AuthorizationContainer, AuthorizationLink, AuthorizationText, ErrorMessage, HaveAnAccountContainer, TextFieldError } from "./styles";
import { H2 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../../store/authorization/actions";
import { setNav } from "../../store/authorization/reducers";
import { RootState } from "../../store/store";

export const SignUp: React.FC = () => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const EMAIL_FIELD = 'email';
  const USERNAME_FIELD = 'username';
  const PASSWORD_FIELD = 'password';

  const onSignUp = (values: { email: string, username: string, password: string }) => {
    dispatch(fetchSignUp({
      email: values.email,
      username: values.username,
      password: values.password,
    }))
  }

  const nextStep = () => {
    dispatch(setNav('signin'))
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
                    type='password'
                    placeholder='Password'
                  />
                  {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                </>
              )}
            />

            {authorization.error &&
              <>
                {authorization.error.message === "Request failed with status code 409"
                  ? <ErrorMessage>This e-mail is already taken</ErrorMessage>
                  : <ErrorMessage>{authorization.error.message}</ErrorMessage>
                }
              </>
            }

            <Button
              label="Sign Up"
              width={'fit-content'}
              onClick={handleSubmit}
            />
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
