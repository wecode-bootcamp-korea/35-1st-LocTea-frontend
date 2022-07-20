import React from 'react';
import './TimeSale.scss';
const TimeSale = () => {
  return (
    <div className="timesale">
      <div className="timesale-left">
        <div className="left-imgbox">
          <img
            src="https://www.osulloc.com/upload/kr/ko/adminImage/KB/DS/20220622132024173GQ.jpg?quality=80"
            alt="프리미엄 말차 세일"
          />
        </div>
        <div className="left-textbox">
          <div className="textbox-top">
            <p className="textbox-top-left">오늘만 이 가격</p>
            <p className="textbox-top-right">
              <i className="fa-regular fa-clock" />
            </p>
          </div>
          <div className="textbox-bottom">
            <p>프리미엄 말차</p>
            <div className="sale-price">
              <div className="sale-percent">30%</div>
              <div className="price-origin">23,000</div>
              <div className="price-result">16,100원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="timesale-right">
        <div className="right-event">
          <div className="event-imgbox">
            <img
              src="https://www.osulloc.com/upload/kr/ko/adminImage/GO/TL/20220610171140122MX.png?quality=80"
              alt="7월 출석체크 이벤트"
            />
          </div>
          <div className="event-textbox">
            <p className="event-name">7월 출석체크</p>
            <p className="event-time">07.01 - 07.31</p>
          </div>
        </div>
        <div className="right-story">
          <div className="story-imgbox">
            <img
              src="https://www.osulloc.com/kr/ko/static_cdj/images/main/brand_story_img.jpg"
              alt="오설록 스토리"
            />
          </div>
          <div className="story-textbox">
            <p className="story-sidename">TEA FROM JEJU</p>
            <p className="story-name">오설록 스토리</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSale;
