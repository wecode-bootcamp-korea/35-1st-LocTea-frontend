import React from 'react';
import './Subscribe.scss';
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-main">
        <div className="subscribe-title">
          <div className="subscribe-title-top">다다일상 구독</div>
          <div className="subscribe-title-bottom">
            하루 한번, 나를 만나는 시간을 가져보세요.
          </div>
        </div>
        <div className="subscribe-article">
          <div className="article-imgbox">
            <img
              src="https://www.osulloc.com/kr/ko/static_cdj/images/main/dada_img01_pc_1.jpg"
              alt="다다일상 베이직"
            />
          </div>
          <div className="article-textbox">
            <div className="textbox-top">새롭게 만나는 차, 다다일상 베이직</div>
            <div className="textbox-bottom">
              <p>매월</p>16,000원
              <span>배송비 Free</span>
            </div>
          </div>
        </div>
        <div className="subscribe-article">
          <div className="article-imgbox">
            <img
              src="https://www.osulloc.com/upload/kr/ko/adminImage/GY/UH/20220629103940249ZN.jpg?quality=80"
              alt="다다일상 홈카페"
            />
          </div>
          <div className="article-textbox">
            <div className="textbox-top">다르게 만나는 차, 다다일상 홈카페</div>
            <div className="textbox-bottom">
              <p>매월</p>25,000원
              <span>배송비 Free</span>
            </div>
          </div>
        </div>
        <div className="subscribe-article">
          <div className="article-imgbox">
            <img
              src="https://www.osulloc.com/kr/ko/static_cdj/images/main/dada_img03_pc_1.jpg"
              alt="정기배송"
            />
          </div>
          <div className="article-textbox">
            <div className="textbox-top">매일 만나는 차, 정기배송</div>
            <div className="textbox-bottom">
              <span>배송비 Free</span>
            </div>
          </div>
        </div>
        <div className="article-more">
          <button>
            다다일상 자세히 보기
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
