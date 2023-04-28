import React, { useContext } from 'react';
import { calculateTotalAmount } from '../../../helpers/calculateTotal';
import { useCart } from './useCart';
import { LanguageContext } from '../../../helpers/languageContext';
import { priceFormatWithCommas } from '../../../helpers/priceFormat';
import { IChekout } from '../../../interfaces/interfaces';
import { RoundedButton } from '../../Buttons/RoundedButton';

export const Checkout = ({ handleNotification, buttonTitle }: IChekout) => {
  const { t } = useContext(LanguageContext);
  const { productsInCart } = useCart();
  return (
    <div className='checkout'>
      <div className='checkout__section'>
        <div className='checkout__item'>
          <span>{t('subtotal')}</span>
          <span>{`$ ${priceFormatWithCommas(calculateTotalAmount(productsInCart))}`}</span>
        </div>
        <div className='checkout__item checkout__item_discount'>
          <span>{t('discount')}</span>
          <span>{`$ 0`}</span>
        </div>
        <div className='checkout__item'>
          <span>{t('grandtotal')}</span>
          <span>{`$ ${priceFormatWithCommas(calculateTotalAmount(productsInCart))}`}</span>
        </div>
        <RoundedButton className='checkout__button' handleClick={handleNotification}>
          {buttonTitle}
        </RoundedButton>
      </div>
    </div>
  );
};
