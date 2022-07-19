import React, { useState } from 'react';
import './Register.scss';
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

  const onChange = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // 아이디, 비밀번호 정규식
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$/;
  const idRegExp = /^[a-z]+[a-z0-9]{4,12}$/g;
  // input란 아래 메시지 출력

  function BirthMessage() {
    if (person.birth === '') {
      return <p />;
    }
    if (person.birth.includes('.')) {
      return <p style={{ color: 'red' }}>"1998-07-05" 형태로 입력해주세요.</p>;
    }
  }

  function IdMessage() {
    if (person.id === '') {
      return <p />;
    }
    if (!idRegExp.test(person.id)) {
      return (
        <p style={{ color: 'red' }}>
          4-12사이 대소문자 또는 숫자만 입력해 주세요!
        </p>
      );
    } else {
      return <p style={{ color: 'green' }}>사용가능한 아이디 입니다.</p>;
    }
  }

  function PwMessage() {
    if (person.pw === '') {
      return <p />;
    }
    if (!passwordRegExp.test(person.pw)) {
      return (
        <div>
          <p style={{ color: 'red' }}>
            영어(소문자),숫자,특수문자 중 최소 2가지 이상의 문자
          </p>
          <p style={{ color: 'red' }}>조합 8-16자로 입력해주세요</p>
        </div>
      );
    } else {
      return <p style={{ color: 'green' }}>'안전한 비밀번호 입니다.</p>;
    }
  }

  function PwConfirmedMessage() {
    if (person.pwConfirmed === '') {
      return <p />;
    }
    if (person.pw !== person.pwConfirmed) {
      return <p style={{ color: 'red' }}>비밀번호가 다릅니다.</p>;
    } else {
      return <p style={{ color: 'green' }}>비밀번호가 같습니다.</p>;
    }
  }

  // 통신 회원가입
  let signUp = () => {
    fetch('http://10.58.5.132:8000/users/signup', {
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
      .then(result => console.log('결과: ', result));
  };

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
          <form className="content" onChange={onChange}>
            <div className="inputs">
              <input
                type="text"
                className="info-received"
                name="name"
                maxLength="5"
                value={person.name}
                placeholder="이름"
              />
              <input
                type="text"
                className="info-received"
                name="phone"
                maxLength="11"
                value={person.phone}
                placeholder="핸드폰 번호"
              />
              <input
                type="number"
                min="1900.01.01"
                max="2015.12.31"
                className="info-received"
                name="birth"
                value={person.birth}
                placeholder="생년월일 (year-mm-dd)"
              />
              <div className="message">
                <BirthMessage />
              </div>
              <input
                type="text"
                name="id"
                value={person.id}
                placeholder="아이디 (영문 또는 숫자 4-12자리)"
              />
              <div className="message">
                <IdMessage />
              </div>
              <input
                type="password"
                name="pw"
                value={person.pw}
                placeholder="비밀번호 입력(영문,숫자,특수문자 조합 8-16자)"
              />
              <div className="message">
                <PwMessage />
              </div>
              <input
                type="password"
                id="pw"
                name="pwConfirmed"
                value={person.pwConfirmed}
                placeholder="비밀번호 확인"
              />
              <div className="message">
                <PwConfirmedMessage />
              </div>
            </div>
            <div className="button-area">
              <button
                disabled={
                  !(
                    passwordRegExp.test(person.pw) &&
                    person.pw === person.pwConfirmed &&
                    idRegExp.test(person.id) &&
                    person.name &&
                    person.phone
                  )
                }
                onClick={signUp}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
