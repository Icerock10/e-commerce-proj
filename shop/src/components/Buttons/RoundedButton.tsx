import React from "react";

interface RoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: "back" | "forward" | "buyButton";
  className: string;
  handleClick: () => void;
  togglePopUp?: () => void;
}

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
