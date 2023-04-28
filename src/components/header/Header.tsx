import React from 'react';
import logo from '../../assets/images/logo.png';
import { Menu, Search, Close } from '../../assets/images/icons/Icons';
import { IconButton } from '../Buttons/IconButton';
import { Switcher } from './Switcher';
import './Header.scss';
import { Sidebar } from './Sidebar';
import { Menubar } from './Menu/Menubar';
import { Cart } from './Cart/Cart';
import { useVisibility } from '../globalHooks/useVisibility';
import { Input } from '../Inputs/Input';
import { InputLogic } from './InputLogic';

export const Header = () => {
  const { toggleSidebarVisibility, isCartShownDependingOnLength } = useVisibility();
  const { dispatch, value, getUserValue, sortProductsByUserInput, resetSortProducts } =
    InputLogic();

  return (
    <>
      <Sidebar />
      {isCartShownDependingOnLength() && <Cart />}
      <header className='header container'>
        <div className='header__logo'>
          <img alt='logo' src={logo} />
        </div>
        <div className='main'>
          <div className='main__burger' onClick={toggleSidebarVisibility}>
            <Menu />
          </div>
          <Menubar />
          <div className='input-group'>
            <Input
              value={value}
              className='input-group__input'
              placeholder={'search'}
              handleChange={(e) => dispatch(getUserValue(e.target.value))}
              handleKeyDown={(e) => e.key === 'Enter' && sortProductsByUserInput()}
            />
            <IconButton className='close-button' handleClick={resetSortProducts}>
              <Close />
            </IconButton>
            <IconButton
              className='input-group__search-button'
              handleClick={sortProductsByUserInput}
            >
              <Search />
            </IconButton>
          </div>
          <Switcher />
        </div>
      </header>
    </>
  );
};
