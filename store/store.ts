import { Action, applyMiddleware, createStore } from "redux";
import { ThunkAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./rootReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const store = createStore(
  persistReducer(persistConfig, rootReducer), 
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store)

export { store, persistor }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
