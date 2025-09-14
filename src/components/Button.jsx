import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`px-6 py-3 border rounded-full transition text-black border-black hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
