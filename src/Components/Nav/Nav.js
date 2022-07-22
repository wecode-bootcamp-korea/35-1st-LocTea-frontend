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
    <div className="nav-container">
      <div className="nav-header">
        <div className="nav-inner-box">
          <div className="left-box">
            <h1 className="header">록차</h1>
            <div className="nav-title-box">
              <div className="title-item-box">
                <button className="nav-title">제품</button>
                <div className="nav-item-box">
                  <div className="nav-item-title">
                    <ITEMTYPE values={items} />
                  </div>
                </div>
              </div>
              <div className="title-item-box">
                <button className="nav-title">선물추천</button>
              </div>
              <div className="title-item-box">
                <button className="nav-title">다다일상</button>
              </div>
              <div className="title-item-box">
                <button className="nav-title">브랜드</button>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="right-icons">
              <div className="icon">
                <i class="fa-solid fa-magnifying-glass" />
              </div>
              <div className="icon">
                <i class="fa-solid fa-cart-shopping" />
              </div>
              <div className="icon">
                <i class="fa-solid fa-ellipsis-vertical" />
              </div>
            </div>
            <div className="right-content">
              <div className="nav-login">로그인 </div>
              <div className="nav-login">Korean</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //     <div className="nav-all">
    //       <header id="nav-header" className="nav-header-fixed">
    //         <div className="wrapper">
    //           <div className="inner-box">
    //             <div className="left-box">
    //               <h1 className="loctea">
    //                 <div className="loctea-white">록차 </div>
    //               </h1>
    //               <nav className="nav">
    //                 <ul className="nav-list-dep1">
    //                   <li className="item-dep1">
    //                     <button className="link-text">
    //                       제품
    //                       <div className="category-title">
    //                         <ITEMTYPE values={items} />
    //                       </div>
    //                     </button>
    //                   </li>
    //                   <li className="item-dep1-no-child">
    //                     <p className="link-text">선물추천</p>
    //                   </li>
    //                   <li className="item-dep1">
    //                     <p className="link-text">다다일상</p>
    //                   </li>
    //                   <li className="item-dep1">
    //                     <p className="link-text">브랜드</p>
    //                   </li>
    //                 </ul>
    //               </nav>
    //             </div>
    //           </div>
    //         </div>
    //       </header>
    //     </div>
    //   );
    // }
  );
}
export default Nav;
