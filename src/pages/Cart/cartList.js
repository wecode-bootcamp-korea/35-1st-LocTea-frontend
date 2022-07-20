import React, { useState, useEffect } from 'react';
import CartCount from './cartCount';

function CartList() {
  const [cartList, setCartList] = useState([]);

  // const listItem = document.getElementsByClassName('list-item');

  useEffect(() => {
    fetch('data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="cart-list">
      <ul className="list">
        {cartList.map(item => {
          const { id, thumbnail_images, title, price, discount } = item;

          // if (listItem.length === 0) {
          //   return (
          //     <li className="list-item no-cart">
          //       장바구니에 담긴 상품이 없습니다.
          //     </li>
          //   );
          // }

          return (
            <li className="list-item" key={id}>
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
                <CartCount quantity={item.quantity} />
                <div className="price-box">
                  <p className="price-origin">{price.toLocaleString()}원</p>
                  <p className="price-sale">{discount.toLocaleString()}원</p>
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
