import React from 'react';
import { languages } from '../../helpers/languages';
import { CartIcon } from '../../assets/images/icons/Icons';
import { useSwitcher } from './useSwitcher';
import { useCart } from './Cart/useCart';
import { useClickOutside } from '../globalHooks/useClickOutside';
import { useVisibility } from '../globalHooks/useVisibility';
import { languageListClasses } from '../classUtils/classUtils';

export const Switcher = () => {
  const {
    showLanguagesList,
    languageText,
    isLangListShown,
    getLanguageSwitched,
    t,
    productsLength,
  } = useSwitcher();
  const { toggleCartVisibility } = useCart();
  const { togglePopUpVisibility, isPopupShown } = useVisibility();
  const { switcherRef } = useClickOutside();

  return (
    <div className='main__cart-switcher'>
      <div className='switcher'>
        <span onClick={() => showLanguagesList()} className='switcher__language'>
          <img alt='switcher' src={languages[languageText]} />
          <span className='switcher__text'>{languageText}</span>
        </span>
        {isLangListShown && (
          <div className='submenu' ref={switcherRef}>
            {Object.keys(languages).map((language, i) => {
              return (
                <span
                  key={`key-${i}`}
                  className={languageListClasses(language, languageText)}
                  onClick={() => getLanguageSwitched(language)}
                >
                  <img src={languages[language]} alt='flags' />
                  {language}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div
        className='cart-toggler'
        onClick={toggleCartVisibility}
        onMouseEnter={togglePopUpVisibility}
        onMouseLeave={togglePopUpVisibility}
      >
        <div className={`${isPopupShown ? 'popup' : 'hidden'}`}>
          <span>The cart is empty...</span>
        </div>
        <CartIcon className='cart-toggler__icon' />
        {productsLength ? (
          <span className='cart-toggler__products-number'>{productsLength}</span>
        ) : null}
        <span className='cart-toggler__text'>{t('cart')}</span>
      </div>
    </div>
  );
};
