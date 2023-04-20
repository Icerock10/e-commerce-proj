import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  className?: string;
}

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
