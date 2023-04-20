import React from "react";

interface ForwardBackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: "back" | "forward" | "buyButton";
  className: string;
  handleClick: () => void;
  togglePopUp?: () => void;
}

export default function Button({
  role,
  handleClick,
  className,
  togglePopUp,
  children,
}: ForwardBackButtonProps) {
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
}
