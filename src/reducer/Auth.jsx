import { createSlice } from "@reduxjs/toolkit";
const authinitialState = { isLogin: false };
const authSlice = createSlice({
  name: "auth",
  initialState: authinitialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
