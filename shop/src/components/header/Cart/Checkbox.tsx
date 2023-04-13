import React, { FC, useState } from "react";

interface ICheckboxProps {
  id: any;
  currentId: number | null;
  handleChange: (e: any) => void;
}

export const Checkbox: FC<ICheckboxProps> = ({
  id,
  currentId,
  handleChange,
}) => {
  return (
    <input
      style={{ marginRight: "1rem" }}
      type="checkbox"
      checked={id === currentId}
      onChange={handleChange}
      id={id}
    />
  );
};
