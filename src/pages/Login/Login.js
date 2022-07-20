import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

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

  const validation = idRegExp.test(person.id) && passwordRegExp.test(person.pw);

  const navigate = useNavigate();

  const signIn = () => {
    fetch('http://10.58.5.132:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: person.id,
        password: person.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        navigate('/main');
      });
  };

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
          <form className="content" onChange={handleInput}>
            <div className="inputs">
              <input
                type="text"
                name="id"
                value={person.id}
                placeholder="아이디 입력"
              />
              <input
                type="password"
                name="pw"
                value={person.pw}
                placeholder="비밀번호 입력(영문,숫자,특수문자 조합)"
              />
            </div>
            <div className="button-area">
              <button disabled={!validation} onClick={signIn}>
                로그인
              </button>
            </div>
          </form>
          <div className="footer-border" />
        </div>
      </section>
    </div>
  );
};

export default Login;
