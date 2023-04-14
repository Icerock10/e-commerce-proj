import React, { FC, useState } from "react";

interface ICheckboxProps {
  checkedProp: undefined | boolean;
  id: string | undefined;
  handleChange: (e: any) => void;
}

export const Checkbox: FC<ICheckboxProps> = ({
  checkedProp,
  id,
  handleChange,
}) => {
  return (
    <input
      id={id}
      type="checkbox"
      checked={!checkedProp ? false : checkedProp}
      onChange={handleChange}
    />
  );
};
