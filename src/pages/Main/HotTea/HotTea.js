import React, { useState, useEffect } from 'react';
import './HotTea.scss';

const HotTea = () => {
  const [px, setpx] = useState(0);
  const minusPx = () => setpx(px + 200);
  const plusPx = () => setpx(px - 200);

  useEffect(() => {
    setInterval(plusPx, 3000);
  }, []);

  return (
    <>
      <div className="main-hottea-title">
        <h3>오늘은 어떤 차를 마셔볼까요?</h3>
        <button className="main-hottea-summer">여름맞이 선물</button>
        <button className="main-hottea-week">이번 주 인기 제품</button>
      </div>
      <div className="main-hottea-scroll">
        <div className="hottea-left">
          <i className="fa-solid fa-angle-left" onClick={minusPx} />
        </div>
        <div className="hottea">
          <ul
            className="hottea-list"
            style={{ transform: `translate(${px}px, 0)` }}
          >
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/GB/FM/20220609110635898TW.png?quality=80&shrink=240:268"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
            <li>
              <img
                src="https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80"
                alt=""
              />
              <h6>산호섬 아이스티</h6>
              <p>13,000원</p>
            </li>
          </ul>
        </div>
        <div className="hottea-right">
          <i className="fa-solid fa-angle-right" onClick={plusPx} />
        </div>
      </div>
    </>
  );
};

export default HotTea;
