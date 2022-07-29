import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartControlBar from './components/CartControlBar';
import CartProduct from './components/CartProduct';
import CartPrice from './components/CartPrice';
import './Cart.scss';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://3.36.114.254:8000/cart', {
      method: 'GET',
      headers: { authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(data => {
        const idList = data.result.map(({ product_id }) => product_id);
        setCartList(data.result);
        setSelectedList(idList);
      });
  }, []);

  const selectedProducts = [];
  cartList.forEach(product => {
    if (selectedList.includes(product.product_id)) {
      selectedProducts.push({
        id: product.product_id,
        price: product.price,
        discount: product.discount,
        quantity: product.quantity,
        cart_id: product.cart_id,
      });
    }
  });
  const letorder = () => {
    navigate('/order');
  };

  const cartListCopy = [...cartList];

  //수량 증가
  const plusCount = id => {
    const selectedIdx = cartList.findIndex(el => el.product_id === id);
    cartListCopy[selectedIdx].quantity += 1;

    fetch('http://3.36.114.254:8000/cart', {
      method: 'PATCH',
      headers: { authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        cart_id: cartListCopy[selectedIdx].cart_id,
        quantity: cartListCopy[selectedIdx].quantity,
      }),
    });

    setCartList(cartListCopy);
  };

  //수량 감소
  const minusCount = id => {
    const selectedIdx = cartList.findIndex(el => el.product_id === id);
    cartListCopy[selectedIdx].quantity -= 1;
    fetch('http://3.36.114.254:8000/cart', {
      method: 'PATCH',
      headers: { authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        cart_id: cartListCopy[selectedIdx].cart_id,
        quantity: cartListCopy[selectedIdx].quantity,
      }),
    });

    setCartList(cartListCopy);
  };

  //품절 삭제
  const deleteSoldOut = () => {
    setCartList(cartListCopy.filter(cartListCopy => cartListCopy.stock !== 0));
  };
  // const cartId = cartList.map(data => data.cart_id);

  //선택 삭제
  // const deleteSelected = () => {
  //   const filteredList = cartList.filter(
  //     product => !selectedList.includes(product.product_id)
  //   );

  //   fetch('http://3.36.114.254:8000/cart', {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('access_token'),
  //     },
  //     body: JSON.stringify({
  //       cart_id: cartId[0],
  //     }),
  //   }).then(res => {
  //     if (res.status === 200) {
  //       alert('삭제가 완료되었습니다.');
  //       setCartList(filteredList);
  //       setSelectedList([]);
  //     } else {
  //       alert('다시 시도해주세요!');
  //     }
  //   });
  // };

  //선택한 상품아이디를 배열로 반환
  const selectProduct = id => {
    if (selectedList.includes(id)) {
      setSelectedList(selectedList.filter(productId => productId !== id)); // 체크 해제할 시 SelectedList에서 해당 id값이 `아닌` 값만 배열에 넣기
    } else {
      setSelectedList(selectedList.concat(id)); // 체크할 시 SelectedList에 id값 넣기
    }
  };

  //전체 선택/해제
  const checkAll = () => {
    if (isAllSelected) {
      setSelectedList([]);
    } else {
      setSelectedList(cartList.map(({ product_id }) => product_id));
    }
  };
  const selectedArr = () => {
    const filteredList = cartList.filter(
      product => !selectedList.includes(product.product_id)
    );

    selectedProducts.map(data => {
      return fetch('http://3.36.114.254:8000/cart', {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        body: JSON.stringify({
          cart_id: data.cart_id,
        }),
      }).then(res => {
        if (res.status === 200) {
          setCartList(filteredList);
          setSelectedList([]);
        } else {
          alert('다시 시도해주세요!');
        }
      });
    });
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
                isAllSelected={isAllSelected}
                checkAll={checkAll}
                selectedArr={selectedArr}
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
                      />
                    );
                  })}
                </ul>
              </div>
              {/* 주문하기 버튼 */}
              <div className="cart-btn-box">
                <div className="cart-btn-item">
                  <button className="cart-btn sel-buy" onClick={letorder}>
                    선택상품 주문
                  </button>
                  <button className="cart-btn all-buy" onClick={letorder}>
                    전체상품 주문
                  </button>
                </div>
              </div>
            </div>
            {/* 가격 정보 */}
            <div className="cart-price">
              <CartPrice
                selectedProducts={selectedProducts}
                letorder={letorder}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Cart;
