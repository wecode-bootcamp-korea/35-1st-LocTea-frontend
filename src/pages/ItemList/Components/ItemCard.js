import React from 'react';

const ItemCard = () => {
  return (
    <div className="item">
      <img src="images/ItemList/osulocitem.png" alt="" />
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

export default ItemCard;
