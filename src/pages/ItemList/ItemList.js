import React, { useEffect, useState } from 'react';
import Side from './Components/Side';
import Order from './Components/Order';
import Filter from './Components/Filter';
import Items from './Components/Items';
import categoryList from './categoryList';
import './ItemList.scss';
import { useParams } from 'react-router-dom';

const ItemList = () => {
  const [whichProductRender, setWhichProductRender] = useState(categoryList[0]);
  const [total, setTotal] = useState({});

  const params = useParams();

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
      `http://10.58.3.45:8000/products/list?${params.category}=${params.id}&sort=${whatOrder}${typeUrl}`
    )
      .then(res => res.json())
      .then(result => {
        setItems(result.products);
        setTotal(result.total);
      });
  }, [whichProductRender, whatOrder, whatType]);

  useEffect(() => {
    for (let i = 0; i < categoryList.length; i++) {
      if (
        categoryList[i].category === params.category &&
        categoryList[i].id === Number(params.id)
      ) {
        setWhichProductRender(categoryList[i]);
      }
    }
  }, [params]);

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
        <Side
          whichProductRender={whichProductRender}
          setWhichProductRender={setWhichProductRender}
        />
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
