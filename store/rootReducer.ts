
import { combineReducers } from "redux";
import authorizationSlice from './authorization/reducers'
import paymentSlice from './payment/reducers'
import subscribesSlice from './subscribes/reducers'
import burgerMenuSlice from './burgerMenu/reducers'

const rootReducer = combineReducers({
  authorizationSlice,
  paymentSlice,
  subscribesSlice,
  burgerMenuSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
