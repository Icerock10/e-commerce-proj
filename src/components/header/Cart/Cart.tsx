import React, { useContext } from 'react';
import { LanguageContext } from '../../../helpers/languageContext';
import './Cart.scss';
import { useCart } from './useCart';
import { CheckboxInput } from '../../Inputs/CheckboxInput';
import { useClickOutside } from '../../globalHooks/useClickOutside';
import { priceFormatWithCommas } from '../../../helpers/priceFormat';
import { PlusIcon, MinusIcon, Trash } from '../../../assets/images/icons/Icons';
import { ThankNotification } from './ThankNotification';
import { Checkout } from './Checkout';
import { IconButton } from '../../Buttons/IconButton';
export const Cart = () => {
  const { cartRef } = useClickOutside();
  const {
    productsInCart,
    getProductId,
    handleProductRemove,
    isChecked,
    selectAllCheckboxes,
    removeSelectedProducts,
    calculateQuantityAmount,
    isThankNotificationShown,
    showThankNotification,
  } = useCart();

  const { t } = useContext(LanguageContext);

  return (
    <div className='overlay'>
      <div className='cart' ref={cartRef}>
        {isThankNotificationShown ? (
          <ThankNotification />
        ) : (
          <>
            <div className='cart__title'>
              <h2>{t('cart')}</h2>
              <div className='cart__remove' onClick={() => removeSelectedProducts(isChecked)}>
                <IconButton className='remove__button'>
                  <Trash />
                </IconButton>
                <span>{t('remove')}</span>
              </div>
            </div>
            <div className='cart__subtitle'>
              <div className='subtitle__elem subtitle__elem_spaced'>
                <CheckboxInput
                  id={undefined}
                  checkedProp={isChecked}
                  handleChange={() => selectAllCheckboxes(isChecked)}
                />{' '}
                <span style={{ marginLeft: '.5rem' }}>{t('product')}</span>
              </div>
              <div style={{ textAlign: 'center' }} className='subtitle__elem'>
                <span>{t('quantity')}</span>
              </div>
              <div className='subtitle__elem subtitle__elem_direction_right'>
                <span>{t('price')}</span>
              </div>
            </div>
            <div className='cart__products'>
              {productsInCart.map(({ id, checked, image, heading, quantity, price }: any) => {
                return (
                  <div key={id} className='cart__subtitle cart__subtitle_default_color'>
                    <div className='subtitle__elem subtitle__elem_spaced'>
                      <CheckboxInput checkedProp={checked} handleChange={getProductId} id={id} />
                      <div className='cart__image'>
                        <img alt='product' src={image} />
                      </div>
                      <span className='cart__heading' style={{ marginLeft: '1rem' }}>
                        {heading}
                      </span>
                    </div>
                    <div className='subtitle__elem'>
                      <div className='subtitle__quantity'>
                        <div
                          className='subtitle__operand'
                          onClick={() => calculateQuantityAmount(id, 'subtract')}
                        >
                          <MinusIcon />
                        </div>
                        <span>{quantity}</span>
                        <div
                          className='subtitle__operand'
                          onClick={() => calculateQuantityAmount(id, 'add')}
                        >
                          <PlusIcon />
                        </div>
                      </div>
                      <div className='cart__remove' onClick={() => handleProductRemove(id)}>
                        <IconButton className='remove__button'>
                          <Trash />
                        </IconButton>
                        <span>{t('remove')}</span>
                      </div>
                    </div>
                    <div className='subtitle__elem subtitle__elem_direction_right'>
                      <span>{`$${priceFormatWithCommas(price * quantity)}`}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Checkout handleNotification={showThankNotification} buttonTitle={t('checkout')} />
          </>
        )}
      </div>
    </div>
  );
};
