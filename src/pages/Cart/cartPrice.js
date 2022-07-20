import React, { useState, useEffect } from 'react';

function CartPrice() {
  const [cartPrice, setCartPrice] = useState([]);

  useEffect(() => {
    fetch('data/data.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCartPrice(data);
      });
  }, []);

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
