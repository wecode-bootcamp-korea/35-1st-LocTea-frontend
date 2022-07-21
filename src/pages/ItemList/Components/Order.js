import React, { useState, useEffect } from 'react';
import './Order.scss';

const Order = ({ whichProductRender }) => {
  const [whichSelected, setWhichSelected] = useState('new');

  useEffect(() => {
    setWhichSelected('new');
  }, [whichProductRender]);

  return (
    <div className="order">
      <p className="orderTitle">{whichProductRender.title}</p>
      <ul className="ordertab">
        <li
          onClick={() => {
            setWhichSelected('new');
          }}
          className={
            whichSelected === 'new' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          신상품순
        </li>
        <li
          onClick={() => {
            setWhichSelected('high');
          }}
          className={
            whichSelected === 'high' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          높은 가격순
        </li>
        <li
          onClick={() => {
            setWhichSelected('low');
          }}
          className={
            whichSelected === 'low' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          낮은 가격순
        </li>
      </ul>
    </div>
  );
};

export default Order;
