import React from 'react';
import { useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import './ItemList.scss';

const ItemList = () => {
  return (
    <div className="contents">
      <div className="upperImageTitle">
        <img
          className="upperImage"
          src="/images/ItemList/teashop.png"
          alt="상품리스트메인사진"
        />
        <h2>티 제품</h2>
      </div>
      <div className="main">
        <Side />
        <article>
          <Order />
          <Filter />
          <div className="items">
            <div className="item">
              <img src="images/ItemList/osulocitem.png" alt="" />
              <p>러블리 테디베어</p>
              <p>20,000원</p>
              <div className="likeComment">
                <div className="likeNumber">
                  <i class="fa-regular fa-heart" alt="" />
                  <span>12</span>
                </div>
                <div className="commentNumber">
                  <i class="fa-regular fa-comment" alt="" />
                  <span>689</span>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/ItemList/osulocitem.png" alt="" />
              <p>러블리 테디베어</p>
              <p>20,000원</p>
              <div className="likeComment">
                <div className="likeNumber">
                  <i class="fa-regular fa-heart" alt="" />
                  <span>12</span>
                </div>
                <div className="commentNumber">
                  <i class="fa-regular fa-comment" alt="" />
                  <span>689</span>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/ItemList/osulocitem.png" alt="" />
              <p>러블리 테디베어</p>
              <p>20,000원</p>
              <div className="likeComment">
                <div className="likeNumber">
                  <i class="fa-regular fa-heart" alt="" />
                  <span>12</span>
                </div>
                <div className="commentNumber">
                  <i class="fa-regular fa-comment" alt="" />
                  <span>689</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ItemList;
