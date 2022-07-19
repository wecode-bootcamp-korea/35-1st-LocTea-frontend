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
    </div>
  );
};

export default Register;
