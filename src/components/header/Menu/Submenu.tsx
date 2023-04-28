import React, { FC } from 'react';
import { Dropdown } from './Dropdown';
import { useSubmenu } from './useSubmenu';
import { ChevronDoubleRight, ChevronDoubleDown } from '../../../assets/images/icons/Icons';
import { SubmenuOptions } from '../../../interfaces/interfaces';

export const Submenu: FC<SubmenuOptions> = ({ items, depthLevel, dropdownClass, t }) => {
  const { submenu, title } = items;
  const { toggleDropDown, isDropDownShown } = useSubmenu();
  return (
    <li
      className='main-menu'
      onMouseEnter={toggleDropDown}
      onMouseLeave={toggleDropDown}
      onClick={toggleDropDown}
    >
      <div
        className={`${title === undefined ? 'main-menu__disabled' : ''}`}
        data-category={`${dropdownClass ? 'subCategory' : 'category'}`}
      >
        <span className='main-menu__title'>{title}</span>
        {submenu &&
          (depthLevel === 0 ? (
            <div className='main-menu__toggle'>{t('categories')}</div>
          ) : (
            <span className='main-menu__title'>
              {isDropDownShown ? <ChevronDoubleDown /> : <ChevronDoubleRight />}
            </span>
          ))}
      </div>
      {submenu && (
        <Dropdown depthLevel={depthLevel} submenus={submenu} dropdown={isDropDownShown} />
      )}
    </li>
  );
};
