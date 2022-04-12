import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { signInValidate } from "../../utils/validation";
import { AuthorizationContainer, ErrorMessage, TextFieldError } from "./styles";
import { H2 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "../../store/authorization/actions";
import { RootState } from "../../store/store";

export const SignIn: React.FC = () => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const EMAIL_FIELD = 'email';
  const PASSWORD_FIELD = 'password';

  const onSignIn = (values: { email: string, password: string }) => {
    dispatch(fetchSignIn({
      email: values.email,
      password: values.password
    }))
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
                    type='password'
                    placeholder='Password'
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
              label="Log in"
              theme="primary"
              onClick={handleSubmit}
            />
          </>
        )}
      />
    </AuthorizationContainer>
  )
}
