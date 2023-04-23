import React, { FC } from 'react';
import { Submenu } from './Submenu';
import { DropdownConfig, Menu } from '../../../interfaces/interfaces';
import { dropdownClasses } from '../../classUtils/classUtils';

export const Dropdown: FC<DropdownConfig> = ({ depthLevel, submenus, dropdown }) => {
  depthLevel += 1;

  const dropdownClass = depthLevel > 1 ? 'dropdown__submenu' : '';

  return (
    <ul className={`${dropdownClass} ${dropdownClasses(dropdown)}`}>
      {submenus.map((submenu: Menu, index: number) => (
        <Submenu
          key={index}
          depthLevel={depthLevel}
          items={submenu}
          dropdownClass={dropdownClass}
        />
      ))}
    </ul>
  );
};
