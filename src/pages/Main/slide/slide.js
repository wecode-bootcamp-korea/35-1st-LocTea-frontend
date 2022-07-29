import React, { useState } from 'react';
import './slide.scss';
import MainSlide1 from './MainSlide1.jpg';
import MainSlide2 from './MainSlide2.jpg';
import MainSlide3 from './MainSlide3.jpg';
import MainSlide4 from './MainSlide4.jpg';
import MainSlide5 from './MainSlide5.jpg';

const Slide = () => {
  const [movPx, setMovPx] = useState(0);
  const moveRight = () => {
    if (movPx < 0) {
      setMovPx(movPx + 280);
    }
  };
  const moveLeft = () => {
    if (-600 < movPx) {
      setMovPx(movPx - 280);
    }
  };
  return (
    <div className="slide-container">
      <div className="contents">
        <h2>코드일상 기록</h2>
        <p className="MainSlideComment">
          차를 통해 달라지는 일상을 만나보세요.
        </p>
        <div className="contents num1">
          <div className="slidePart">
            <i className="fa-regular fa-less-than" onClick={moveRight} />
            <div className="coverSlideContainer">
              <ul
                className="slideContainer"
                style={{
                  transform: `translateX(${movPx}px)`,
                  transition: 'transform 1s',
                }}
              >
                <li className="slideWrapper">
                  <div className="imgWrapper">
                    <img
                      className="slideImage"
                      alt="메인슬라이드이미지"
                      src={MainSlide1}
                    />
                  </div>
                  <p className="bigWord">차가운 것으로 따뜻한 것을 만들다</p>
                  <p className="smallWord">
                    철제 가구 디자이너 양윤선의 티라이프
                  </p>
                </li>
                <li className="slideWrapper">
                  <div className="imgWrapper">
                    <img
                      className="slideImage"
                      alt="메인슬라이드이미지"
                      src={MainSlide2}
                    />
                  </div>
                  <p className="bigWord">주변의 모든 것이 예술이 되는 과정</p>
                  <p className="smallWord">테이핑 아티스트 박건우의 티라이프</p>
                </li>
                <li className="slideWrapper">
                  <div className="imgWrapper">
                    <img
                      className="slideImage"
                      alt="메인슬라이드이미지"
                      src={MainSlide3}
                    />
                  </div>
                  <p className="bigWord">잘 달리는 것보다 즐겁게 달리는 방법</p>
                  <p className="smallWord">러닝 트레이너 임소영의 티라이프</p>
                </li>
                <li className="slideWrapper">
                  <div className="imgWrapper">
                    <img
                      className="slideImage"
                      alt="메인슬라이드이미지"
                      src={MainSlide4}
                    />
                  </div>
                  <p className="bigWord">일과 삶 사이, 자연이라는 쉼표</p>
                  <p className="smallWord">오지 캠퍼 강서구의 티라이프</p>
                </li>
                <li className="slideWrapper">
                  <div className="imgWrapper">
                    <img
                      className="slideImage"
                      alt="메인슬라이드이미지"
                      src={MainSlide5}
                    />
                  </div>
                  <p className="bigWord">온전하게 나만을 위한 채식이야기</p>
                  <p className="smallWord">
                    채식 요리 연구가 신주하의 티라이프
                  </p>
                </li>
              </ul>
            </div>
            <i className="fa-regular fa-greater-than" onClick={moveLeft} />
            <div className="slideBottom">
              <button>차와 함께하는 삶 더 보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
