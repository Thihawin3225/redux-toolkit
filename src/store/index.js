import counterSlice from "../reducer/Counter";
import authSlice from "../reducer/Auth";
import todoSlice from "../reducer/Todo";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice, todo: todoSlice },
});

export default store;
