import React, { useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import ItemCard from './Components/ItemCard';
import './ItemList.scss';

const ItemList = () => {
  const [whichProductRender, setWhichProductRender] = useState({
    title: '티 제품',
    id: 1,
    button: true,
    classname: 'teashop',
  });

  const RenderTeaShop = () => {
    setWhichProductRender({
      title: '티 제품',
      id: 1,
      button: true,
      classname: 'teashop',
    });
  };

  const RenderBakery = () => {
    setWhichProductRender({
      title: '티푸드',
      id: 2,
      button: false,
      classname: 'bakery',
    });
  };

  const RenderThemaShop = () => {
    setWhichProductRender({
      title: '라이프스타일',
      id: 3,
      button: false,
      classname: 'themashop',
    });
  };

  return (
    <div className="contents">
      <div className={whichProductRender.classname}>
        <img
          className="upperImage"
          src={`/images/ItemList/${whichProductRender.classname}.png`}
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
          <Filter />
          <div className="items">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ItemList;
