import React from "react";

interface scrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role: "bottom" | "top";
  handleClick: () => void;
}

export const Button = ({ handleClick, role, children }: scrollButtonProps) => {
  return (
    <button role={role} className="jumping-element" onClick={handleClick}>
      {children}
    </button>
  );
};
