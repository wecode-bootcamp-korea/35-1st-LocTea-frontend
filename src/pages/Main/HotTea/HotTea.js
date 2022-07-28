import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HotTea.scss';

const movingPixel = 240;

const HotTea = ({ data, summerData, weekData }) => {
  const [movePx, setMovePx] = useState(0);
  const [transition, setTransition] = useState('all ease 0.7s');
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectTab, setSelectTab] = useState('여름맞이 선물');
  const navigate = useNavigate();

  const minusArr = () => {
    const arrPop = data.pop();
    data.unshift(arrPop);
  };

  const minusPx = () => {
    setTransition('all ease 0.7s');
    setMovePx(movePx + movingPixel);
    setIsDisabled(true);

    setTimeout(() => {
      setTransition('none');
      minusArr();
      setMovePx(0);
      setIsDisabled(false);
    }, 700);
  };

  const plusArr = () => {
    const arrPop = data.shift();
    data.push(arrPop);
  };

  const plusPx = () => {
    setTransition('all ease 0.7s');
    setMovePx(movePx - movingPixel);
    setIsDisabled(true);

    setTimeout(() => {
      setTransition('none');
      plusArr();
      setMovePx(0);
      setIsDisabled(false);
    }, 700);
  };

  const updateSelectTab = ({ target }) => {
    const currentTabName = target.innerHTML;
    setSelectTab(currentTabName);
  };
  return (
    <div className="main-hottea">
      <div className="main-hottea-title">
        <h3>오늘은 어떤 차를 마셔볼까요?</h3>
        <button
          className={`main-hottea-summer ${
            selectTab === '여름맞이 선물' ? 'on' : 'off'
          }`}
          onClick={summerData}
          onMouseDown={updateSelectTab}
        >
          여름맞이 선물
        </button>
        <button
          className={`main-hottea-summer ${
            selectTab === '이번 주 인기 제품' ? 'on' : 'off'
          }`}
          onClick={weekData}
          onMouseDown={updateSelectTab}
        >
          이번 주 인기 제품
        </button>
      </div>
      <div className="main-hottea-scroll">
        <div className="hottea-left">
          <button onClick={minusPx} disabled={isDisabled}>
            <i className="fa-solid fa-angle-left" />
          </button>
        </div>

        <div className="hottea">
          <ul
            className="hottea-list"
            style={{
              transform: `translateX(${movePx}px)`,
              transition: `${transition}`,
            }}
          >
            {data.map(({ id, thumbnail_images, title, price, discount }) => {
              return (
                <li className="items" key={id}>
                  <div
                    className="img-box"
                    onClick={() => navigate(`/itemdetail/${id}`)}
                  >
                    <img
                      src={thumbnail_images[0]}
                      alt="상품이미지1"
                      className="items-img"
                    />
                    <div className="hover-box">
                      <img
                        src={thumbnail_images[1]}
                        alt="상품이미지2"
                        className="items-hover-img"
                      />
                    </div>
                  </div>
                  {discount !== '0' ? (
                    <div className="price-box">
                      <h6 onClick={() => navigate(`/itemdetail/${id}`)}>
                        {title}
                      </h6>
                      <div className="sale">
                        <p className="current-price">
                          {Number(price).toLocaleString()}원
                        </p>
                        <div className="sale-price-percent">
                          <p className="sale-price">
                            {(
                              price -
                              (price * discount) / 100
                            ).toLocaleString()}
                            원
                          </p>
                          <p className="sale-percent">{discount}%</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="price-box">
                      <h6>{title}</h6>
                      <p className="nonsale-price">
                        {Number(price).toLocaleString()}원
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hottea-right">
          <button onClick={plusPx} disabled={isDisabled}>
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>

      <div className="hottea-more">
        <button>
          더보기 <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default HotTea;
