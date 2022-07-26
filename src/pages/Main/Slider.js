import React, { useState } from 'react';
import { HeaderList } from './SliderData';
import BtnSlider from './BtnSlider';

function HeaderImg() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextslide = () => {
    slideIndex !== HeaderList.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };

  const prevSlide = () => {
    slideIndex !== 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(HeaderList.length);
  };

  return (
    <div className="slider-container">
      {HeaderList.map((info, index) => {
        return (
          <div
            key={info.id}
            className={slideIndex === index + 1 ? 'slide active-ani' : 'slide'}
          >
            <div className="main-header-img">
              <img
                src={`../images/main/product${index + 1}.png`}
                alt="이미지"
              />
            </div>
            <div className="main-header-text">
              <h1>다다일상 홈카페</h1>
              <h1>체험권 증정</h1>
              <h2>VIP, VVIP 고객 대상 멤버십 혜택</h2>
              <h2>지금 다다일상 홈카페를 경험해보세요</h2>
              <h3>07.20 ~ 10.31</h3>
              <button className="event-btn">이벤트 전체보기</button>
            </div>
          </div>
        );
      })}
      ;
      <BtnSlider moveSlide={nextslide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}

export default HeaderImg;
