import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import './ItemDetail.scss';

const ItemDetail = () => {
  const [itemData, setItemData] = useState({});
  const [currentTab, setCurrentTab] = useState('상품상세');
  const [quantity, setQuantity] = useState(1);
  // const params = useParams();

  useEffect(() => {
    // fetch(`http://10.58.7.130:8000/products/${params.id}`)
    fetch('/data/itemData.json')
      .then(res => res.json())
      .then(data => setItemData(data));
  }, []);

  const {
    first_category,
    second_category,
    title,
    description,
    discount,
    price,
    thumbnail_images,
    detail_images,
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
                <li>{first_category}</li>
                <li>
                  <i className="fa-solid fa-angle-right" />
                </li>
                <li>{second_category}</li>
              </ul>
            </div>
            <div className="item-name">
              <h3>{title}</h3>
            </div>
            <div className="item-name-explain">{description}</div>
            {!discount ? (
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
              <button className="item-purchase-button-cart">장바구니</button>
              <button className="item-purchase-button-pay">바로구매</button>
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
      <div className="explain-imgbox">
        <img src={detail_images[0]} alt="상품상세이미지1" />
      </div>
      <div className="explain-imgbox">
        <img src={detail_images[1]} alt="상품상세이미지2" />
      </div>
      <div className="explain-imgbox">
        <img src={detail_images[2]} alt="상품상세이미지3" />
      </div>
    </>
  );
};

export default ItemDetail;
