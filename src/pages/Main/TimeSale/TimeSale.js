import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeSale.scss';

const TimeSale = ({ timeSaleData }) => {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());
  const navigate = useNavigate();
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const { id, discount, price, thumbnail_images, title } = timeSaleData;
  const goToItemDetail = () => navigate(`/itemdetail/${id}`);
  if (Object.keys(timeSaleData).length === 0) return <>Loading...</>;
  return (
    <div className="timesale">
      <div className="timesale-main">
        <div className="timesale-left" onClick={goToItemDetail}>
          <div className="left-imgbox">
            <img src={thumbnail_images[0]} alt={title} />
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
              <p>{title}</p>
              <div className="sale-price">
                <div className="sale-percent">{discount}%</div>
                <div className="price-origin">
                  {Number(price).toLocaleString()}
                </div>
                <div className="price-result">
                  {(price * ((100 - discount) / 100)).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timesale-right">
          <div className="right-event">
            <div className="event-imgbox">
              <img
                src="https://images.pexels.com/photos/3723874/pexels-photo-3723874.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              <p className="story-name">록차 스토리</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSale;
