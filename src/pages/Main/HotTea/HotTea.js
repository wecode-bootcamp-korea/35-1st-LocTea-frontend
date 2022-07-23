import React, { useState, useEffect } from 'react';
import './HotTea.scss';

const HotTea = () => {
  const [movePx, setMovePx] = useState(0);
  const [teaArr, setTeaArr] = useState([]);
  const [transition, setTransition] = useState('all ease 0.7s');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setTeaArr(SUMMER_DATA);
    // autoScroll();
  }, []);

  const minusArr = () => {
    const copyArr = [...teaArr];
    const arrPop = copyArr.pop();
    copyArr.unshift(arrPop);
    setTeaArr(copyArr);
  };

  // const autoScroll = () => setInterval(() => plusPx(), 5000);

  const minusPx = () => {
    setTransition('all ease 0.7s');
    setMovePx(movePx + 240);
    setIsDisabled(true);

    setTimeout(() => {
      setTransition('none');
      minusArr();
      setMovePx(0);
      setIsDisabled(false);
    }, 700);
  };

  const plusArr = () => {
    const copyArr = [...teaArr];
    const arrPop = copyArr.shift();
    copyArr.push(arrPop);
    setTeaArr(copyArr);
  };

  const plusPx = () => {
    setTransition('all ease 0.7s');
    setMovePx(movePx - 240);
    setIsDisabled(true);

    setTimeout(() => {
      setTransition('none');
      plusArr();
      setMovePx(0);
      setIsDisabled(false);
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
            {teaArr.map(tea => {
              return (
                <li className="items" key={tea.id}>
                  <img src={tea.imgSrc} alt="상품이미지" />
                  <h6>{tea.name}</h6>
                  <p>{tea.price}</p>
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
