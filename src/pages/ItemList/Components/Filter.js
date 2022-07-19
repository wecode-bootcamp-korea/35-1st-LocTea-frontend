import React from 'react';
import { useState } from 'react';

const Filter = () => {
  const [isSelectedAll, setIsSelectedAll] = useState(true);
  const [isSelected, setIsSelected] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleAllButton = () => {
    setIsSelectedAll(true);
    setIsSelected({ 1: false, 2: false, 3: false, 4: false });
  };
  const handleButton = i => {
    setIsSelectedAll(false);
    setIsSelected({ ...isSelected, [i]: !isSelected[i] });
  };
  return (
    <div className="filter">
      <p>총 177개의 상품이 있습니다.</p>
      <div className="buttons">
        <button
          onClick={() => {
            handleAllButton();
          }}
          className={
            isSelectedAll === true ? 'activatedButton' : 'unactivatedButton'
          }
        >
          전체
        </button>
        <button
          onClick={() => {
            handleButton(1);
          }}
          className={
            isSelected[1] === true ? 'activatedButton' : 'unactivatedButton'
          }
        >
          잎차
        </button>
        <button
          onClick={() => {
            handleButton(2);
          }}
          className={
            isSelected[2] === true ? 'activatedButton' : 'unactivatedButton'
          }
        >
          피라미드
        </button>
        <button
          onClick={() => {
            handleButton(3);
          }}
          className={
            isSelected[3] === true ? 'activatedButton' : 'unactivatedButton'
          }
        >
          티백
        </button>
        <button
          onClick={() => {
            handleButton(4);
          }}
          className={
            isSelected[4] === true ? 'activatedButton' : 'unactivatedButton'
          }
        >
          파우더
        </button>
      </div>
    </div>
  );
};

export default Filter;
