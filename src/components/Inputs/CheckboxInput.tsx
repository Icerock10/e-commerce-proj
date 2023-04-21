import React, { FC } from "react";
import { ICheckboxProps } from "../interfaces/interfaces";

export const CheckboxInput: FC<ICheckboxProps> = ({
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
