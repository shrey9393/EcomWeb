import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductSlice";
import authReducer from "../features/Auth/authSlice";
import cartReducer from "../features/cart/CartSlice";
// import cartReducer from "../features/Cart/CartSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
