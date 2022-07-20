import React from 'react';
import './Login.scss';
const Login = () => {
  return (
    <div>
      <div className="login-header">
        <div className="login-nav">
          <h1>로그인</h1>
          <button type="submit">
            <i class="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
      <section className="body">
        <div className="login-container">
          <div className="header">
            <img src="../images/login/LocTea.png" alt="" />
          </div>
          <form className="content">
            <div className="inputs">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="아이디 입력"
              />
              <input
                type="password"
                id="pw"
                name="pw"
                placeholder="비밀번호 입력(영문,숫자,특수문자 조합)"
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              아이디 저장
            </div>
            <div className="button-area">
              <button disabled>로그인</button>
            </div>
          </form>
          <div className="login-footer-border">
            <div className="login-footer">
              <div className="login-footer-text">
                <img className="phone" src="../images/login/phone.png" alt="" />
                <p>휴대폰</p> <p>로그인</p>
              </div>
              <div className="login-footer-text">
                <img src="../images/login/Kakao.png" alt="" />
                <p>카카오</p> <p>로그인</p>
              </div>
              <div className="login-footer-text">
                <img src="../images/login/naver.png" alt="" />
                <p>네이버</p> <p>로그인</p>
              </div>
              <div className="login-footer-text">
                <img src="../images/login/more.png" alt="" />
                <p>더보기</p>
                <div className="hiddenT">d</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
