import React from 'react';
import { Navigate } from 'react-router-dom';
import './CartProduct.scss';

function CartProduct({
  cartList,
  plusCount,
  minusCount,
  selectProduct,
  isChecked,
}) {
  const {
    product_id,
    thumbnail_images,
    title,
    quantity,
    price,
    discount,
    stock,
  } = cartList;

  const salePrice = price - price * (discount * 0.01); //세일가
  const eachPrice = price * quantity; //정가x수량
  const eachSalePrice = salePrice * quantity; //세일가x수량

  const disabledMinus = quantity < 2;
  const disabledPlus = stock === 0;

  const noStock = () => {
    if (stock === 0) {
      alert('품절 상품입니다.');
    } else {
      Navigate();
    }
  };

  // const [countInput, setCountInput] = useState({ quantity });

  // const inputCount = () => {
  //   setCountInput(countInput);
  // };
  // const test = e => {
  //   console.log(e.target.checked);
  // };

  if (product_id === null || product_id === undefined || cartList === '[]') {
    return (
      <div className="empty-cart">
        <i className="fa-solid fa-circle-exclamation" />
        장바구니에 물건이 없습니다.
      </div>
    );
  } else {
    return (
      <li
        className={stock === 0 ? 'list-item no-stock' : 'list-item'}
        key={product_id}
      >
        <label className="inp-chk">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => selectProduct(product_id)}
            readOnly
          />
          <span className="inp-box">
            <i className="fa-solid fa-check" />
          </span>
        </label>
        <div className="thumb-con">
          <div className="img-box">
            <img src={thumbnail_images} className="thumb" alt={title} />
          </div>
          <div className="text-box">
            <p className="prd-name">
              <a href="!#" className="prd-name-url multi-line2">
                {title}
              </a>
            </p>
          </div>
        </div>
        <div className="count-price">
          <div className="count-box">
            <div className="counter">
              <button
                type="button"
                className="c-btn qty-down"
                title="수량 감소"
                onClick={minusCount}
                disabled={disabledMinus}
              >
                <i className="fa-solid fa-minus" />
              </button>
              <input
                type="text"
                className="count-num"
                value={quantity}
                min="1"
                max="1000"
                readOnly
              />
              <button
                type="button"
                className="c-btn qty-up"
                title="수량 증가"
                onClick={plusCount}
                disabled={disabledPlus}
              >
                <i className="fa-solid fa-plus" />
              </button>
            </div>
          </div>
          <div className="price-box">
            <p
              className={
                eachPrice !== eachSalePrice ? 'price-origin' : 'display-none'
              }
            >
              {eachPrice.toLocaleString()}원
            </p>
            <p className="price-sale">{eachSalePrice.toLocaleString()}원</p>
          </div>
        </div>
        <div className="list-btn">
          <button
            type="button"
            className="basic-btn"
            title="바로 구매"
            onClick={noStock}
          >
            바로 구매
          </button>
          <div className="list-del-btn">
            <div className="remove-btn" />
          </div>
        </div>
      </li>
    );
  }
}

export default CartProduct;
