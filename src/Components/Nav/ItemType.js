import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ItemType({ values }) {
  const navigate = useNavigate();
  return values.map(info => {
    return (
      <div key={info.first_category_id} className="category-box">
        <button
          className="item-title-button"
          onClick={() =>
            navigate(`/itemlist/first-category/${info.first_category_id}`)
          }
        >
          {info.title}
        </button>
        <div className="item-lists-container">
          {info.second_categories.map(input => {
            return (
              <li key={input.second_category_id}>
                <div
                  className="item"
                  onClick={() =>
                    navigate(
                      `/itemlist/second-category/${input.second_category_id}`
                    )
                  }
                >
                  {input.title}
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  });
}
