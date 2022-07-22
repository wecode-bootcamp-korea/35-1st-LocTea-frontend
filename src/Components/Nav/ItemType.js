import React from 'react';

export default function ITEMTYPE({ values }) {
  return (
    Object.keys(values).length !== 0 &&
    values.map(info => {
      return (
        <div key={info.first_category_id} className="category-box">
          <button className="item-title-button">{info.title}</button>
          <button>
            <div className="item-lists-container">
              {info.second_categories.map(input => {
                return (
                  <li key={input.second_category_id}>
                    <button className="item">{input.title}</button>
                  </li>
                );
              })}
            </div>
          </button>
        </div>
      );
    })
  );
}
