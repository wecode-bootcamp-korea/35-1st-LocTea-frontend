import React, { useState } from 'react';
import { HeaderList } from './SliderData';
import BtnSlider from './BtnSlider';

function SliderImg() {
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

  const moveLine = index => {
    setSlideIndex(index);
  };

  return (
    <div className="slider-container">
      {HeaderList.map(info => {
        return (
          <div
            key={info.id}
            className={
              slideIndex === info.id
                ? `slide active-ani num${info.id}`
                : `slide num${info.id}`
            }
          >
            <div className="main-header-img">
              <img
                className={`img${info.id}`}
                src={`../images/main/product${info.id}.png`}
                alt="이미지"
              />
            </div>
            <div className="main-header-text-container">
              <div className="main-header-text">
                <h1>{info.text1}</h1>
                <h2>{info.text2}</h2>
                <h3>{info.text3}</h3>
                <button className="event-btn">이벤트 전체보기</button>
              </div>
            </div>
          </div>
        );
      })}
      ;
      <BtnSlider moveSlide={nextslide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      <div className="under-container">
        {Array.from({ length: HeaderList.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveLine(index + 1)}
            className={
              slideIndex === index + 1 ? 'under-button active' : 'under-button'
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SliderImg;
