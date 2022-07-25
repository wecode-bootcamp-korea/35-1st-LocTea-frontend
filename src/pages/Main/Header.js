import React from 'react';
import { HeaderList } from './HeaderData';

function HeaderImg() {
  return HeaderList.map(info => {
    return (
      <div key={info.id} className="main-header-wrapper">
        <div className="main-header-img">
          <img src={info.img} alt="이미지" />
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
  });
}

export default HeaderImg;
