import React from "react";

interface ForwardBackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: "back" | "forward";
  icon?: React.ReactNode;
  onClick: () => void;
}

export default function Button(props: ForwardBackButtonProps) {
  const { role, icon, onClick } = props;

  return (
    <button role={role} className="slider__btn" onClick={onClick}>
      {icon}
    </button>
  );
}
