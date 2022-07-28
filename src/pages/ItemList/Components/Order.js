import React, { useEffect } from 'react';
import './Order.scss';

const Order = ({ whichProductRender, whatOrder, setWhatOrder }) => {
  useEffect(() => {
    setWhatOrder('new-arrival');
  }, [whichProductRender]);

  return (
    <div className="order">
      <p className="orderTitle">{whichProductRender.title}</p>
      <ul className="ordertab">
        <li
          onClick={() => {
            setWhatOrder('new-arrival');
          }}
          id="new-arrival"
          className={
            whatOrder === 'new-arrival' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          신상품순
        </li>
        <li
          onClick={() => {
            setWhatOrder('price-desc');
          }}
          id="price-desc"
          className={
            whatOrder === 'price-desc' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          높은 가격순
        </li>
        <li
          onClick={() => {
            setWhatOrder('price-asc');
          }}
          id="price-asc"
          className={
            whatOrder === 'price-asc' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          낮은 가격순
        </li>
      </ul>
    </div>
  );
};

export default Order;
