import React, { useEffect, useState } from 'react';
import './Purchase.scss';

const Purchase = () => {
  const [purchaseData, setPurchaseData] = useState([]);

  const [purchaseInfo, setPurchaseInfo] = useState({
    userName: '',
    sendingName: '',
    sendingPhone: '',
    receiverName: '',
    receiverPhone: '',
    address: '',
    deliveryRequest: '',
    requestPlus: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setPurchaseInfo({ ...purchaseInfo, [name]: value });
  };

  const {
    userName,
    sendingPhone,
    sendingName,
    receiverName,
    receiverPhone,
    address,
    deliveryRequest,
    requestPlus,
  } = purchaseInfo;

  const userSame = e => {
    e.preventDefault();
    setPurchaseInfo({
      ...purchaseInfo,
      receiverName: userName,
      receiverPhone: sendingPhone,
    });
  };

  const handlePhone = e => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
  };

  useEffect(() => {
    fetch('http://10.58.4.175:8000/cart', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(data => setPurchaseData(data.result));
  }, []);
  if (Object.keys(purchaseData).length === 0) return <>Loading...</>;

  const priceArr = purchaseData.map(data => Number(data.price) * data.quantity);

  const discountArr = purchaseData.map(data => {
    return data.price * (data.discount / 100);
  });

  const totalDiscount = discountArr.reduce((x, y) => x + y);

  const totalPrice = priceArr.reduce((x, y) => x + y);

  const deliveryFee = totalPrice > 30000 ? 0 : 2500;

  const postPurchaseInfo = () => {
    fetch('http://10.58.4.175:8000/orders', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        address: address,
        recipient: receiverName,
        recipient_contact: receiverPhone,
        sender: sendingName,
        cart_id: purchaseData[0].cart_id,
      }),
    })
      .then(res => res.json())
      .then(data => data.message === 'SUCCESS' && alert('성공!'));
  };

  const idDisabled =
    userName.length !== 0 &&
    sendingPhone.length === 8 &&
    sendingName.length !== 0 &&
    receiverName.length !== 0 &&
    receiverPhone === 8 &&
    address.length !== 0 &&
    deliveryRequest.length !== 0;

  return (
    <div className="order-page">
      <div className="nonusers">
        <div className="nonusers-title">
          <h2>결제하기</h2>
        </div>
        <div name="form-order" className="form-order" onChange={handleInput}>
          <div className="form-order-left">
            <div className="order-user-info">
              <div className="order-user-title">
                <h6>주문고객정보</h6>
              </div>
              <div className="order-user-name">
                <p>이름</p>
                <input
                  type="text"
                  name="userName"
                  defaultValue={userName}
                  autoComplete="off"
                />
              </div>
              <div className="order-user-phone">
                <p>연락처</p>
                <div className="mobile-number-box">
                  <div className="inp-select-box">
                    <select
                      className="inp-select"
                      name="firstPhone"
                      defaultValue=""
                    >
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                  </div>
                  <span className="hyphen">-</span>
                  <input
                    type="number"
                    className="inp-text mobile-number"
                    title="휴대전화 입력"
                    defaultValue={sendingPhone}
                    placeholder="'-' 없이 휴대폰번호 입력"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="sendingPhone"
                    onInput={handlePhone}
                    maxLength={8}
                    onWheel={function (e) {
                      e.target.blur();
                    }}
                  />
                </div>
              </div>
              <div className="order-user-sendingname">
                <p>보내는 분</p>
                <div className="sendingname-input">
                  <input
                    placeholder="보내는 분 입력(7자이내)"
                    type="text"
                    name="sendingName"
                    defaultValue={sendingName}
                    autoComplete="off"
                    maxLength={7}
                  />
                  <ul className="textbox">
                    <li>
                      보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹
                      처리되어 발송됩니다.
                      <span>
                        예) 위코드 -&gt; 위*드 / 최강록차 -&gt; 최강**
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="delivery-info">
              <div className="delivery-user-title">
                <h6>배송지 정보</h6>
                <button onClick={userSame}>주문 고객과 동일</button>
              </div>
              <div className="delivery-user-name">
                <p>받는 분</p>
                <input
                  type="text"
                  name="receiverName"
                  defaultValue={receiverName}
                  autoComplete="off"
                />
              </div>
              <div className="delivery-user-phone">
                <p>연락처</p>
                <div className="mobile-number-box">
                  <div className="inp-select-box">
                    <select className="inp-select" defaultValue="">
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                  </div>
                  <span className="hyphen">-</span>
                  <input
                    type="number"
                    className="inp-text mobile-number"
                    title="휴대전화 입력"
                    defaultValue={receiverPhone}
                    placeholder="'-' 없이 휴대폰번호 입력"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="receiverPhone"
                    onInput={handlePhone}
                    maxLength={8}
                    onWheel={function (e) {
                      e.target.blur();
                    }}
                  />
                </div>
              </div>
              <div className="delivery-user-home">
                <p>주소</p>
                <input
                  type="text"
                  name="address"
                  defaultValue={address}
                  autoComplete="off"
                />
              </div>
              <div className="delivery-request">
                <p>배송 요청사항</p>
                <div className="delivery-request-detail">
                  <div className="detail-request">
                    <select
                      name="deliveryRequest"
                      defaultValue={deliveryRequest}
                    >
                      <option value="배송 요청사항 선택">
                        배송 요청사항 선택
                      </option>
                      <option value="경비실에 맡겨주세요">
                        경비실에 맡겨주세요
                      </option>
                      <option value="배송전에 미리 연락주세요">
                        배송전에 미리 연락주세요
                      </option>
                      <option value="직접입력">직접입력</option>
                    </select>
                    <i className="fa-solid fa-angle-down" />
                  </div>
                  {deliveryRequest === '직접입력' && (
                    <input
                      type="text"
                      name="requestPlus"
                      defaultValue={requestPlus}
                      autoComplete="off"
                    />
                  )}
                </div>
              </div>
              <div className="delivery-items">
                <div className="delivery-items-title">
                  <p className="title-left">주문상품</p>
                  <p className="title-right">총 {purchaseData.length}건</p>
                </div>
                {purchaseData.map(
                  ({
                    product_id,
                    thumbnail_images,
                    title,
                    quantity,
                    price,
                    discount,
                  }) => {
                    return (
                      <div className="delivery-items-product" key={product_id}>
                        <div className="product-imgbox">
                          <img src={thumbnail_images} alt="" />
                        </div>
                        <div className="product-name-quantity">
                          <p className="name">{title}</p>
                          <div className="price-quantity">
                            {discount ? (
                              <>
                                <p className="discount-price">
                                  {(price * quantity).toLocaleString()}원
                                </p>
                                <p className="discount">/{discount}%할인</p>
                                <p className="price">
                                  {(
                                    price *
                                    quantity *
                                    ((100 - discount) / 100)
                                  ).toLocaleString()}
                                  원
                                </p>
                              </>
                            ) : (
                              <p className="price">
                                {(price * quantity).toLocaleString()}원
                              </p>
                            )}
                            <p>/{quantity}개</p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="form-order-right">
            <div className="order-right">
              <div className="order-price">
                <p>총 상품 금액</p>
                <p>{totalPrice.toLocaleString()}원</p>
              </div>
              <div className="sale-price">
                <p>할인가격</p>
                <p className="sale-price-red">
                  -{totalDiscount.toLocaleString()}원
                </p>
              </div>
              <div className="delivery-price">
                <p>배송비</p>
                <p>{totalPrice < 30000 ? deliveryFee.toLocaleString() : 0}원</p>
              </div>
              <div className="total-price">
                <p className="price">최종 결제 금액</p>
                <p>
                  <strong>
                    {(
                      totalPrice -
                      totalDiscount +
                      deliveryFee
                    ).toLocaleString()}
                  </strong>
                  원
                </p>
              </div>
              <div className="purchase">
                <button onClick={postPurchaseInfo} disabled={!idDisabled}>
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
