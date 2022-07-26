import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.scss';

const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <ItemCard
            key={index}
            id={item.id}
            name={item.title}
            price={Number(item.price)}
            thumbnailImage={item.thumbnail_images}
            types={item.types}
          />
        );
      })}
    </div>
  );
};

const ItemCard = ({ id, name, price, thumbnailImage }) => {
  const navigate = useNavigate();
  const goToItemDetail = e => {
    navigate(`/itemdetail/${e.target.id}`);
  };
  const rand_0_100 = Math.floor(Math.random() * 101);
  const rand_0_99 = Math.floor(Math.random() * 100);
  return (
    <div className="item" id={id} onClick={goToItemDetail}>
      {name && (
        <>
          <img
            src={thumbnailImage[0]}
            alt="제품이미지"
            className="imageUnhover"
          />
          <img
            src={thumbnailImage[1]}
            alt="제품이미지"
            className="imageHover"
          />
          <p>{name}</p>
          <p>{price.toLocaleString()}원</p>
          <div className="likeComment">
            <div className="likeNumber">
              <i class="fa-regular fa-heart" alt="좋아요" />
              <span>{rand_0_100}</span>
            </div>
            <div className="commentNumber">
              <i class="fa-regular fa-comment" alt="댓글" />
              <span>{rand_0_99}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
