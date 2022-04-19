
import { combineReducers } from "redux";
import authorizationSlice from './authorization/reducers'
import paymentSlice from './payment/reducers'
import subscribesSlice from './subscribes/reducers'

const rootReducer = combineReducers({
  authorizationSlice,
  paymentSlice,
  subscribesSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
