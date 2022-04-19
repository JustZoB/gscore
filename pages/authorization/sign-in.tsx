import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { signInValidate } from "../../utils/validation";
import { H2 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "../../store/authorization/actions";
import { RootState } from "../../store/store";
import { TextFieldError, ErrorMessage, FieldContainer } from "../../components/TextField/styles";
import { AuthtorizationNavbar } from "../../components/AuthtorizationNavbar";
import { useRouter } from "next/router";
import { Container, Wrap } from "../../components/Containers";

export default function SignIn() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  const EMAIL_FIELD = 'email';
  const PASSWORD_FIELD = 'password';

  const onSignIn = (values: { email: string, password: string }) => {
    const onSuccesfulLogIn = () => {
      router.push('/authorization/checkout')
    }

    dispatch(fetchSignIn({
      email: values.email,
      password: values.password,
      callBack: onSuccesfulLogIn,
    }));
  }

  return (
    <>
      <AuthtorizationNavbar />
      <Wrap>
        <Container>
          <H2 textAlign="left" marginBottom={24}>Log in</H2>
          <Form
            onSubmit={onSignIn}
            validate={signInValidate}
            render={({ handleSubmit }) => (
              <>
                <FieldContainer>
                  <Field
                    name={EMAIL_FIELD}
                    render={({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          errors={meta.error}
                          placeholder='Email'
                        />
                        {meta.touched && meta.error && <TextFieldError>{meta.error}</TextFieldError>}
                      </>
                    )}
                  />
                </FieldContainer>

                <FieldContainer>
                  <Field
                    name={PASSWORD_FIELD}
                    render={({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          errors={meta.error}
                          type='password'
                          placeholder='Password'
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

                <Button
                  label="Log in"
                  theme="primary"
                  onClick={handleSubmit}
                />
              </>
            )}
          />
        </Container>
      </Wrap>
    </>
  )
}
