import { configureStore } from "@reduxjs/toolkit";
import indexPageReducer from "./reducer";
export const store = configureStore({
  reducer: {
    indexPage: indexPageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
