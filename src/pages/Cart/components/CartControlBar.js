import React from 'react';
import './CartControlBar.scss';

const CartControlBar = ({
  deleteSoldOut,
  isAllSelected,
  checkAll,
  deleteSelected,
}) => {
  return (
    <div className="cart-chk">
      <div className="left-box">
        <label className="inp-chk">
          <input
            type="checkbox"
            id="check-all"
            defaultChecked={isAllSelected}
            onClick={checkAll}
          />
          <span className="inp-box">
            <i className="fa-solid fa-check" />
          </span>
          <label htmlFor="check-all">전체선택</label>
        </label>
      </div>
      <div className="right-box">
        <button
          type="button"
          className="del-btn soldout-del-btn"
          title="품절 삭제"
          onClick={deleteSoldOut}
        >
          품절 삭제
        </button>
        <button
          type="button"
          className="del-btn sel-del-btn"
          title="선택 삭제"
          onClick={deleteSelected}
        >
          선택 삭제
        </button>
      </div>
    </div>
  );
};

export default CartControlBar;
