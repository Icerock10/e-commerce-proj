import React from "react";

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: "back" | "forward" | "top" | "bottom";
  className: string;
  handleClick: () => void;
}

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
