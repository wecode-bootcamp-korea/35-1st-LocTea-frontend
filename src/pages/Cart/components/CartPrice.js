import React, { useState } from 'react';
import './CartPrice.scss';

function CartPrice({ cartList, scrollActive }) {
  const [price, setPrice] = useState([]);
  const totalPrice = cartList.map(data => data.price);
  const total = totalPrice => {
    let result = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      result += totalPrice[i];
    }
    return result;
  };
  const realTotal = total(totalPrice); //정적 데이터
  const realRealTotal = realTotal > 0 ? realTotal : 0;
  const deliveryFee = realTotal > 30000 ? 0 : 2500;

  const totalDiscount = cartList.map(data => data.discount);
  console.log(totalDiscount);
  // const totalDc = totalDiscount => {
  //   let result = 0;
  //   for (let i = 0; i < totalPrice.length; i++) {
  //     for (let j = 0; j < totalDiscount.length; j++) {
  //       if (i === j) {
  //         result = totalPrice[i] - totalDiscount[j] * 0.01;
  //       }
  //     }
  //     console.log(result);
  //   }
  //   console.log(result);
  //   return result;
  // };
  // const realDc = totalDc(totalDiscount);

  return (
    <div className={scrollActive ? 'price-info fixed' : 'price-info'}>
      <ul className="list">
        <li className="item">
          <p className="item-name">상품 금액</p>
          <p className="item-val prd-price">
            +
            <span className="view-price">{realRealTotal.toLocaleString()}</span>
            원
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
            +
            <span className="view-delivery-fee">
              {deliveryFee.toLocaleString()}
            </span>
            원
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
