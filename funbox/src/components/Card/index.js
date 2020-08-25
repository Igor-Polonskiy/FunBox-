import React from 'react';
import './index.css';
import Cat from './cat.png'

const Card = ({taste, amount, present})=> {

  const top__subtitle = 'Сказочное заморское яство';
  

  return (
    <div className="card__wrapper">
      <div className="card">
        <div className='card__txt'>
          <div className='card__top__subtitle'>{top__subtitle}</div>
          <div className="card__title">Нямушка</div>
          <div className='card__taste'>{taste}</div>
        </div>
      </div>
      <div className="cat_img"><img src={Cat} alt='cat'></img></div>
    </div>
  );
}

export default Card;
