import React, { useState, useEffect } from 'react';
import './TimeSale.scss';

const TimeSale = () => {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="timesale">
      <div className="timesale-main">
        <div className="timesale-left">
          <div className="left-imgbox">
            <img
              src="https://www.osulloc.com/upload/kr/ko/adminImage/RD/LF/20220622133041132VS.jpg?quality=80"
              alt="벚꽃향 가득한 올레 20입 세일"
            />
          </div>
          <div className="left-textbox">
            <div className="textbox-top">
              <p className="textbox-top-left">오늘만 이 가격</p>
              <p className="textbox-top-right">
                <i className="fa-regular fa-clock" />
                {hour < 10 ? '0' + hour : hour}:
                {minute < 10 ? '0' + minute : minute}:
                {second < 10 ? '0' + second : second}
              </p>
            </div>
            <div className="textbox-bottom">
              <p>벚꽃향 가득한 올레 20입</p>
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
    </div>
  );
};

export default TimeSale;
