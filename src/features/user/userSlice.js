import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserOrders } from "./userAPI";

const initialState = {
  userOrder: [],
  status: "idle",
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (id) => {
    const response = await fetchLoggedInUserOrders(id);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrder = action.payload;
      });
  },
});

export const { increment } = userSlice.actions;
export const selectOrders = (state) => state.user.userOrder;
export default userSlice.reducer;
