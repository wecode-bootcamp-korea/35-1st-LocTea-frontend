import React from 'react';
import { Link } from 'react-router-dom';
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
            discount={item.discount}
          />
        );
      })}
    </div>
  );
};

const ItemCard = ({ id, name, price, thumbnailImage, discount }) => {
  const rand_0_100 = Math.floor(Math.random() * 101);
  const rand_0_99 = Math.floor(Math.random() * 100);
  return (
    <div className="item">
      <Link to={`/itemdetail/${id}`}>
        {name && (
          <>
            <div className="imgWrapper">
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
            </div>
            <div className="itemBottom">
              <div className="nameDiv">
                <p>{name}</p>
              </div>
              <p className="price">
                {(price - (price * discount) / 100).toLocaleString()}원
              </p>
              <div className="discoutnNumber">
                {discount !== 0 && (
                  <>
                    <span className="beforeDiscount">
                      {price.toLocaleString()}원
                    </span>
                    <span className="afterDiscount">({discount}%↓)</span>
                  </>
                )}
              </div>

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
            </div>
          </>
        )}
      </Link>
    </div>
  );
};

export default Items;
