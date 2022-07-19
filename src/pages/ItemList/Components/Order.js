import React from 'react';
import { useState } from 'react';

const Order = () => {
  const [isSelected, setIsSelected] = useState('new');

  return (
    <div className="order">
      <p className="orderTitle">티 제품</p>
      <ul className="ordertab">
        <li
          onClick={() => {
            setIsSelected('new');
          }}
          className={isSelected === 'new' ? 'activatedTab' : 'unactivatedTab'}
        >
          신상품순
        </li>
        <li
          onClick={() => {
            setIsSelected('high');
          }}
          className={isSelected === 'high' ? 'activatedTab' : 'unactivatedTab'}
        >
          높은 가격순
        </li>
        <li
          onClick={() => {
            setIsSelected('low');
          }}
          className={isSelected === 'low' ? 'activatedTab' : 'unactivatedTab'}
        >
          낮은 가격순
        </li>
      </ul>
    </div>
  );
};

export default Order;
