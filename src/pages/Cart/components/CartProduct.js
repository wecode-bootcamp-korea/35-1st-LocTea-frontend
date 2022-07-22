import React from 'react';
import './CartProduct.scss';

function CartProduct({ cartList, plusCount, minusCount }) {
  const { product_id, thumbnail_images, title, quantity, price, discount } =
    cartList;

  const salePrice = price - price * (discount * 0.01);
  const eachPrice = price * quantity;
  const eachSalePrice = salePrice * quantity;
  // if (eachPrice === eachSalePrice) {
  //   document.getElementsByClassName('price-origin')[0].style.display = 'none';
  // }

  const disabledMinus = quantity < 2;

  // const [countInput, setCountInput] = useState();

  // const inputCount = e => {
  //   setCountInput(e.target.value);
  // };

  if ({ product_id }.length === 0) {
    return (
      <div className="cart-list">
        <ul className="list">
          <li className="list-item no-cart">장바구니가 비어 있습니다.</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="cart-list">
        <ul className="list">
          <li className="list-item" key={product_id}>
            <label className="inp-chk">
              <input type="checkbox" id="check-all" />
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
                  />
                  <button
                    type="button"
                    className="c-btn qty-up"
                    title="수량 증가"
                    onClick={plusCount}
                  >
                    <i className="fa-solid fa-plus" />
                  </button>
                </div>
              </div>
              <div className="price-box">
                <p className="price-origin">{eachPrice.toLocaleString()}원</p>
                <p className="price-sale">{eachSalePrice.toLocaleString()}원</p>
              </div>
            </div>
            <div className="list-btn">
              <button type="button" className="basic-btn" title="바로 구매">
                바로 구매
              </button>
              <div className="list-del-btn">
                <div className="remove-btn" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartProduct;
