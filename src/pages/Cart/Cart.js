import React, { useState, useEffect } from 'react';
import CartProduct from './components/CartProduct';
import CartPrice from './components/CartPrice';
import './Cart.scss';

function Cart() {
  const [cartList, setCartList] = useState([]);
  // if (cartList.product_id.length === 0) {
  //   setCartList(false);
  // }

  // useEffect(() => {
  //   //data/cartData.json
  //   fetch('http://10.58.7.60:8000/cart', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.token) {
  //         localStorage.setItem('wtw-token', data.token);
  //       }
  //       setCartList(data);
  //     });
  // }, []);
  useEffect(() => {
    //data/cartData.json
    fetch('http://10.58.7.60:8000/cart', {
      method: 'GET',
      headers: { autorizaion: 'access token' },
    })
      .then(res => res.json())
      .then(data => setCartList(data));
  }, []);

  localStorage.setItem('token', cartList.message);

  // spread operator (전개구문) / 불변성
  // const cartListCopy = [...cartList];

  const plusCount = id => {
    // 누른 상품이 어떤 상품인지 알아야 함 ( 상품 id ) => product_id
    // Cart 컴포넌트의 cartList state에서 해당하는 상품의 quantity만 +1 해야 함 => setCartList
    // ㄴ 특정 id를 가지고 있는 요소가 무엇인지 알아내야 함
    // ㄴ 해당 요소의 quantity만 바꿔주는 로직을 구성해야 함

    const selectedIdx = cartList.findIndex(el => el.product_id === id);
    const cartListCopy = [...cartList];
    cartListCopy[selectedIdx].quantity += 1;
    setCartList(cartListCopy);
  };

  const minusCount = id => {
    const selectedIdx = cartList.findIndex(el => el.product_id === id);
    const cartListCopy = [...cartList];
    cartListCopy[selectedIdx].quantity -= 1;
    setCartList(cartListCopy);
  };

  // const data = cartList.map(x => x.price);
  // console.log(data);
  // const salePrice = data.price - data.price * (data.discount * 0.01);
  // const eachPrice = data.price * data.quantity;
  // const eachSalePrice = data.salePrice * data.quantity;

  return (
    <main className="main shop-cart">
      {/* 타이틀 */}
      <section className="page-tit-box container">
        <h2 className="page-tit">장바구니</h2>
      </section>
      <form id="cart-form" defaultValue="cart">
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
                  {cartList.map(item => {
                    return (
                      <CartProduct
                        key={item.product_id}
                        cartList={item}
                        plusCount={() => plusCount(item.product_id)}
                        minusCount={() => minusCount(item.product_id)}
                      />
                    );
                  })}
                </div>
                {/* 가격 정보 */}
                <div className="content">
                  <div className="cart-price">
                    <CartPrice cartList={cartList} />
                  </div>
                  {/* 주문하기 버튼 */}
                  <div className="cart-btn-box">
                    <div className="cart-btn-item">
                      <button className="cart-btn sel-buy">
                        선택상품 주문
                      </button>
                      <button className="cart-btn all-buy">
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
