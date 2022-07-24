import React, { useEffect, useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import Items from './Components/Items';
import CategoryState from './CategoryState.json';
import './ItemList.scss';

const ItemList = () => {
  const [whichProductRender, setWhichProductRender] = useState(
    CategoryState[0]
  );

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

  const [whatOrder, setWhatOrder] = useState('new-arrival');

  const [whatType, setWhatType] = useState({
    tealeaf: false,
    pyramid: false,
    teabag: false,
    powder: false,
    all: true,
  });

  // //아이템 스테이트
  const [items, setItems] = useState([]);
  // //데이터 로딩
  useEffect(() => {
    const whatTypeKeys = Object.keys(whatType);
    const typeKeys = [];
    let typeUrl;
    for (let i = 0; i < whatTypeKeys.length - 1; i++) {
      if (whatType[whatTypeKeys[i]] === true) {
        typeKeys.push(whatTypeKeys[i]);
        typeUrl = typeKeys.toString();
      }
    }
    if (whatType.all === true) {
      typeUrl = 'tealeaf,pyramid,teabag,powder';
    }
    console.log(typeUrl);
    fetch(
      `http://10.58.7.130:8000/products/list?first-category=${whichProductRender.category}=${whichProductRender.id}&sort=${whatOrder}&type=${typeUrl}`
    )
      .then(res => res.json())
      .then(result => setItems(result.result));
  }, [whichProductRender, whatOrder, whatType]);

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
          <Order
            whichProductRender={whichProductRender}
            whatOrder={whatOrder}
            setWhatOrder={setWhatOrder}
          />
          <Filter
            whichProductRender={whichProductRender}
            items={items}
            whatType={whatType}
            setWhatType={setWhatType}
          />
          <Items items={items} />
        </article>
      </div>
    </div>
  );
};

export default ItemList;
