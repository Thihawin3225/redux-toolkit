import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoinitialState = {
  isLoading: false,
  data: [],
  isError: false,
};

export const getTodo = createAsyncThunk("getTodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: todoinitialState,
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getTodo.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
