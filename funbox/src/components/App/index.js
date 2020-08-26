import React from 'react';
import Card from '../Card/'
import './index.css';

function App() {

  return (
    <div className="app">
      <div className="app__shadow">

        <div className='title'>Ты сегодня покормил кота?</div>
        <div className='card__container'>
          <Card taste='c фуа-гра'
            amount="10 порций"
            present="мышь в подарок"
            weight='0,5'
            status='default'
            subtitle='Печень утки разварная с артишоками.' />
          <Card taste='c рыбой'
            amount="40 порций"
            present="2 мыши в подарок"
            weight='2' status='selected'
            subtitle='Головы щучьи с чесноком да свежайшая сёмгушка.' />
          <Card taste='c курой'
            amount="100 порций"
            present="5 мышей в подарок заказчик дволен"
            weight='5'
            status='disabled'
            subtitle='Филе из цыплят с трюфелями в бульоне.' />
        </div>

      </div>
    </div>
  );
}

export default App;
