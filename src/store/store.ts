import { configureStore } from "@reduxjs/toolkit";
import {
  indexPageReducer,
  dataPostReducer,
  userReducer,
  intialJWTReducer,
} from "./reducer";
export const store = configureStore({
  reducer: {
    indexPage: indexPageReducer,
    dataPostReducer: dataPostReducer,
    userReducer: userReducer,
    intialJWTReducer: intialJWTReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
