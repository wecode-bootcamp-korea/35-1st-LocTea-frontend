import React from 'react';
import '../Notice/Notice.scss';

const Notice = () => {
  const noticeArr = [
    '🙌Wecode 35기 전원 취직 기원 화이팅~!!!🙌',
    '35기 대표 몸짱 이금관,최재홍💪',
    '35기 프론트 ⭐️김익현⭐️ 최고 류승연 바보🤪',
    '35기 1호커플 이원재 ❤️ 손찬규',
  ];

  return (
    <div className="notice">
      <div className="main-notice">
        <p className="notice">공지사항</p>
        <div className="notice-list-info">
          <ul className="notice-list">
            {noticeArr.map((a, i) => {
              return <li key={i}>{a}</li>;
            })}
          </ul>
          <p className="notice-info">
            <i className="fa-solid fa-angle-right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
