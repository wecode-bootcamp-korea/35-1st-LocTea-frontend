import React, { useState, useEffect } from 'react';
import './HotTea.scss';

const HotTea = () => {
  const [movePx, setMovePx] = useState(0);
  const [teaArr, setTeaArr] = useState([]);
  const [transition, setTransition] = useState('all ease 0.7s');
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectTab, setSelectTab] = useState('여름맞이 선물');

  useEffect(() => {
    setTeaArr(SUMMER_DATA);
  }, []);

  const minusArr = () => {
    const copyArr = [...teaArr];
    const arrPop = copyArr.pop();
    copyArr.unshift(arrPop);
    setTeaArr(copyArr);
  };
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
          onClick={updateSelectTab}
        >
          여름맞이 선물
        </button>
        <button
          className={`main-hottea-summer ${
            selectTab === '이번 주 인기 제품' ? 'on' : 'off'
          }`}
          onClick={updateSelectTab}
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
      'https://www.osulloc.com/upload/kr/ko/adminImage/DF/DY/20200110161302294EE.png?quality=80',
  },
  {
    id: 4,
    name: '산호섬 아이스티4',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/KR/TP/20191213162107079MN.png?quality=80',
  },
  {
    id: 5,
    name: '산호섬 아이스티5',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/SW/RN/20200103141443564RH.png?quality=80',
  },
  {
    id: 6,
    name: '산호섬 아이스티6',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/BS/XP/20220705092306045SP.png?quality=80',
  },
  {
    id: 7,
    name: '산호섬 아이스티7',
    price: '13,000',
    imgSrc:
      'https://www.osulloc.com/upload/kr/ko/adminImage/IE/EF/20220120172110895WE.png?quality=80',
  },
];
