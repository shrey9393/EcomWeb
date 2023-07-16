import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./orderAPI";
import { act } from "react-dom/test-utils";

const initialState = {
  order: [],
  status: "idle",
  currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
  "orders/addOrder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.order.push(action.payload);
        state.currentOrder = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export default counterSlice.reducer;
