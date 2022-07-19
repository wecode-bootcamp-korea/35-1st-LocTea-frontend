import React from 'react';
import { useState } from 'react';

const Side = () => {
  const [isSelected, setIsSelected] = useState('teashop');

  return (
    <div className="side">
      <p className="listTitle">제품</p>
      <ul className="sideList">
        <li
          onClick={() => {
            setIsSelected('teashop');
          }}
          className={
            isSelected === 'teashop' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          티 제품
        </li>
        <li
          onClick={() => {
            setIsSelected('bakery');
          }}
          className={
            isSelected === 'bakery' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          티푸드
        </li>
        <li
          onClick={() => {
            setIsSelected('themashop');
          }}
          className={
            isSelected === 'themashop' ? 'activatedTab' : 'unactivatedTab'
          }
        >
          라이프 스타일
        </li>
      </ul>
    </div>
  );
};

export default Side;
