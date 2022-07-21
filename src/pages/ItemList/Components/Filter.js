import React, { useState, useEffect } from 'react';

import './Filter.scss';

let initialValue = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: true,
};

const Filter = whichProductRender => {
  const [whichSelected, setWhichSelected] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: true,
  });

  useEffect(() => {
    setWhichSelected(initialValue);
  }, [whichProductRender]);

  const handleAllButton = () => {
    setWhichSelected({ 1: false, 2: false, 3: false, 4: false, 5: true });
  };
  const handleButton = i => {
    setWhichSelected((whichSelected[5] = false));
    setWhichSelected({ ...whichSelected, [i]: !whichSelected[i] });
  };
  return (
    <div className="filter">
      <p>총 177개의 상품이 있습니다.</p>
      <div className="buttons">
        <button
          onClick={handleAllButton}
          className={whichSelected[5] ? 'activatedButton' : 'unactivatedButton'}
        >
          전체
        </button>
        <button
          onClick={() => {
            handleButton(1);
          }}
          className={whichSelected[1] ? 'activatedButton' : 'unactivatedButton'}
        >
          잎차
        </button>
        <button
          onClick={() => {
            handleButton(2);
          }}
          className={whichSelected[2] ? 'activatedButton' : 'unactivatedButton'}
        >
          피라미드
        </button>
        <button
          onClick={() => {
            handleButton(3);
          }}
          className={whichSelected[3] ? 'activatedButton' : 'unactivatedButton'}
        >
          티백
        </button>
        <button
          onClick={() => {
            handleButton(4);
          }}
          className={whichSelected[4] ? 'activatedButton' : 'unactivatedButton'}
        >
          파우더
        </button>
      </div>
    </div>
  );
};

export default Filter;
