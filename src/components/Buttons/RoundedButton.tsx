import React from "react";
import { RoundedButtonProps } from "../interfaces/interfaces";

export const RoundedButton = ({
  role,
  handleClick,
  className,
  togglePopUp,
  children,
}: RoundedButtonProps) => {
  return (
    <button
      role={role}
      className={className}
      onClick={handleClick}
      onMouseEnter={togglePopUp}
      onMouseLeave={togglePopUp}
    >
      {children}
    </button>
  );
};
