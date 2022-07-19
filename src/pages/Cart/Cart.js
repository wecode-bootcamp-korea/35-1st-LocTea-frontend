import React from 'react';
import CartList from './cartList';
import './Cart.scss';

function Cart() {
  return (
    <main className="main shop-cart">
      {/* 타이틀 */}
      <section className="page-tit-box container">
        <h2 className="page-tit">장바구니</h2>
      </section>
      <form id="cart-form">
        <section className="section">
          <div className="container">
            <div className="cart-inner">
              <div className="content">
                <div className="cart-content">
                  {/* 장바구니 리스트 상단 */}
                  <div className="cart-chk">
                    <div className="left-box">
                      <label className="inp-chk">
                        <input type="checkbox" id="check-all" />
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
                      >
                        품절 삭제
                      </button>
                      <button
                        type="button"
                        className="del-btn sel-del-btn"
                        title="선택 삭제"
                      >
                        선택 삭제
                      </button>
                    </div>
                  </div>
                  {/* 장바구니 리스트  */}
                  <CartList />
                  <ul className="list">
                    <li className="list-item no-cart">
                      장바구니에 담긴 상품이 없습니다.
                    </li>
                  </ul>
                </div>
                {/* 가격 정보 */}
                <div className="content">
                  <div className="cart-price">
                    <div className="price-info">
                      <ul className="list">
                        <li className="item">
                          <p className="item-name">상품 금액</p>
                          <p className="item-val prd-price">
                            +<span className="view-price">0</span>원
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
                  </div>
                  {/* 주문하기 버튼 */}
                  <div className="cart-btn-box">
                    <div className="cart-btn-item">
                      <button className="cart-btn" id="sel-buy">
                        선택상품 주문
                      </button>
                      <button className="cart-btn" id="all-buy">
                        전체상품 주문
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}

export default Cart;
