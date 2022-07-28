import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import CartControlBar from './components/CartControlBar';
import CartProduct from './components/CartProduct';
import CartPrice from './components/CartPrice';
import './Cart.scss';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    fetch('data/cartData.json', {
      method: 'GET',
      headers: { authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(data => {
        const idList = data.map(({ product_id }) => product_id);
        setCartList(data.result);
        setSelectedList(idList);
      });
  }, []);

  const letOrder = e => {
    e.preventDefault();
    fetch(`http://10.58.0.74:8000/orders`, {
      method: 'POST',
      headers: { authorization: localStorage.getItem('access_token') },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(data => {
        setSelectedList(data);
        Navigate();
      });
  };

  // const removeCart = id => {
  //   fetch(`http://10.58.0.74:8000/carts/cart/${cart_id}`, {
  //     method: 'DELETE',
  //     headers: { autorizaion: localStorage.getItem('access_token') },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       const idList = data.map(({ product_id }) => product_id);
  //       setSelectedList(idList);
  //     });
  // };

  const selectedProducts = [];
  cartList.forEach(product => {
    if (selectedList.includes(product.product_id)) {
      selectedProducts.push({
        id: product.product_id,
        price: product.price,
        discount: product.discount,
        quantity: product.quantity,
      });
    }
  });

  const cartListCopy = [...cartList];

  //수량 증가
  const plusCount = id => {
    const selectedIdx = cartList.findIndex(el => el.product_id === id);
    cartListCopy[selectedIdx].quantity += 1;
    setCartList(cartListCopy);
  };

  //수량 감소
  const minusCount = id => {
    const selectedIdx = cartList.findIndex(el => el.product_id === id);
    cartListCopy[selectedIdx].quantity -= 1;
    setCartList(cartListCopy);
  };

  //품절 삭제
  const deleteSoldOut = () => {
    setCartList(cartListCopy.filter(cartListCopy => cartListCopy.stock !== 0));
  };

  //선택 삭제
  const deleteSelected = id => {
    setSelectedList(selectedList.filter(productId => productId !== id));
  };

  //선택한 상품아이디를 배열로 반환
  const selectProduct = id => {
    if (selectedList.includes(id)) {
      setSelectedList(selectedList.filter(productId => productId !== id)); // 체크 해제할 시 SelectedList에서 해당 id값이 `아닌` 값만 배열에 넣기
    } else {
      setSelectedList(selectedList.concat(id)); // 체크할 시 SelectedList에 id값 넣기
    }
  };

  const checkAll = () => {
    if (isAllSelected) {
      setSelectedList([]);
    } else {
      setSelectedList(cartList.map(({ product_id }) => product_id));
    }
  };

  const isAllSelected = selectedList.length === cartList.length;

  return (
    <main className="main shop-cart">
      {/* 타이틀 */}
      <section className="page-tit-box container">
        <h2 className="page-tit">장바구니</h2>
      </section>
      <form id="cart-form" defaultValue="cart">
        <div className="container">
          <div className="cart-inner">
            <div className="cart-content">
              {/* 장바구니 리스트 상단 */}
              <CartControlBar
                deleteSoldOut={deleteSoldOut}
                deleteSelected={deleteSelected}
                isAllSelected={isAllSelected}
                checkAll={checkAll}
              />
              {/* 장바구니 리스트  */}
              <div className="cart-list">
                <ul className="list">
                  {cartList.map(item => {
                    return (
                      <CartProduct
                        key={item.product_id}
                        cartList={item}
                        plusCount={() => plusCount(item.product_id)}
                        minusCount={() => minusCount(item.product_id)}
                        selectProduct={() => selectProduct(item.product_id)}
                        isChecked={selectedList.includes(item.product_id)}
                        letOrder={letOrder}
                      />
                    );
                  })}
                </ul>
              </div>
              {/* 주문하기 버튼 */}
              <div className="cart-btn-box">
                <div className="cart-btn-item">
                  <button className="cart-btn sel-buy">선택상품 주문</button>
                  <button className="cart-btn all-buy" letOrder={letOrder}>
                    전체상품 주문
                  </button>
                </div>
              </div>
            </div>
            {/* 가격 정보 */}
            <div className="cart-price">
              <CartPrice
                selectedProducts={selectedProducts}
                letOrder={letOrder}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Cart;
