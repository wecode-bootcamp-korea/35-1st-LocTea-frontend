import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemType from './ItemType';
import './Nav.scss';

function Nav() {
  // 통신
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://10.58.3.45:8000/nav')
      .then(res => res.json())
      .then(data => {
        setItems(data.result);
      });
  }, []);

  const token = localStorage.getItem('access_token');
  const logOut = () => {
    localStorage.removeItem('access_token');
    alert('로그아웃 되었습니다.');
  };

  // 마우스 호버
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [LoginisHovering, setLoginIsHovering] = useState(false);

  const LoginHandleMouseOver = () => {
    setLoginIsHovering(true);
  };

  const LoginHandleMouseOut = () => {
    setLoginIsHovering(false);
  };

  return (
    <div className="nav-container">
      <div className={isHovering ? 'nav-header white' : 'nav-header'}>
        <div className="nav-inner-box">
          <div className="left-box">
            <h1 className="header" onClick={() => navigate('/')}>
              록차
            </h1>
            <div className="nav-title-box">
              <div
                className="title-item-box"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <button
                  className="nav-title"
                  onClick={() => navigate('/itemlist')}
                >
                  제품
                </button>
              </div>
              <div className="title-item-box">
                <button className="nav-title">선물추천</button>
              </div>
              <div className="title-item-box">
                <button className="nav-title">코드일상</button>
              </div>
              <div className="title-item-box">
                <button className="nav-title">브랜드</button>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="right-icons">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <div className="icon">
                <i className="fa-solid fa-cart-shopping" />
              </div>
              <div className="icon">
                <i className="fa-solid fa-ellipsis-vertical" />
              </div>
            </div>
            <div className="right-content">
              <div
                className="nav-login"
                onMouseEnter={LoginHandleMouseOver}
                onMouseLeave={LoginHandleMouseOut}
              >
                {token ? (
                  <div className="login-text" onClick={logOut}>
                    로그아웃
                  </div>
                ) : (
                  <div
                    className="login-text"
                    onClick={() => navigate('/login')}
                  >
                    로그인
                  </div>
                )}
                {LoginisHovering ? (
                  token ? (
                    <div />
                  ) : (
                    <div className="nav-login-box">
                      <div className="nav-register-box">
                        <div
                          className="text"
                          onClick={() => navigate('/login')}
                        >
                          로그인
                        </div>

                        <div
                          className="text"
                          onClick={() => navigate('/register')}
                        >
                          회원가입
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="nav-login-box up">
                    <div className="nav-register-box">
                      <div className="text">회원가입</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="nav-login">Korean</div>
            </div>
          </div>
        </div>
      </div>
      {isHovering ? (
        <>
          <div className="nav-item-box">
            <div
              className="nav-item-title"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <ItemType values={items} />
            </div>
          </div>
          <div className="vacant" />
        </>
      ) : (
        <>
          <div className="nav-item-box up">
            <div
              className="nav-item-title"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <ItemType values={items} />
            </div>
          </div>
          <div className="vacant none" />
        </>
      )}
    </div>
  );
}
export default Nav;
