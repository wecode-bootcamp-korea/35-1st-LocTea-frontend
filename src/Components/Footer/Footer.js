import React from 'react';
import { Link } from 'react-router-dom';
import BtnForUp from './BtnForUp';
import FOOTER_SNS from './FooterSnsData';
import FOOTER_CATEGORY from './FooterData';
import FOOTER_UTIL from './FooterUtilData';
import './Footer.scss';

function Footer() {
  const token = localStorage.getItem('access_token');
  const logOut = () => {
    localStorage.removeItem('access_token');
    alert('로그아웃 되었습니다.');
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="link-wrap footer-wrap">
          {token ? (
            <Link className="footer-login" to="/" onClick={logOut}>
              로그아웃
            </Link>
          ) : (
            <Link className="footer-login" to="/login">
              로그인
            </Link>
          )}

          {FOOTER_SNS.map(sns => {
            return (
              <Link className="footer-icon" key={sns.id} to={sns.url}>
                <i className={sns.icon} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="footer-mid">
        <div className="footer-wrap">
          <div className="mid-left">
            <div className="cs-center">
              <p className="mid-tit">고객상담센터 · 주문/배송문의</p>
              <p className="tel">080-123-4567</p>
              <p className="runtime">평일 09:30 - 17:00 (점심 11:30 - 13:00)</p>
            </div>
            <div className="bulk-buying">
              <p className="mid-tit">특판, 대량구매 문의</p>
              <a className="email" href="mailto:help@loctea.com">
                help@loctea.com
              </a>
              <p className="kakao-id">카카오톡ID : locteamall</p>
              <p className="runtime">평일 09:30 - 17:00 (점심 11:30 - 13:00)</p>
            </div>
          </div>
          {/* 컴포넌트 */}
          <div className="mid-right">
            <ul className="footer-category">
              {FOOTER_CATEGORY.map(cate => {
                return (
                  <li key={cate.id}>
                    <Link to={cate.url}>
                      <img src={cate.imgUrl} alt={cate.category} />
                      <span>{cate.category}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div className="footer-wrap">
          <div className="bot-left">
            <div className="footer-logo">
              <img src="/images/Footer/LocTea.png" alt="footer logo" />
            </div>
            <div className="util-wrap">
              <ul className="util-menu">
                {FOOTER_UTIL.map(util => {
                  return (
                    <li key={util.id}>
                      <Link to={util.url}>
                        <span>{util.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="footer-txt">
                ㈜ 록차
                <br /> 대표이사:이금관 주소:서울특별시 강남구 테헤란로 427
                위워크 타워(위워크 선릉 2호점) 사업자등록번호: 123-45-6789
                <br />
                통신판매업신고번호:2022-서울용산-1234호 호스팅제공자: ㈜록차
              </p>
              <p className="footer-txt">
                (주)록차는 록차 브랜드를 제외한 입점 브랜드에 대해서는
                통신판매중개자 이며 통신판매의 당사자가 아닙니다.
                <br /> 따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을
                지지 않습니다.
              </p>
            </div>
          </div>
          <div className="bot-right">
            <div className="box">
              <p className="tit">(주)애플페이 구매안전서비스</p>
              <div className="box-item">
                <img src="/images/Footer/applePay.png" alt="apple-pay" />
                <p className="note">
                  고객님의 안전거래를 위해 현금 거래에 대해
                  <br /> 애플페이 에스크로서비스를 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BtnForUp />
    </footer>
  );
}

export default Footer;
