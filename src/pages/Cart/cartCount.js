import React, { useState } from 'react';
function CartCount(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const plusPrice = () => {
    setQuantity(quantity + 1);
  };
  const minusPrice = () => {
    setQuantity(quantity - 1);
  };
  const disabledMinus = quantity < 2;

  return (
    <div className="count-box">
      <div className="counter">
        <button
          type="button"
          className="c-btn qty-down"
          title="수량 감소"
          onClick={minusPrice}
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
        {/* <p className="count-num">{quantity}</p> */}
        <button
          type="button"
          className="c-btn qty-up"
          title="수량 증가"
          onClick={plusPrice}
        >
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
}

export default CartCount;
