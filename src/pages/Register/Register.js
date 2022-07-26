import React, { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // 초기값 세팅 = 아이디, 비밀번호, 비밀번호 확인, 이름, 생년원일, 휴대폰 번호
  const [person, setPerson] = useState({
    id: '',
    pw: '',
    pwConfirmed: '',
    name: '',
    birth: '',
    phone: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // 아이디, 비밀번호 정규식
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$/;
  const idRegExp = /^[a-z]+[a-z0-9]{4,12}$/;

  // 통신 회원가입

  const navigate = useNavigate();

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.1.100:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: person.name,
        username: person.id,
        password: person.pw,
        mobile_number: person.phone,
        birth_day: person.birth,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/login');
          alert('회원가입 성공!');
        } else {
          alert('로그인 실패');
        }
      });
  };

  const validation =
    idRegExp.test(person.id) &&
    passwordRegExp.test(person.pw) &&
    person.pw === person.pwConfirmed &&
    person.name.length > 1 &&
    person.phone;
  return (
    <React.Fragment>
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
          <form className="content" onChange={handleInput}>
            <div className="inputs">
              <input
                type="text"
                name="name"
                maxLength="5"
                value={person.name}
                placeholder="이름"
              />
              <div className="message">
                {person.name === '' ? (
                  ''
                ) : person.name.length < 2 ? (
                  <p style={{ color: 'red' }}>2글자 이상 입력해주세요!</p>
                ) : (
                  <p style={{ color: 'green' }}> 환영합니다!</p>
                )}
              </div>
              <input
                type="text"
                name="phone"
                maxLength="11"
                value={person.phone}
                placeholder="핸드폰 번호"
              />
              <input
                type="date"
                name="birth"
                value={person.birth}
                placeholder="생년월일 (yyyy-mm-dd)"
              />
              <div className="message">
                {person.birth === '' ? (
                  <p />
                ) : person.birth.includes('.') ? (
                  <p style={{ color: 'red' }}>
                    "2000-01-01" 형태로 입력해주세요.
                  </p>
                ) : (
                  ''
                )}
              </div>
              <input
                type="text"
                name="id"
                value={person.id}
                placeholder="아이디 (영문 또는 숫자 4-12자리)"
              />
              <div className="message">
                {person.id === '' ? (
                  <p />
                ) : idRegExp.test(person.id) ? (
                  <p style={{ color: 'green' }}>사용가능한 아이디 입니다.</p>
                ) : (
                  <p style={{ color: 'red' }}>
                    4-12사이 영문 또는 숫자만 입력해 주세요.
                  </p>
                )}
              </div>
              <div className="password-shown">
                <input
                  type="password"
                  name="pw"
                  value={person.pw}
                  placeholder="비밀번호 입력(영문,숫자,특수문자 조합 8-16자)"
                />

                <i class="fa-solid fa-eye" />
              </div>
              <div className="message">
                {person.pw === '' ? (
                  ''
                ) : !passwordRegExp.test(person.pw) ? (
                  <div>
                    <p style={{ color: 'red' }}>
                      영어(소문자),숫자,특수문자를 포함한 8-16자로 입력해주세요
                    </p>
                    <p style={{ color: 'red' }}>조합 8-16자로 입력해주세요</p>
                  </div>
                ) : (
                  <p style={{ color: 'green' }}>안전한 비밀번호 입니다.</p>
                )}
              </div>
              <input
                type="password"
                id="pw"
                name="pwConfirmed"
                value={person.pwConfirmed}
                placeholder="비밀번호 확인"
              />
              <div className="message">
                {person.pwConfirmed === '' ? (
                  ''
                ) : person.pw !== person.pwConfirmed ? (
                  <p style={{ color: 'red' }}>비밀번호가 다릅니다.</p>
                ) : (
                  <p style={{ color: 'green' }}>비밀번호가 같습니다.</p>
                )}
              </div>
            </div>
            <div className="button-area">
              <button disabled={!validation} onClick={signUp}>
                회원가입
              </button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
