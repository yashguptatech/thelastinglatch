import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <button
      className={`px-3 py-2 rounded-full bg-secondary text-primary border-2 border-secondary hover:bg-background hover:text-primary duration-500 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
