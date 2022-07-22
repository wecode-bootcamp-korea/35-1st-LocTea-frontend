import React from 'react';
import './CartPrice.scss';

function CartPrice({ cartList, salePrice, eachPrice, eachSalePrice }) {
  const totalPrice = cartList.map(data => data.price);
  const total = totalPrice => {
    let result = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      result += totalPrice[i];
    }
    return result;
  };
  const realTotal = total(totalPrice);
  const deliveryFee = realTotal > 50000 ? 0 : 2500;

  // const totalDiscount = cartList.map(data => data.discount);
  // console.log(totalDiscount);

  return (
    <div className="price-info">
      <ul className="list">
        <li className="item">
          <p className="item-name">상품 금액</p>
          <p className="item-val prd-price">
            +<span className="view-price">{realTotal.toLocaleString()}</span>원
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
