import React, { FC } from 'react';
import { useSwiper } from './useSwiper';
import { Heart } from './Heart';
import { Title } from '../../interfaces/interfaces';
import { useCart } from '../header/Cart/useCart';
import { priceFormatWithCommas } from '../../helpers/priceFormat';
import { RoundedButton } from '../Buttons/RoundedButton';
import { RadioInput } from '../Inputs/RadioInput';

export const ProductList: FC<Title> = ({ title, products, t }) => {
  const [{ scrollToSelectedPage, containerRef, currentPage, pages, px }] = useSwiper(products);

  const { addProduct } = useCart();
  return (
    <>
      <h1 className='products__title'>{title}</h1>
      <div className='products__container' ref={containerRef}>
        {products.map((product) => {
          const { id, heading, category, price, image, liked } = product;
          return (
            <div
              className='product'
              key={id}
              style={{ transform: `translate3d(${window.innerWidth > 640 && px}px, 0px, 0px)` }}
            >
              <h4>{heading}</h4>
              <div className='product__price'>
                <span className='product__text'>{t('price')}</span>
                <span>{`$ ${priceFormatWithCommas(price)}`}</span>
              </div>
              <div className='product__image'>
                <img
                  style={{ height: `${category === 'Laptops' && '70%'}` }}
                  src={image}
                  alt='img'
                />
              </div>
              <div className='product__footer'>
                <RoundedButton className='product__button' handleClick={() => addProduct(product)}>
                  {t('buyButton')}
                </RoundedButton>
                <Heart id={id} liked={liked} />
              </div>
            </div>
          );
        })}
      </div>
      <div className='radio'>
        {[...Array(pages)].map((_, index) => {
          return (
            <label key={`key-${index}`} className='radio__overlay'>
              <RadioInput
                handleChange={() => scrollToSelectedPage(index)}
                checked={currentPage === index}
                type='radio'
                className='radio__input'
              />
              <div className='radio__circle'></div>
            </label>
          );
        })}
      </div>
    </>
  );
};
