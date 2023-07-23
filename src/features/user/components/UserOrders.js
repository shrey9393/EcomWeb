import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectOrders } from "../userSlice";
import { selectLoggedInUser } from "../../Auth/authSlice";

export function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user));
  }, []);

  return (
    <>
      <div>
        {orders.map((order) => (
          <div>{order.id}</div>
        ))}
      </div>
    </>
  );
}
