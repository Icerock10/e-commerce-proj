import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: "back" | "forward";
  icon?: React.ReactNode;
  onClick: () => void;
}

export default function Button(props: IButtonProps) {
  const { role, icon, onClick } = props;

  return (
    <button role={role} className="slider__btn" onClick={onClick}>
      {icon}
    </button>
  );
}
