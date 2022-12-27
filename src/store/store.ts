import { configureStore } from "@reduxjs/toolkit";
import { indexPageReducer, dataPostReducer } from "./reducer";
export const store = configureStore({
  reducer: {
    indexPage: indexPageReducer,
    dataPostReducer: dataPostReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
