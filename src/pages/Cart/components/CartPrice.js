import React, { useState } from 'react';
import './CartPrice.scss';

function CartPrice({ CartList }) {
  const [cartPrice, setCartPrice] = useState([]);

  return (
    <div className="price-info">
      <ul className="list">
        <li className="item">
          <p className="item-name">상품 금액</p>
          <p className="item-val prd-price">
            +<span className="view-price">{cartPrice}</span>원
          </p>
        </li>
        <li className="item">
          <p className="item-name">상품 할인</p>
          <p className="item-val prd-sale">
            -<span className="view-dc">0</span>원
          </p>
        </li>
        <li className="item">
          <p className="item-name">포장비</p>
          <p className="item-val">
            +<span className="view-wrap-price">0</span>원
          </p>
        </li>
        <li className="item">
          <p className="item-name">부가 쇼핑백</p>
          <p className="item-val">
            +<span className="view-bag-price">0</span>원
          </p>
        </li>
        <li className="item">
          <p className="item-name">배송비</p>
          <p className="item-val">
            +<span className="view-delivery-fee">2,500</span>원
          </p>
        </li>
      </ul>
      <div className="expected-price">
        <p className="item-name">결제 예상 금액</p>
        <p className="item-val">
          <span className="view-payAmount">0</span>
          <span className="unit">원</span>
        </p>
      </div>
      <div className="list-btn">
        <button type="submit" className="list-buy-btn">
          <span className="view-payAmount">0</span>원 주문하기
        </button>
      </div>
    </div>
  );
}

export default CartPrice;
