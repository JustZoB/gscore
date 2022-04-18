import Link from "next/link";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Field, Form } from 'react-final-form';
import { signUpValidate } from "../../utils/validation";
import { AuthorizationLink, AuthorizationText, HaveAnAccountContainer} from "./styles";
import { H2 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../../store/authorization/actions";
import { RootState } from "../../store/store";
import { TextFieldError, ErrorMessage, FieldContainer } from "../../components/TextField/styles";
import { AuthtorizationNavbar } from "../../components/AuthtorizationNavbar";
import { useRouter } from "next/router";
import { Container, Wrap } from "../../components/Containers";

export default function SignUp() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  const EMAIL_FIELD = 'email';
  const USERNAME_FIELD = 'username';
  const PASSWORD_FIELD = 'password';

  const onSignUp = (values: { email: string, username: string, password: string }) => {
    const onSuccesfulSignUp = () => {
      router.push('/authorization/checkout')
    }

    dispatch(fetchSignUp({
      email: values.email,
      username: values.username,
      password: values.password,
      callBack: onSuccesfulSignUp,
    }));
  }

  return (
    <>
      <AuthtorizationNavbar />
      <Wrap>
        <Container>
          <H2 textAlign="left" marginBottom={24}>Create account</H2>
          <Form
            onSubmit={onSignUp}
            validate={signUpValidate}
            render={({ handleSubmit }) => (
              <>
                <FieldContainer>
                  <Field
                      name={USERNAME_FIELD}
                      render={({ input, meta }) => (
                        <>
                          <TextField
                            {...input}
                            errors={meta.error}
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
                    {authorization.error.message === "Request failed with status code 409"
                      ? <ErrorMessage>This e-mail is already taken</ErrorMessage>
                      : <ErrorMessage>{authorization.error.message}</ErrorMessage>
                    }
                  </>
                }

                <Button
                  label="Sign Up"
                  theme="primary"
                  onClick={handleSubmit}
                />
              </>
            )}
          />
          <HaveAnAccountContainer>
            <AuthorizationText fontSize={16}>
              Have an account?
            </AuthorizationText>

            <Link href="/authorization/sign-in" passHref>
              <AuthorizationLink>
              Go to the next step
              </AuthorizationLink>
            </Link>
          </HaveAnAccountContainer>
        </Container>
      </Wrap>
    </>
  )
}
