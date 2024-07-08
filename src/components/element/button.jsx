import React from "react";

const Button = (props) => {
  const { type, children, onClick, className } = props;
  return (
    <button
      className={`${className} flex justify-center items-start`}
      onClick={onClick}
      type={type}
      >
      {children}
    </button>
  );
};

export default Button;
