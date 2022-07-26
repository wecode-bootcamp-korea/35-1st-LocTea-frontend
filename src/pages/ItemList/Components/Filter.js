import React, { useEffect } from 'react';

import './Filter.scss';

const initialValue = {
  tealeaf: false,
  pyramid: false,
  teabag: false,
  powder: false,
  all: true,
};

const Filter = ({ whichProductRender, items, whatType, setWhatType }) => {
  useEffect(() => {
    setWhatType({ ...initialValue });
  }, [whichProductRender]);

  useEffect(() => {
    if (
      !whatType.tealeaf &&
      !whatType.pyramid &&
      !whatType.teabag &&
      !whatType.powder
    ) {
      setWhatType({ ...initialValue });
    }
  }, [whatType.tealeaf, whatType.pyramid, whatType.teabag, whatType.powder]);

  const handleAllButton = () => {
    setWhatType({ ...initialValue });
  };
  const handleButton = i => {
    setWhatType((whatType.all = false));
    setWhatType({ ...whatType, [i]: !whatType[i] });
  };
  return (
    <div className="filter">
      <p>총 {items.total_items}개의 상품이 있습니다.</p>

      <div className="buttons">
        {whichProductRender.button === true && (
          <>
            <button
              onClick={e => {
                handleAllButton();
              }}
              id="all"
              className={
                whatType.all === true ? 'activatedButton' : 'unactivatedButton'
              }
            >
              전체
            </button>
            <button
              onClick={e => {
                handleButton('tealeaf');
              }}
              id="tealeaf"
              className={
                whatType.tealeaf ? 'activatedButton' : 'unactivatedButton'
              }
            >
              잎차
            </button>

            <button
              onClick={e => {
                handleButton('pyramid');
              }}
              id="pyramid"
              className={
                whatType.pyramid ? 'activatedButton' : 'unactivatedButton'
              }
            >
              피라미드
            </button>
            <button
              onClick={e => {
                handleButton('teabag');
              }}
              id="teabag"
              className={
                whatType.teabag ? 'activatedButton' : 'unactivatedButton'
              }
            >
              티백
            </button>
            <button
              onClick={e => {
                handleButton('powder');
              }}
              id="powder"
              className={
                whatType.powder ? 'activatedButton' : 'unactivatedButton'
              }
            >
              파우더
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
