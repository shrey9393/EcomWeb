import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Protected from "./features/Auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import { selectLoggedInUser } from "./features/Auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import { UserOrders } from "./features/user/components/UserOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/Checkout",
    element: (
      <Protected>
        <CheckOut />
      </Protected>
    ),
  },
  {
    // : shows that it is a variable
    path: "/Product-details/:id",
    element: (
      <Protected>
        <ProductDetailsPage />
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "/orders",
    element: <UserOrders />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
