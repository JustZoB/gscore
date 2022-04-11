import axios, { User } from "../../services/axios"

export const logIn = async (email: string, password: string) => {
  const response = await axios.post<User>(`/users/sign-in`, {
    email,
    password,
  })
  if (response.data.token) {
    return { user: response.data }
  } else {
    return { error: response.data }
  }
}

export const register = async (email: string, username: string, password: string) => {
  const response = await axios.post<User>(`/users/sign-up`, {
    username,
    email,
    password,
  })
  if (response.data.token) {
    return { user: response.data }
  } else {
    return { error: response.data }
  }
}
