import React, { useState, useEffect } from 'react';

function CartList() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('data/data.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="cartList">
      <ul className="list">
        {cartList.map(cart => {
          return (
            <li className="list-item" key={cart.id}>
              <label className="inp-chk">
                <input type="checkbox" id="check-all" />
                <span className="inp-box">
                  <i className="fa-solid fa-check" />
                </span>
              </label>
              <div className="thumb-con">
                <div className="img-box">
                  <img src={cart.imgUrl} className="thumb" alt="" />
                </div>
                <div className="text-box">
                  <p className="prd-name" name={cart.prdName}>
                    <a href="!#" className="prd-name-url multi-line2">
                      {cart.prdName}
                    </a>
                  </p>
                  <p className="packing-state">{cart.packingState}</p>
                </div>
              </div>
              <div className="count-price">
                <div className="count-box">
                  <div className="counter">
                    <button
                      type="button"
                      className="c-btn qty-down"
                      title="수량 감소"
                    >
                      <i className="fa-solid fa-minus" />
                    </button>
                    <input
                      type="text"
                      className="count-num"
                      value="1"
                      min="1"
                      max="1000"
                    />
                    <button
                      type="button"
                      className="c-btn qty-up"
                      title="수량 증가"
                    >
                      <i className="fa-solid fa-plus" />
                    </button>
                  </div>
                </div>
                <div className="price-box">
                  <p className="price-origin">
                    {cart.priceOrigin.toLocaleString()}
                  </p>
                  <p className="price-sale">
                    {cart.priceSale.toLocaleString()}
                  </p>
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
          );
        })}
      </ul>
    </div>
  );
}

export default CartList;
