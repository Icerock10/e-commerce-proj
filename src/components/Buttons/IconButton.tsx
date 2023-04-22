import React from "react";
import { IconButtonProps } from "../../interfaces/interfaces";

export const IconButton = ({
  className,
  handleClick,
  children,
}: IconButtonProps) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
