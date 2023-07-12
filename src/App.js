import React from "react";
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
