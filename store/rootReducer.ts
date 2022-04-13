
import { combineReducers } from "redux";
import authorizationSlice from './authorization/reducers'
import paymentSlice from './payment/reducers'

const rootReducer = combineReducers({
  authorizationSlice,
  paymentSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }