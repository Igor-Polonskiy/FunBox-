import React from 'react';
import Card from '../Card/'
import './index.css';

function App() {
  
  return (
    <div className="app">
      <div className="app__shadow">
     
          <div className='title'>Ты сегодня покормил кота?</div>
          <div className='card__container'>
            <Card taste='c Фуф-гра' amount = "10 порций" present = "мышь в подарок"/>
            <Card />
            <Card />
          </div>
        
      </div>
    </div>
  );
}

export default App;
