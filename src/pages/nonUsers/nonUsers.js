import React from 'react';
import './nonUsers.scss';

const NonUsers = () => {
  return (
    <div className="nonUsers">
      <div className="nonUsers-title">
        <h1>결제하기</h1>
      </div>
      <form name="form-order">
        <div className="form-order-left">
          <div className="order-user-info">
            <div className="order-user-title">
              <h6>주문고객정보</h6>
            </div>
            <div className="order-user-name">
              <p>이름</p>
              <input type="text" />
            </div>
            <div className="order-user-phone">
              <p>휴대전화</p>
              <input type="number" />
            </div>
            <div className="order-user-sendingname">
              <p>보내는 분</p>
              <div className="sendingname-input">
                <input placeholder="보내는 분 입력(7자이내)" type="text" />
                <ul>
                  <li>
                    보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹
                    처리되어 발송됩니다.
                    <span>예) 위코드 -> 위*드 / 최강록차 -> 최강**</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="delivery-info">
            <div className="delivery-user-title">
              <h6>배송지 정보</h6>
              <button>주문 고객과 동일</button>
            </div>
            <div className="delivery-user-name">
              <p>받는 분</p>
              <input type="text" />
            </div>
            <div className="delivery-user-phone">
              <p>연락처</p>
              <input type="number" />
            </div>
            <div className="delivery-user-home">
              <p>주소</p>
              <input type="text" />
            </div>
            <div className="delivery-request">
              <p>배송 요청사항</p>
              <select name="request">
                <option value="배송 요청사항 선택">배송 요청사항 선택</option>
                <option value="경비실에 맡겨주세요">경비실에 맡겨주세요</option>
                <option value="배송전에 미리 연락주세요">
                  배송전에 미리 연락주세요
                </option>
                <option value="직접입력">직접입력</option>
              </select>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="form-order-right" />
      </form>
    </div>
  );
};

export default NonUsers;
