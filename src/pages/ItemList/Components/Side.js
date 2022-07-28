import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Side.scss';

const Side = (setWhichProductRender, whichProductRender) => {
  const [whichSelected, setwhichSelected] = useState('teashop');
  const navigate = useNavigate();
  return (
    <div className="side">
      <p className="listTitle">제품</p>
      <ul className="firstMenu">
        <li
          data-category="first-category"
          id="1"
          onClick={e => {
            setwhichSelected('teashop');
            navigate(`/itemlist/${e.target.dataset.category}/${e.target.id}`);
          }}
          className={
            whichSelected === 'teashop'
              ? 'activatedTabTeaShop'
              : 'unactivatedTabTeaShop'
          }
        >
          티 제품
          <div className="secondMenu1">
            <ul>
              <li
                data-category="first-category"
                id="1"
                onClick={e => {
                  setwhichSelected('teashop');
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                전체상품
              </li>
              <li
                data-category="second-category"
                id="1"
                onClick={e => {
                  setwhichSelected('teashop');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                티 세트
              </li>
              <li
                data-category="second-category"
                id="2"
                onClick={e => {
                  setwhichSelected('teashop');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                녹차/말차
              </li>
              <li
                data-category="second-category"
                id="3"
                onClick={e => {
                  setwhichSelected('teashop');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                블렌디드 티
              </li>
              <li
                data-category="second-category"
                id="4"
                onClick={e => {
                  setwhichSelected('teashop');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                허브티
              </li>
              <li
                data-category="second-category"
                id="5"
                onClick={e => {
                  setwhichSelected('teashop');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                밀크티/아이스티
              </li>
            </ul>
          </div>
        </li>
        <li
          data-category="first-category"
          id="2"
          onClick={e => {
            setwhichSelected('teafood');
            navigate(`/itemlist/${e.target.dataset.category}/${e.target.id}`);
          }}
          className={
            whichSelected === 'teafood'
              ? 'activatedTabBakery'
              : 'unactivatedTabBakery'
          }
        >
          티푸드
          <div className="secondMenu2">
            <ul>
              <li
                data-category="first-category"
                id="2"
                onClick={e => {
                  setwhichSelected('teafood');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                전체상품
              </li>
              <li
                data-category="second-category"
                id="6"
                onClick={e => {
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                과자/초콜릿
              </li>
              <li
                data-category="second-category"
                id="7"
                onClick={e => {
                  setwhichSelected('teafood');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                베이커리
              </li>
              <li
                data-category="second-category"
                id="8"
                onClick={e => {
                  setwhichSelected('teafood');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                아이스크림
              </li>
            </ul>
          </div>
        </li>
        <li
          data-category="first-category"
          id="3"
          onClick={e => {
            setwhichSelected('teawear');
            e.stopPropagation();
            navigate(`/itemlist/${e.target.dataset.category}/${e.target.id}`);
          }}
          className={
            whichSelected === 'teawear'
              ? 'activatedTabThemaShop'
              : 'unactivatedTabThemaShop'
          }
        >
          티웨어
          <div className="secondMenu3">
            <ul>
              <li
                data-category="first-category"
                id="3"
                onClick={e => {
                  setwhichSelected('teawear');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                전체상품
              </li>
              <li
                data-category="second-category"
                id="9"
                onClick={e => {
                  setwhichSelected('teawear');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                티팟
              </li>
              <li
                data-category="second-category"
                id="10"
                onClick={e => {
                  setwhichSelected('teawear');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                소도구
              </li>
              <li
                data-category="second-category"
                id="11"
                onClick={e => {
                  setwhichSelected('teawear');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                티푸드/플레이트
              </li>
              <li
                data-category="second-category"
                id="12"
                onClick={e => {
                  setwhichSelected('teawear');
                  e.stopPropagation();
                  navigate(
                    `/itemlist/${e.target.dataset.category}/${e.target.id}`
                  );
                }}
              >
                찻잔
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Side;
