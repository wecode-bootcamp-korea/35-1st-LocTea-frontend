import React, { useState } from 'react';
import './Side.scss';

const Side = ({ renderCategory }) => {
  const [whichSelected, setwhichSelected] = useState('teashop');

  return (
    <div className="side">
      <p className="listTitle">제품</p>
      <ul className="firstMenu">
        <li
          data-category="first-category"
          id="1"
          onClick={e => {
            setwhichSelected('teashop');
            renderCategory(e);
          }}
          className={
            whichSelected === 'teashop'
              ? 'activatedTabTeaShop'
              : 'unactivatedTabTeaShop'
          }
        >
          티 제품
          <div className="secondMenu1">
            <ul>
              <li
                data-category="first-category"
                id="1"
                onClick={e => renderCategory(e)}
              >
                전체상품
              </li>
              <li
                data-category="second-category"
                id="1"
                onClick={e => renderCategory(e)}
              >
                티 세트
              </li>
              <li
                data-category="second-category"
                id="2"
                onClick={e => renderCategory(e)}
              >
                녹차/말차
              </li>
              <li
                data-category="second-category"
                id="3"
                onClick={e => renderCategory(e)}
              >
                블렌디드 티
              </li>
              <li
                data-category="second-category"
                id="4"
                onClick={e => renderCategory(e)}
              >
                허브티
              </li>
              <li
                data-category="second-category"
                id="5"
                onClick={e => renderCategory(e)}
              >
                밀크티/아이스티
              </li>
            </ul>
          </div>
        </li>
        <li
          data-category="first-category"
          id="2"
          onClick={e => {
            setwhichSelected('bakery');
            renderCategory(e);
          }}
          className={
            whichSelected === 'bakery'
              ? 'activatedTabBakery'
              : 'unactivatedTabBakery'
          }
        >
          티푸드
          <div className="secondMenu2">
            <ul>
              <li
                data-category="first-category"
                id="2"
                onClick={e => renderCategory(e)}
              >
                전체상품
              </li>
              <li
                data-category="second-category"
                id="6"
                onClick={e => renderCategory(e)}
              >
                과자/초콜릿
              </li>
              <li
                data-category="second-category"
                id="7"
                onClick={e => renderCategory(e)}
              >
                베이커리
              </li>
              <li
                data-category="second-category"
                id="8"
                onClick={e => renderCategory(e)}
              >
                아이스크림
              </li>
            </ul>
          </div>
        </li>
        <li
          data-category="first-category"
          id="3"
          onClick={e => {
            setwhichSelected('themashop');
            renderCategory(e);
          }}
          className={
            whichSelected === 'themashop'
              ? 'activatedTabThemaShop'
              : 'unactivatedTabThemaShop'
          }
        >
          티웨어
          <div className="secondMenu3">
            <ul>
              <li
                data-category="first-category"
                id="3"
                onClick={e => renderCategory(e)}
              >
                전체상품
              </li>
              <li
                data-category="second-category"
                id="9"
                onClick={e => renderCategory(e)}
              >
                티팟
              </li>
              <li
                data-category="second-category"
                id="10"
                onClick={e => renderCategory(e)}
              >
                소도구
              </li>
              <li
                data-category="second-category"
                id="11"
                onClick={e => renderCategory(e)}
              >
                티푸드/플레이트
              </li>
              <li
                data-category="second-category"
                id="12"
                onClick={e => renderCategory(e)}
              >
                찻잔
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Side;
