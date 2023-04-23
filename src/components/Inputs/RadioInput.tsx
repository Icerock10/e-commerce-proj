import React, { FC } from 'react';
import { RadioInputProps } from '../../interfaces/interfaces';

export const RadioInput: FC<RadioInputProps> = ({
  handleChange,
  className,
  checked,
}: RadioInputProps) => {
  return <input onChange={handleChange} checked={checked} type='radio' className={className} />;
};
