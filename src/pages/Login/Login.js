import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Sns from './Sns';

const Login = () => {
  const [person, setPerson] = useState({
    id: '',
    pw: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  // 아이디, 비밀번호 정규식
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$/;
  const idRegExp = /^[a-z]+[a-z0-9]{4,12}$/;

  const isAllValid = idRegExp.test(person.id) && passwordRegExp.test(person.pw);

  const navigate = useNavigate();

  const [passwordShown, setPassword] = useState(true);

  const passwordChange = () => {
    setPassword(!passwordShown);
  };

  const signIn = e => {
    e.preventDefault();
    fetch('http://10.58.3.45:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: person.id,
        password: person.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/');
          alert('로그인 성공!');
          localStorage.setItem('access_token', result.access_token);
        } else {
          alert('로그인 실패');
        }
      });
  };

  return (
    <div className="login">
      <div className="login-header">
        <div className="login-nav">
          <h1>로그인</h1>
          <button type="submit" onClick={() => navigate('/')}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
      <section className="body">
        <div className="login-container">
          <div className="header">
            <img src="/images/login/LocTea.png" alt="" />
          </div>
          <form className="content" onChange={handleInput}>
            <div className="inputs">
              <input
                type="text"
                name="id"
                value={person.id}
                placeholder="아이디 입력"
                autoComplete="off"
              />
              <div className="password-Show">
                <input
                  type={passwordShown ? 'password' : 'text'}
                  name="pw"
                  value={person.pw}
                  placeholder="비밀번호 입력(영문,숫자,특수문자 조합)"
                />
                <i
                  onClick={passwordChange}
                  className={`fa-solid ${
                    passwordShown ? 'fa-eye-slash' : 'fa-eye'
                  }`}
                />
              </div>
            </div>
            <div className="button-area">
              <button disabled={!isAllValid} onClick={signIn}>
                로그인
              </button>
            </div>
          </form>
          <div className="login-footer-border">
            <div className="login-footer">
              <Sns />
            </div>
          </div>
          <div className="to-register-box">
            <div>아직 회원이 아니세요?</div>
            <div
              className="register-hover"
              onClick={() => navigate('/register')}
            >
              회원가입
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
