import React, { useEffect, useState } from 'react';
import './ItemDetail.scss';

const ItemDetail = () => {
  const [itemData, setItemData] = useState({});
  // 아이템 데이터 state구조
  const [currentTab, setCurrentTab] = useState('상품상세');
  // 현재 탭 state 구조
  const [quantity, setQuantity] = useState(1);
  // 수량 데이터 state구조
  useEffect(() => {
    fetch('data/itemData.json')
      .then(res => res.json())
      .then(data => setItemData(data));
  }, []);
  //목 데이터를 가져와서 아이템 데이터로 설정
  const {
    first_category,
    second_category,
    title,
    description,
    price,
    thumbnail_images,
  } = itemData;
  //구조 분해 할당하여 가독성 향상
  const plusPrice = () => {
    setQuantity(quantity + 1);
  };
  const minusPrice = () => {
    setQuantity(quantity - 1);
  };
  //수량 1씩 증가 및 1씩 감소
  const disabledMinus = quantity < 2;
  //수량이 2보다 작을때 마이너스 안눌리게 설정
  const updateCurrentTab = ({ target }) => {
    const currentTabName = target.innerHTML;
    setCurrentTab(currentTabName);
  };
  //현재 탭에 이름을 부여하도록 설정
  return Object.keys(itemData).length > 0 ? (
    //아이템 데이터가 객체형식이므로 객체의 키값의 길이가 0보다클때 조건부 렌더링
    <>
      <div className="item-detail">
        <div className="item-img-ul">
          <div className="item-img-box">
            <img src={thumbnail_images} alt="상품이미지" />
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
            <div className="item-price-name">
              <strong className="price">{price.toLocaleString()}</strong>
              <span className="won">원</span>
            </div>
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
                <strong>{(price * quantity).toLocaleString()}</strong>
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
        <img
          src="https://cdn.pixabay.com/photo/2021/10/13/09/01/corgi-6705821_960_720.jpg"
          alt="상품상세이미지1"
        />
      </div>
      <div className="explain-imgbox">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/12/17/12/dog-7317820_960_720.jpg"
          alt="상품상세이미지2"
        />
      </div>
      <div className="explain-imgbox">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/10/17/46/dog-7313456_960_720.jpg"
          alt="상품상세이미지3"
        />
      </div>
    </>
  ) : (
    <>Loading...</>
  );
};

export default ItemDetail;
