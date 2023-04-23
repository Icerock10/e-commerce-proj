import React from 'react';
import { InputProps } from '../../interfaces/interfaces';

export const Input = ({ handleChange, handleKeyDown, ...rest }: InputProps) => {
  return <input type='text' onChange={handleChange} onKeyDown={handleKeyDown} {...rest}></input>;
};
