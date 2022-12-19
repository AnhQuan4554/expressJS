import { createReducer, createAction } from "@reduxjs/toolkit";

const intialState = {
  index: 0,
};
export const changeIndexPage = createAction<number>(
  "indexPage/changeIndexPage"
);
const indexPageReducer = createReducer(intialState, (builder) => {
  builder.addCase(changeIndexPage, (state, action) => {
    state.index = action.payload as number;
  });
});
export default indexPageReducer;
