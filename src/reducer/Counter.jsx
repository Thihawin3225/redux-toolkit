import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, isShow: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increaseBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});
export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
