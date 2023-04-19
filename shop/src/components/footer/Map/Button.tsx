import React from "react";

interface WidgetButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleButtonClick: () => void;
  className?: string;
}

export const Button = ({
  handleButtonClick,
  className,
  children,
}: WidgetButtonProps) => {
  return (
    <button className={className} onClick={handleButtonClick}>
      {children}
    </button>
  );
};
