
import { combineReducers } from "redux";
import authorizationSlice from './authorization/reducers'

const rootReducer = combineReducers({
  authorizationSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }