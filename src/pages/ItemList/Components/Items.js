import React from 'react';
import './Items.scss';

const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <ItemCard
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            thumbnailImage={item.thumbnail_images}
            types={item.types}
          />
        );
      })}
    </div>
  );
};

const ItemCard = ({ name, price, thumnailImage }) => {
  return (
    <div className="item">
      <img src={thumnailImage[0]} alt="제품이미지" className="imageUnhover" />
      <img src={thumnailImage[1]} alt="제품이미지" className="imageHover" />
      <p>{name}</p>
      <p>{price}</p>
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
