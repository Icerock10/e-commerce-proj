import React from 'react';
import { useScroll } from '../globalHooks/useScroll';
import { Close } from '../.././assets/images/icons/Icons';
import { useClickOutside } from '../globalHooks/useClickOutside';
import { useVisibility } from '../globalHooks/useVisibility';
import { useProducts } from '../products/useProducts';

export const Sidebar = () => {
  const { scrollToSection } = useScroll();
  const { uniqueProducts } = useProducts();
  const { toggleSidebarVisibility, isSidebarShown } = useVisibility();
  const { sideBarRef } = useClickOutside();

  return (
    <>
      {isSidebarShown && (
        <div className='sidebar' ref={sideBarRef}>
          <div onClick={() => toggleSidebarVisibility()} className='sidebar__close'>
            <Close />
          </div>
          <ul className='sidebar__menu'>
            {uniqueProducts.map((product, index) => {
              return (
                <li
                  className='sidebar__item'
                  key={`key-${index}`}
                  onClick={(e) => scrollToSection(index + 1, e)}
                >
                  {product}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
