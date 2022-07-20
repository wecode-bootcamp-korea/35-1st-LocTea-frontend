import React, { useState } from 'react';

const Side = ({ RenderTeaShop, RenderBakery, RenderThemaShop }) => {
  const [whichSelected, setwhichSelected] = useState('teashop');

  return (
    <div className="side">
      <p className="listTitle">제품</p>
      <ul className="sideList">
        <li
          onClick={() => {
            setwhichSelected('teashop');
            RenderTeaShop();
          }}
          className={
            whichSelected === 'teashop' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          티 제품
        </li>
        <li
          onClick={() => {
            setwhichSelected('bakery');
            RenderBakery();
          }}
          className={
            whichSelected === 'bakery' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          티푸드
        </li>
        <li
          onClick={() => {
            setwhichSelected('themashop');
            RenderThemaShop();
          }}
          className={
            whichSelected === 'themashop' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          라이프 스타일
        </li>
      </ul>
    </div>
  );
};

export default Side;
