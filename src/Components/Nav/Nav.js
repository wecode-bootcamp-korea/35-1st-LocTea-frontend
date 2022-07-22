import React, { useState, useEffect } from 'react';
import ITEMTYPE from './ItemType';
import './Nav.scss';

function Nav() {
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/data/NavItemType.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.result);
      });
  }, []);

  return (
    <div className="nav-all">
      <header id="nav-header" className="nav-header-fixed">
        <div className="wrapper">
          <div className="inner-box">
            <div className="left-box">
              <h1 className="loctea">
                <div className="loctea-white">록차 </div>
              </h1>
              <nav className="nav">
                <ul className="nav-list-dep1">
                  <li className="item-dep1">
                    <a href="" className="link-text">
                      제품
                      <div className="category-title">
                        <ITEMTYPE values={items} />
                      </div>
                    </a>
                  </li>
                  <li className="item-dep1-no-child">
                    <p className="link-text">선물추천</p>
                  </li>
                  <li className="item-dep1">
                    <p className="link-text">다다일상</p>
                  </li>
                  <li className="item-dep1">
                    <p className="link-text">브랜드</p>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
