import React from 'react';
import '../Notice/Notice.scss';

const Notice = () => {
  const noticeArr = [
    'Wecode 35기 록차 최고',
    '진짜 최고',
    '진짜 진짜 최고',
    '화이팅',
  ];

  return (
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
  );
};

export default Notice;
