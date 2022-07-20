import React, { useEffect, useState } from 'react';
import './ItemDetail.scss';

const ItemDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(ITEM_DATA);
  }, []);

  const [quantity, setQuantity] = useState(1);
  const price = data.price;

  const plusPrice = () => {
    setQuantity(quantity + 1);
  };
  const minusPrice = () => {
    setQuantity(quantity - 1);
  };
  const disabledMinus = quantity < 2;

  const [currentTab, setCurrentTab] = useState('상품상세');

  const updateCurrentTab = ({ target }) => {
    const currentTabName = target.innerHTML;
    setCurrentTab(currentTabName);
  };
  return (
    data.length === undefined && (
      <>
        <div className="item-detail">
          <div className="item-img-ul">
            <div className="item-img-box">
              <img src={`${data.imgsrc}`} alt="상품이미지" />
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
                  <li>{data.catagories[0]}</li>
                  <li>
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li>{data.catagories[1]}</li>
                </ul>
              </div>
              <div className="item-name">
                <h3>{data.name}</h3>
              </div>
              <div className="item-name-explain">{data.explain}</div>
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
    )
  );
};

export default ItemDetail;

const ITEM_DATA = {
  id: 1,
  catagories: ['티제품', '티 세트'],
  name: '러블리 티 박스',
  explain:
    '즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록 만의 특별한 블렌디드 티선물 세트',
  price: 20000,
  imgsrc:
    'https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/20211026141423508CU.png?quality=80',
};
