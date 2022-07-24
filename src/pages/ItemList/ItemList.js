import React, { useEffect, useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import Items from './Components/Items';
import CategoryState from './CategoryState.json';
import './ItemList.scss';

const ItemList = () => {
  const [whichProductRender, setWhichProductRender] = useState({
    category: 'first-category',
    title: '티 제품',
    id: 1,
    button: true,
    className: 'teashop',
  });

  const RenderCategory = e => {
    for (let i = 0; i < CategoryState.length; i++) {
      if (
        CategoryState[i].category === e.target.dataset.category &&
        CategoryState[i].id === Number(e.target.id)
      ) {
        setWhichProductRender(CategoryState[i]);
      }
    }
  };

  // //아이템 스테이트
  const [items, setItems] = useState([]);
  // //데이터 로딩
  useEffect(() => {
    fetch(
      `http://10.58.7.130:8000/products/list?first-category=${whichProductRender.category}=${whichProductRender.id}`
    )
      .then(res => res.json())
      .then(result => setItems(result.result));
  }, [whichProductRender]);

  return (
    <div className="contents">
      <div className="upper">
        <img
          className="upperImage"
          src={`/images/ItemList/${whichProductRender.className}.jpg`}
          alt="상품리스트메인사진"
        />
        <h2>{whichProductRender.title}</h2>
      </div>
      <div className="main">
        <Side RenderCategory={RenderCategory} />
        <article>
          <Order whichProductRender={whichProductRender} />
          <Filter whichProductRender={whichProductRender} items={items} />
          <Items items={items} />
        </article>
      </div>
    </div>
  );
};

export default ItemList;
