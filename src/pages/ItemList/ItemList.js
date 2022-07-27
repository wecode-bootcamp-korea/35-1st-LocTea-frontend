import React, { useEffect, useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import Items from './Components/Items';
import categoryList from './categoryList';
import './ItemList.scss';

const ItemList = () => {
  const [whichProductRender, setWhichProductRender] = useState(categoryList[0]);
  const [total, setTotal] = useState({});

  const renderCategory = e => {
    for (let i = 0; i < categoryList.length; i++) {
      if (
        categoryList[i].category === e.target.dataset.category &&
        categoryList[i].id === Number(e.target.id)
      ) {
        setWhichProductRender(categoryList[i]);
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

  // //데이터 로딩ƒ
  useEffect(() => {
    const whatTypeKeys = Object.keys(whatType);
    const typeKeys = [];
    let typeUrl = '';
    if (whichProductRender.button === false) {
      typeUrl = '';
    } else if (whatType.all === true) {
      typeUrl = '&type=tealeaf&type=pyramid&type=teabag&type=powder';
    } else {
      for (let i = 0; i < whatTypeKeys.length - 1; i++) {
        if (whatType[whatTypeKeys[i]] === true) {
          typeKeys.push(whatTypeKeys[i]);
          for (let i = 0; i < typeKeys.length; i++) {
            typeUrl = typeUrl + `&type=${typeKeys[i]}`;
          }
        }
      }
    }
    fetch(
      `http://10.58.7.200:8000/products/list?${whichProductRender.category}=${whichProductRender.id}&sort=${whatOrder}${typeUrl}`
    )
      .then(res => res.json())
      .then(result => {
        setItems(result.products);
        setTotal(result.total);
      });
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
        <Side renderCategory={renderCategory} />
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
            total={total}
          />
          {items.length > 0 && <Items items={items} />}
        </article>
      </div>
    </div>
  );
};

export default ItemList;
