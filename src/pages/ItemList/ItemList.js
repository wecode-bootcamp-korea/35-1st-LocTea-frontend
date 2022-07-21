import React, { useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import Items from './Components/Items';
import './ItemList.scss';

const ItemList = () => {
  const [whichProductRender, setWhichProductRender] = useState({
    title: '티 제품',
    id: 1,
    button: true,
    className: 'teashop',
  });

  const RenderTeaShop = () => {
    setWhichProductRender({
      title: '티 제품',
      id: 1,
      button: true,
      className: 'teashop',
    });
  };

  const RenderBakery = () => {
    setWhichProductRender({
      title: '티푸드',
      id: 2,
      button: false,
      className: 'bakery',
    });
  };

  const RenderThemaShop = () => {
    setWhichProductRender({
      title: '라이프스타일',
      id: 3,
      button: false,
      className: 'themashop',
    });
  };

  return (
    <div className="contents">
      <div className={whichProductRender.className}>
        <img
          className="upperImage"
          src={`/images/ItemList/${whichProductRender.className}.png`}
          alt="상품리스트메인사진"
        />
        <h2 className="upperH2">{whichProductRender.title}</h2>
      </div>
      <div className="main">
        <Side
          RenderTeaShop={RenderTeaShop}
          RenderBakery={RenderBakery}
          RenderThemaShop={RenderThemaShop}
        />
        <article>
          <Order whichProductRender={whichProductRender} />
          <Filter whichProductRender={whichProductRender} />
          <Items />
        </article>
      </div>
    </div>
  );
};

export default ItemList;
