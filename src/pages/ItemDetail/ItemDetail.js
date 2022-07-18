import React, { useState } from 'react';
import './ItemDetail.scss';

const ItemDetail = () => {
  const [priceCheck, setPriceCheck] = useState(1);
  const [price, setPrice] = useState(20000);
  const plusPrice = () => {
    setPriceCheck(priceCheck + 1);
  };
  const minusPrice = () => {
    setPriceCheck(priceCheck - 1);
  };

  const disabledMinus = priceCheck < 2;

  return (
    <div className="itemdetail">
      <div className="item-img-ul">
        <div className="item-img-box">
          <img
            src="https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/20211026141423508CU.png?quality=80"
            alt=""
          />
        </div>
        <div className="item-ul">
          <li>
            <i className="fa-solid fa-coins" />
            뷰티포인트 200P 적립
          </li>
          <li>
            <i className="fa-regular fa-compass" />
            찻잎 200P 적립
          </li>
          <li>
            <i className="fa-solid fa-truck" />
            3만원 이상 무료배송
          </li>
          <li>
            <i className="fa-solid fa-gift" />
            (유료)포장가능
          </li>
        </div>
      </div>
      <div className="item-explain-purchase">
        <div className="item-explain">
          <div className="item-catagories">
            <ul className="item-catagories-link">
              <li>티제품</li>
              <li> > </li>
              <li>티 세트</li>
            </ul>
          </div>
          <div className="item-name">
            <h3>러블리 티 박스</h3>
          </div>
          <div className="item-name-explain">
            즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록 만의 특별한
            블렌디드 티선물 세트
          </div>
          <div className="item-price-name">
            <strong className="price">{price}</strong>
            <span className="won">원</span>
          </div>
        </div>
        <div className="item-number">
          <p>구매수량</p>
          <div className="item-number-button">
            <button onClick={minusPrice} disabled={disabledMinus}>
              <i className="fa-solid fa-minus" />
            </button>
            <p>{priceCheck}</p>
            <button onClick={plusPrice}>
              <i className="fa-solid fa-plus" />
            </button>
          </div>
        </div>
        <div className="item-purchase">
          <div className="item-purchase-total">
            <p>상품금액 합계</p>
            <div className="item-purchase-total-price">
              <strong>{price * priceCheck}</strong>
              <p>원</p>
            </div>
          </div>
          <div className="item-purchase-button">
            <button className="item-purchase-button-cart">장바구니</button>
            <button className="item-purchase-button-pay">바로구매</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
