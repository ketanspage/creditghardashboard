import React from "react";

const Input = ({ type = "text", value = "", handleChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className="block w-full p-2 pl-10 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};

export default Input;
