export const validateEmail = (email: string) => {
  let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  return re.test(email);
}

export const isEmpty = (string: string) => {
  if (string) {
    if (string.trim() === '') {
      return true
    }

    return false
  }

  return true
}

export const tooLong = (string: string, maxLenght:number = 20) => {
  if (string && string.length > maxLenght) {
    return true
  }

  return false
}

export const emailValidation = (email: string) => {
  const errors: { email?: string } = {};
  
  if (!validateEmail(email)) {
    errors.email = 'It is not email';
  }
  if (tooLong(email, 30)) {
    errors.email = 'Too long';
  }
  if (isEmpty(email)) {
    errors.email = 'Required';
  }

  return errors.email
}

export const usernameValidation = (username: string) => {
  const errors: { username?: string } = {};

  if (tooLong(username)) {
    errors.username = 'Too long';
  }
  if (isEmpty(username)) {
    errors.username = 'Required';
  }

  return errors.username
}

export const passwordValidation = (password: string) => {
  const errors: { password?: string } = {};

  if (tooLong(password)) {
    errors.password = 'Too long';
  }
  if (isEmpty(password)) {
    errors.password = 'Required';
  }

  return errors.password
}

export const signInValidate = (values: { email?: string, password?: string }) => {
  const errors: { email?: string, password?: string } = {};
  const emailValidate = emailValidation(values.email);
  const passwordValidate = passwordValidation(values.password);
  if (emailValidate) {
    errors.email = emailValidate
  }
  if (passwordValidate) {
    errors.password = passwordValidate
  }
  return errors
}

export const signUpValidate = (values: { username?: string, email?: string, password?: string }) => {
  const errors: { username?: string, email?: string, password?: string } = {}
  const usernameValidate = usernameValidation(values.username);
  const emailValidate = emailValidation(values.email);
  const passwordValidate = passwordValidation(values.password);
  if (usernameValidate) {
    errors.username = usernameValidate;
  }
  if (emailValidate) {
    errors.email = emailValidate;
  }
  if (passwordValidate) {
    errors.password = passwordValidate;
  }
  return errors
}

export const changePersonalDataValidate = (values: { username?: string, email?: string }) => {
  const errors: { username?: string, email?: string } = {}
  const usernameValidate = usernameValidation(values.username);
  const emailValidate = emailValidation(values.email);
  if (usernameValidate) {
    errors.username = usernameValidate;
  }
  if (emailValidate) {
    errors.email = emailValidate;
  }
  return errors
}

export const updatePasswordValidate = (values: { currentPassword?: string, newPassword?: string }) => {
  const errors: { currentPassword?: string, newPassword?: string } = {}
  const currentPasswordValidate = passwordValidation(values.currentPassword);
  const newPasswordValidate = passwordValidation(values.newPassword);
  if (currentPasswordValidate) {
    errors.currentPassword = currentPasswordValidate;
  }
  if (newPasswordValidate) {
    errors.newPassword = newPasswordValidate;
  }
  
  return errors
}
