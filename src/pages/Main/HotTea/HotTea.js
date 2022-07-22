import React, { useState, useEffect } from 'react';
import './HotTea.scss';

const HotTea = () => {
  const [px, setPx] = useState(0);
  const [arr, setArr] = useState([]);
  const [transition, setTransition] = useState('all ease 0.7s');

  useEffect(() => {
    setArr(SUMMER_DATA);
  }, []);
  const minusArr = () => {
    const arrPop = arr.pop();
    arr.unshift(arrPop);
  };
  const minusPx = () => {
    setTransition('all ease 0.7s');
    setPx(px + 240);

    setTimeout(() => {
      setTransition('none');
      minusArr();
      setPx(0);
    }, 700);
  };

  const plusArr = () => {
    const arrShift = arr.shift();
    arr.push(arrShift);
  };
  const plusPx = () => {
    setTransition('all ease 0.7s');
    setPx(px - 240);

    setTimeout(() => {
      setTransition('none');
      plusArr();
      setPx(0);
    }, 700);
  };

  return (
    <div className="main-hottea">
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
            style={{
              transform: `translateX(${px}px)`,
              transition: `${transition}`,
            }}
          >
            {arr.map(a => {
              return (
                <li key={a.id}>
                  <img src={a.imgSrc} alt="" />
                  <h6>{a.name}</h6>
                  <p>{a.price}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hottea-right">
          <i className="fa-solid fa-angle-right" onClick={plusPx} />
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

const SUMMER_DATA = [
  {
    id: 1,
    name: '산호섬 아이스티1',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/HC/LW/20201027143838409ZN.png?quality=80',
  },
  {
    id: 2,
    name: '산호섬 아이스티2',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80',
  },
  {
    id: 3,
    name: '산호섬 아이스티3',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/item_overImg/6362.png?quality=80&shrink=240:268',
  },
  {
    id: 4,
    name: '산호섬 아이스티4',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/YC/MO/20200911134449649SH.png?quality=80&shrink=240:268',
  },
  {
    id: 5,
    name: '산호섬 아이스티5',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80',
  },
  {
    id: 6,
    name: '산호섬 아이스티6',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80',
  },
  {
    id: 7,
    name: '산호섬 아이스티7',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/RX/RC/20200708145231541HL.png?quality=80',
  },
];
