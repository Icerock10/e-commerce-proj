import React, { ButtonHTMLAttributes } from "react";
import { Trash } from "../../../assets/images/icons/Icons";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: "remove";
  handleClick: () => void;
}

export default function Button({ handleClick, role }: IButtonProps) {
  return (
    <button className="cart__button_remove" role={role} onClick={handleClick}>
      <Trash />
    </button>
  );
}
