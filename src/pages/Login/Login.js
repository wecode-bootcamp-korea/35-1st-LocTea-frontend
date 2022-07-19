import React from 'react';
import './Login.scss';
const Login = () => {
  return (
    <div>
      <header>
        <div className="login-nav">
          <h1>로그인</h1>
          <button type="submit">
            <i class="fa-solid fa-xmark" />
          </button>
        </div>
      </header>
      <section className="body">
        <div className="login-container">
          <div className="header">
            <p>아모레퍼시픽 뷰티포인트 통합회원</p>
            <p>아이디로 로그인해주세요.</p>
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
          <div className="footer-border">
            <div className="footer">
              <i class="fa-solid fa-mobile-screen" />
              <img src="../images/login/Kakao.png" alt="" />
              <img src="../images/login/naver.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
