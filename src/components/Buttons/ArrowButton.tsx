import React from "react";
import { ArrowButtonProps } from "../interfaces/interfaces";

export const ArrowButton = ({
  role,
  handleClick,
  className,
  children,
}: ArrowButtonProps) => {
  return (
    <button role={role} className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
