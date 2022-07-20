import React, { useState } from 'react';

const Order = ({ whichProductRender }) => {
  const [whichSelected, setwhichSelected] = useState('new');

  return (
    <div className="order">
      <p className="orderTitle">{whichProductRender.title}</p>
      <ul className="ordertab">
        <li
          onClick={() => {
            setwhichSelected('new');
          }}
          className={
            whichSelected === 'new' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          신상품순
        </li>
        <li
          onClick={() => {
            setwhichSelected('high');
          }}
          className={
            whichSelected === 'high' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          높은 가격순
        </li>
        <li
          onClick={() => {
            setwhichSelected('low');
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
