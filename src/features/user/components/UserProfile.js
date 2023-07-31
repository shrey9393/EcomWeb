import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../userSlice";

export function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  const handelEdit = () => {};
  const handelRemove = (e, index) => {};

  return (
    <div>
      <div>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <h1 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Name: {user.name ? user.name : "Guest User"}
            </h1>
            <h3 className="mt-10  text-xl font-bold leading-9 tracking-tight text-red-900">
              Email Address: {user.email}
            </h3>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <p className="mt-0.5 text-sm text-gray-600">Your Address:</p>
            {user.addresses.map((address, index) => (
              <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-300">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {address.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.street}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.pinCode}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Phone: {address.phone}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {address.city}
                  </p>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <button
                    type="button"
                    onClick={(e) => handelEdit(e, index)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handelRemove(e, index)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
