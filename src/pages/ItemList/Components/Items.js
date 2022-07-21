import React from 'react';
import './Items.scss';

const Items = () => {
  return (
    <div className="items">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

const ItemCard = () => {
  return (
    <div className="item">
      <img
        src="/images/ItemList/osulocitem.png"
        alt="제품이미지"
        className="imageUnhover"
      />
      <img
        src="/images/ItemList/osulocitemhover.png"
        alt="제품이미지"
        className="imageHover"
      />
      <p>러블리티박스</p>
      <p>20,000원</p>
      <div className="likeComment">
        <div className="likeNumber">
          <i class="fa-regular fa-heart" alt="좋아요" />
          <span>12</span>
        </div>
        <div className="commentNumber">
          <i class="fa-regular fa-comment" alt="댓글" />
          <span>689</span>
        </div>
      </div>
    </div>
  );
};

export default Items;
