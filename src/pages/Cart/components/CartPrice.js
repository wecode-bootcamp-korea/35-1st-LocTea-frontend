import React from 'react';
import './CartPrice.scss';

function CartPrice({ selectedProducts, letOrder }) {
  const totalPrice = selectedProducts.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const totalDiscount = selectedProducts.reduce(
    (acc, cur) => acc + cur.price * (cur.discount * 0.01) * cur.quantity,
    0
  );

  const total = totalPrice - totalDiscount;

  const deliveryFee = totalPrice > 30000 ? 0 : 2500;

  return (
    <div className="price-info">
      <ul className="list">
        <li className="item">
          <p className="item-name">상품 금액</p>
          <p className="item-val prd-price">
            +<span className="view-price">{totalPrice.toLocaleString()}</span>원
          </p>
        </li>
        <li className="item">
          <p className="item-name">상품 할인</p>
          <p className="item-val prd-sale">
            -<span className="view-dc">{totalDiscount.toLocaleString()}</span>원
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
          <span className="view-payAmount">{total.toLocaleString()}</span>
          <span className="unit">원</span>
        </p>
      </div>
      <div className="list-btn">
        <button type="submit" className="list-buy-btn" letOrder={letOrder}>
          <span className="view-payAmount">{total.toLocaleString()}</span>원
          주문하기
        </button>
      </div>
    </div>
  );
}

export default CartPrice;
