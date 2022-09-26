import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import { API } from '../../Components/Config/Config';

const Register = () => {
  // 초기값 세팅 = 아이디, 비밀번호, 비밀번호 확인, 이름, 생년원일, 휴대폰 번호
  const [person, setPerson] = useState({
    id: '',
    pw: '',
    pwConfirmed: '',
    name: '',
    birth: '',
    phone: '',
    email: '',
  });

  const { id, pw, pwConfirmed, name, birth, phone, email } = person;

  const [passwordShown, setPassword] = useState(true);
  const [passwordShownCon, setPasswordCon] = useState(true);

  const passwordChange = () => {
    setPassword(!passwordShown);
  };

  const passwordChange1 = () => {
    setPasswordCon(!passwordShownCon);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // 아이디, 비밀번호 정규식
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$/;
  const idRegExp = /^[a-z]+[a-z0-9]{4,12}$/;
  const REGEXEMAIL = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

  // 통신 회원가입

  const navigate = useNavigate();

  const signUp = e => {
    e.preventDefault();
    fetch(`${API.signUp}`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        username: id,
        password: pw,
        mobile_number: phone,
        birth_day: birth,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/login');
          alert('회원가입 성공!');
        } else {
          alert('회원가입 실패');
        }
      });
  };

  const isAllValid =
    idRegExp.test(id) &&
    passwordRegExp.test(pw) &&
    pw === pwConfirmed &&
    name.length > 1 &&
    REGEXEMAIL.test(email) &&
    phone;
  return (
    <React.Fragment>
      <section className="register-header">
        <div className="register-nav">
          <h1>회원 가입</h1>
          <button type="submit">
            <i
              onClick={() => navigate('/login')}
              className="fa-solid fa-xmark"
            />
          </button>
        </div>
      </section>
      <section className="register-body">
        <div className="register-container">
          <form className="content" onChange={handleInput}>
            <div className="inputs">
              <input
                className={
                  name === ''
                    ? 'input'
                    : name.length < 2
                    ? 'input wrong'
                    : 'input right'
                }
                type="text"
                name="name"
                maxLength="5"
                value={name}
                placeholder="이름"
                autoComplete="off"
              />
              <div className="message">
                {name === '' ? (
                  ''
                ) : name.length < 2 ? (
                  <p style={{ color: 'red' }}>2글자 이상 입력해주세요!</p>
                ) : (
                  <p style={{ color: '#5aa3da' }}> 환영합니다!</p>
                )}
              </div>
              <input
                className={
                  email === ''
                    ? 'input'
                    : REGEXEMAIL.test(email)
                    ? 'input right'
                    : 'input wrong'
                }
                type="text"
                name="email"
                value={email}
                placeholder="이메일"
                autoComplete="off"
              />
              <div className="message">
                {email === '' ? (
                  ''
                ) : REGEXEMAIL.test(email) ? (
                  <p style={{ color: '#5aa3da' }}>환영합니다!</p>
                ) : (
                  <p style={{ color: 'red' }}>
                    loctea@gmail.com 형식으로 작성해주세요.
                  </p>
                )}
              </div>

              <input
                className={
                  phone === ''
                    ? 'input'
                    : phone.length < 11
                    ? 'input wrong'
                    : 'input right'
                }
                type="text"
                name="phone"
                maxLength="11"
                value={phone}
                placeholder="핸드폰 번호"
                autoComplete="off"
              />
              <input
                type="date"
                className={
                  birth === ''
                    ? 'input date'
                    : birth.length !== 0 && 'input date text right'
                }
                name="birth"
                value={birth}
                min="1900-01-01"
                max="2015-01-01"
                placeholder="생년월일 (yyyy-mm-dd)"
                autoComplete="off"
              />
              <input
                className={
                  id === ''
                    ? 'input'
                    : idRegExp.test(id)
                    ? 'input right'
                    : 'input wrong'
                }
                type="text"
                name="id"
                value={id}
                placeholder="아이디 (영문 또는 숫자 4-12자리)"
                autoComplete="off"
              />
              <div className="message">
                {id === '' ? (
                  <p />
                ) : idRegExp.test(id) ? (
                  <p style={{ color: '#5aa3da' }}>사용가능한 아이디 입니다.</p>
                ) : (
                  <p style={{ color: 'red' }}>
                    4-12사이 영문 또는 숫자만 입력해 주세요.
                  </p>
                )}
              </div>
              <div className="password-shown">
                <input
                  className={
                    pw === ''
                      ? 'input'
                      : passwordRegExp.test(pw)
                      ? 'input right'
                      : 'input wrong'
                  }
                  type={passwordShown ? 'password' : 'text'}
                  name="pw"
                  value={pw}
                  placeholder="비밀번호 입력(영문,숫자,특수문자 조합 8-16자)"
                />

                <i
                  onClick={passwordChange}
                  className={`fa-solid ${
                    passwordShown ? 'fa-eye-slash' : 'fa-eye'
                  }`}
                />
              </div>
              <div className="message">
                {pw === '' ? (
                  ''
                ) : !passwordRegExp.test(pw) ? (
                  <div>
                    <p style={{ color: 'red' }}>
                      영어(소문자),숫자,특수문자를 포함한 8-16자로 입력해주세요
                    </p>
                    <p style={{ color: 'red' }}>조합 8-16자로 입력해주세요</p>
                  </div>
                ) : (
                  <p style={{ color: '#5aa3da' }}>안전한 비밀번호 입니다.</p>
                )}
              </div>
              <div className="password-shown">
                <input
                  className={
                    pwConfirmed === ''
                      ? 'input'
                      : pwConfirmed === pw
                      ? 'input right'
                      : 'input wrong'
                  }
                  type={passwordShownCon ? 'password' : 'text'}
                  id="pw"
                  name="pwConfirmed"
                  value={pwConfirmed}
                  placeholder="비밀번호 확인"
                />
                <i
                  onClick={passwordChange1}
                  className={`fa-solid ${
                    passwordShownCon ? 'fa-eye-slash' : 'fa-eye'
                  }`}
                />
              </div>
              <div className="message">
                {pwConfirmed === '' ? (
                  ''
                ) : pw !== pwConfirmed ? (
                  <p style={{ color: 'red' }}>비밀번호가 다릅니다.</p>
                ) : (
                  <p style={{ color: '#5aa3da' }}>비밀번호가 같습니다.</p>
                )}
              </div>
            </div>
            <div className="button-area">
              <button disabled={!isAllValid} onClick={signUp}>
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
