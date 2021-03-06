import React, { useState, useEffect } from 'react';
import './index.css';
import Cat from './cat.png'



const Card = ({ taste, amount, present, weight, status, subtitle }) => {
  const [self_satus, setStatus] = useState(status)
  const [background_class, setBackground_class] = useState('blue__background');
  const [no_display, setNo_display] = useState('no__display');
  const [top__subtitle, setTopSubtitle] = useState('Сказочное заморское яство');
  const [top__subtitle__color, setTopSubtitleColor] = useState('');
  const [text, setText] =useState('');
  const [buy, setBuy] =useState('');
  const [bottomTextcolor, setBottomtextcolor] = useState('')

  useEffect(() => {
    
    switch (self_satus) {
      case 'selected':
        setBackground_class('red__background');
        setText(subtitle);
        setBuy('');
        setBottomtextcolor('');
        break

      case 'default':
        setBackground_class('blue__background');
        setText('Чего сидишь? Порадуй котэ, ');
        setBuy('купи.');
        setBottomtextcolor('');
        break

      default:
        setBackground_class('gray__background');
        setNo_display('')
        setText('Печалька, ' + taste + ' закончился' );
        setBottomtextcolor('yellow__color');
        break
    }
  }, [self_satus, taste, subtitle]);

 const BottomSubtitle = ()=>{
    return(
      <div className={bottomTextcolor}>{text}<span onClick={handleClick}>{buy}</span></div>
    )
  }



  const handleClick = () => {
    setTopSubtitle('Сказочное заморское яство');
    setTopSubtitleColor('');
    if (self_satus === 'default') {
      setStatus('selected');
    } else if (self_satus === 'selected') {
      setStatus('default');
    }
  }

  const handleMouseDown = () => {
    console.log('mouseon')
    if (self_satus === 'default') {
      setBackground_class('blue__background__hover');
    } else if (self_satus === 'selected') {
      setBackground_class('red__background__hover');
      setTopSubtitle('Котэ не одобряет?');
      setTopSubtitleColor('red__color');
    }
  }
  const handleMouseLeave = () => {
    if (self_satus === 'default') {
      setBackground_class('blue__background');
    } else if (self_satus === 'selected') {
      setBackground_class('red__background');
      setTopSubtitle('Сказочное заморское яство');
      setTopSubtitleColor('');
    }
  }

  
  return (
    <div className="item__container">
      <div className={'card__wrapper ' + background_class} onClick={handleClick} onMouseEnter={handleMouseDown} onMouseLeave={handleMouseLeave}>
        <div className={'transparent ' + no_display}></div>
        <div className="card">
          <div className='card__txt'>
            <div className={'card__top__subtitle '+ top__subtitle__color}>{top__subtitle}</div>
            <div className="card__title">Нямушка</div>
            <div className='card__taste'>{taste}</div>
            <div className='card__amount'>{amount}</div>
            <div className='card__present'>{present}</div>
          </div>
        </div>
        <div className="cat_img"><img src={Cat} alt='cat'></img></div>
        <div className={'ellipse ' + background_class}>
          <div className='weight'>{weight}</div>
          <div className='kg'>кг</div>
        </div>
      </div>
      <div className="bottom__subtitle"><BottomSubtitle/></div>
    </div>
  );
}

export default Card;
