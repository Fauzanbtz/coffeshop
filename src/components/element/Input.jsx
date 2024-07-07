import React from "react";

const Input = ({
  htmlFor,
  onChange,
  type,
  placeholder,
  label,
  name,
  className,
  value,
}) => {
  return (
    <div className={`${className} space-y-2 flex flex-col w-full `}>
      <label htmlFor={htmlFor} className="text-left">
        {label}
      </label>
      <input
      id={htmlFor}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input "
      />
    </div>
  );
};

export default Input;
