import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetail.scss';
import { BASE_URL, API } from '../../Components/Config/Config';

const ItemDetail = () => {
  const [itemData, setItemData] = useState({});
  const [currentTab, setCurrentTab] = useState('상품상세');
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/products/${params.id}`)
      .then(res => res.json())
      .then(data => setItemData(data.result));
  }, [params.id]);

  const {
    id,
    first_category,
    second_category,
    title,
    description,
    discount,
    price,
    thumbnail_images,
    detail_images,
    stock,
  } = itemData;

  const plusPrice = () => {
    setQuantity(quantity + 1);
  };
  const minusPrice = () => {
    setQuantity(quantity - 1);
  };

  const disabledMinus = quantity < 2;

  const updateCurrentTab = ({ target }) => {
    const currentTabName = target.innerHTML;
    setCurrentTab(currentTabName);
  };

  const discountPrice = price * ((100 - discount) / 100);

  const isData = Object.keys(itemData).length !== 0;

  const navigateFirstCategory = e => {
    Navigate(`/itemlist/first-category/${first_category.id}`);
  };
  const navigateSecondCategory = e => {
    Navigate(`/itemlist/second-category/${second_category.id}`);
  };

  const goCart = () => {
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        product_id: id,
        quantity: quantity,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'CREATE_SUCCESS')
          if (
            window.confirm(
              '장바구니에 물건이 담겼습니다. 장바구니로 이동하시겠습니까?'
            )
          ) {
            alert('장바구니로 이동합니다.');
            Navigate('/cart');
          } else {
            alert('현재 페이지에 머뭅니다.');
          }
        else if (data.message === 'UPDATE_SUCCESS')
          if (
            window.confirm(
              '장바구니에 물건이 추가되었습니다. 장바구니로 이동하시겠습니까?'
            )
          ) {
            alert('장바구니로 이동합니다.');
            Navigate('/cart');
          } else {
            alert('현재 페이지에 머뭅니다.');
          }
        else alert('치지지지지....직....문제가....생김....');
      });
  };
  const goPurchase = () => {
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        product_id: id,
        quantity: quantity,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (
          data.message === 'CREATE_SUCCESS' ||
          data.message === 'UPDATE_SUCCESS'
        ) {
          alert('바로구매 결제페이지로 이동합니다.');
          Navigate('/order');
        } else {
          alert('치지지지지....직....문제가....생김....');
        }
      });
  };
  if (!isData) return <>Loading...</>;

  return (
    <>
      <div className="item-detail">
        <div className="item-img-ul">
          <div className="item-img-box">
            <img src={thumbnail_images[0]} alt="상품이미지" />
          </div>
          <div className="item-ul">
            <li>
              <i className="fa-solid fa-coins" />
              뷰티포인트 {price / 100}P 적립
            </li>
            <li>
              <i className="fa-regular fa-compass" />
              찻잎 {price / 100}P 적립
            </li>
            <li>
              <i className="fa-solid fa-truck" />
              3만원 이상 무료배송
            </li>
            <li>
              <i className="fa-solid fa-gift" />
              (유료)포장가능
            </li>
          </div>
        </div>
        <div className="item-explain-purchase">
          <div className="item-explain">
            <div className="item-categories">
              <ul className="item-categories-link">
                <li onClick={navigateFirstCategory}>{first_category.title}</li>
                <li>
                  <i className="fa-solid fa-angle-right" />
                </li>
                <li onClick={navigateSecondCategory}>
                  {second_category.title}
                </li>
              </ul>
            </div>
            <div className="item-name">
              <h3>{title}</h3>
            </div>
            <div className="item-name-explain">{description}</div>
            {discount === '0' ? (
              <div className="item-price-name">
                <strong className="price">
                  {Number(price).toLocaleString()}
                </strong>
                <span className="won">원</span>
              </div>
            ) : (
              <div className="item-sale-price">
                <div className="price-top">
                  <p>{Number(price).toLocaleString()}</p>
                  <span>원</span>
                </div>
                <div className="price-bottom">
                  <strong className="price">
                    {discountPrice.toLocaleString()}
                  </strong>
                  원<span className="discount-percent">{discount}%</span>
                </div>
              </div>
            )}
          </div>
          <div className="item-number">
            <p>구매수량</p>
            <div className="item-number-button">
              <button onClick={minusPrice} disabled={disabledMinus}>
                <i className="fa-solid fa-minus" />
              </button>
              <p>{quantity}</p>
              <button onClick={plusPrice}>
                <i className="fa-solid fa-plus" />
              </button>
            </div>
          </div>
          <div className="item-purchase">
            <div className="item-purchase-total">
              <p>상품금액 합계</p>
              <div className="item-purchase-total-price">
                <strong>{(discountPrice * quantity).toLocaleString()}</strong>
                <p>원</p>
              </div>
            </div>
            <div className="item-purchase-button">
              {stock !== 0 ? (
                <>
                  <button
                    className="item-purchase-button-cart"
                    onClick={goCart}
                  >
                    장바구니
                  </button>
                  <button
                    className="item-purchase-button-pay"
                    onClick={goPurchase}
                  >
                    바로구매
                  </button>
                </>
              ) : (
                <button className="sold-out">일시품절</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="item-explain">
        <ul className="explain-categories">
          <li
            className={currentTab === '상품상세' ? 'on' : 'off'}
            onClick={updateCurrentTab}
          >
            상품상세
          </li>
          <li
            className={currentTab === '고객리뷰' ? 'on' : 'off'}
            onClick={updateCurrentTab}
          >
            고객리뷰
          </li>
          <li
            className={currentTab === '상품고시정보' ? 'on' : 'off'}
            onClick={updateCurrentTab}
          >
            상품고시정보
          </li>
        </ul>
      </div>
      <div className="product-detail">
        <div className="explain-imgbox">
          <img src={detail_images[0]} alt="상품상세이미지1" />
        </div>
        <div className="explain-imgbox">
          <img src={detail_images[1]} alt="상품상세이미지2" />
        </div>
        <div className="explain-imgbox">
          <img src={detail_images[2]} alt="상품상세이미지3" />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
