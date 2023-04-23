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
      <h1 style={{ textAlign: 'center' }} className='fashion_title'>
        {title}
      </h1>
      <div className='card__container' ref={containerRef}>
        {products.map((product) => {
          const { id, heading, category, price, image, liked } = product;
          return (
            <div
              className='product'
              key={id}
              style={{ transform: `translate3d(${px}px, 0px, 0px)` }}
            >
              <div className='product__container'>
                <h4>{heading}</h4>
                <p className='price__container'>
                  <span className='product__price'>{t('price')}</span>
                  <span>{`$ ${priceFormatWithCommas(price)}`}</span>
                </p>
                <div className='product__image'>
                  <img
                    style={{ height: `${category === 'Laptops' && '70%'}` }}
                    src={image}
                    alt='img'
                  />
                </div>
                <div className='card__footer'>
                  <RoundedButton
                    className='card__footer_btn'
                    handleClick={() => addProduct(product)}
                  >
                    {t('buyButton')}
                  </RoundedButton>
                  <Heart id={id} liked={liked} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='radio_container'>
        {[...Array(pages)].map((_, index) => {
          return (
            <label key={`key-${index}`} htmlFor='bio' className='radio__overlay'>
              <RadioInput
                handleChange={() => scrollToSelectedPage(index)}
                checked={currentPage === index}
                type='radio'
                className={`radio_container__item`}
              />
              <div className='circle'></div>
            </label>
          );
        })}
      </div>
    </>
  );
};
