import React from 'react';
import './Register.scss';
const Register = () => {
  return (
    <div>
      {' '}
      <section className="register-header">
        <div className="register-nav">
          <h1>회원 가입</h1>
          <button type="submit">
            <i class="fa-solid fa-xmark" />
          </button>
        </div>
      </section>
      <section className="register-body">
        <div className="register-container">
          <div className="header-box">
            <div className="header">기본정보 (필수)</div>
            <div className="header-content-container">
              <div className="header-content">
                <p className="info-needed">이름</p>
                <input type="text" className="info-received" />
              </div>
              <div className="header-content">
                <p className="info-needed">휴대폰 번호</p>
                <input type="text" className="info-received" />
              </div>
              <div className="header-content">
                <p className="info-needed">생년월일</p>
                <input
                  type="date"
                  id="start"
                  min="1900.01.01"
                  max="2015.12.31"
                  className="info-received"
                />
              </div>
            </div>
          </div>
          <form className="content">
            <div className="inputs">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="아이디 (영문 또는 숫자 4-12자)"
              />
              <input
                type="password"
                id="pw"
                name="pw"
                placeholder="비밀번호 입력(영문,숫자,특수문자 조합 8-16자)"
              />
              <input
                type="password"
                id="pw"
                name="pw"
                placeholder="비밀번호 확인"
              />
            </div>
            <div className="button-area">
              <button disabled>회원가입</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
