import React from 'react';
import './nonUsers.scss';

const NonUsers = () => {
  return (
    <div className="order-page">
      <div className="nonusers">
        <div className="nonusers-title">
          <h2>결제하기</h2>
        </div>
        <form name="form-order" className="form-order">
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
                <div className="mobile-number-box">
                  <input type="hidden" />
                  <div className="inp-select-box">
                    <select className="inp-select">
                      <option value="010" selected="">
                        010
                      </option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                  </div>
                  <span className="hyphen">-</span>
                  <input
                    type="text"
                    id="user-phone2"
                    className="inp-text mobile-number"
                    title="휴대전화 입력"
                    value=""
                    placeholder="'-' 없이 휴대폰번호 입력"
                    max="8"
                    maxLength="8"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="order-user-sendingname">
                <p>보내는 분</p>
                <div className="sendingname-input">
                  <input placeholder="보내는 분 입력(7자이내)" type="text" />
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
                <button>주문 고객과 동일</button>
              </div>
              <div className="delivery-user-name">
                <p>받는 분</p>
                <input type="text" />
              </div>
              <div className="delivery-user-phone">
                <p>연락처</p>
                <div className="mobile-number-box">
                  <input type="hidden" />
                  <div className="inp-select-box">
                    <select className="inp-select">
                      <option value="010" selected="">
                        010
                      </option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                  </div>
                  <span className="hyphen">-</span>
                  <input
                    type="text"
                    id="user-phone2"
                    className="inp-text mobile-number"
                    title="휴대전화 입력"
                    value=""
                    placeholder="'-' 없이 휴대폰번호 입력"
                    max="8"
                    maxLength="8"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="delivery-user-home">
                <p>주소</p>
                <input type="text" />
              </div>
              <div className="delivery-request">
                <p>배송 요청사항</p>
                <div className="delivery-request-detail">
                  <div className="detail-request">
                    <select name="request">
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
                    <i class="fa-solid fa-angle-down" />
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className="delivery-items">
                <div className="delivery-items-title">
                  <p className="title-left">주문상품</p>
                  <p className="title-right">총 1건</p>
                </div>
                <div className="delivery-items-product">
                  <div className="product-imgbox">
                    <img
                      src="https://www.osulloc.com/upload/kr/ko/adminImage/CS/TM/304_20200103140038011DF.png?quality=80"
                      alt=""
                    />
                  </div>
                  <div className="product-name-quantity">
                    <p className="name">벚꽃향 가득한 올레 20입</p>
                    <div className="price-quantity">
                      <p className="price">{'23000'.toLocaleString()}원</p>
                      <p>/1개</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-order-right">
            <div className="order-right">
              <div className="order-price">
                <p>총 상품 금액</p>
                <p>23,000원</p>
              </div>
              <div className="delivery-price">
                <p>배송비</p>
                <p>2,500원</p>
              </div>
              <div className="total-price">
                <p className="price">최종 결제 금액</p>
                <p>
                  <strong>25,500</strong>원
                </p>
              </div>
              <div className="purchase">
                <button>결제하기</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NonUsers;
