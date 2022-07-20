import React from 'react';
import './Login.scss';
const Login = () => {
<<<<<<< HEAD
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
=======
  return <div />;
>>>>>>> parent of 40a1b22 (ad: 로그인 화면 구현)
};

export default Login;
