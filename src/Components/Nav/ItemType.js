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
            navigate(`/products/list?first-category=${info.first_category_id}`)
          }
        >
          {info.title}
        </button>
        <button>
          <div className="item-lists-container">
            {info.second_categories.map(input => {
              return (
                <li key={input.second_category_id}>
                  <button
                    className="item"
                    onClick={() =>
                      navigate(
                        `/products/list?second-category=${input.second_category_id}`
                      )
                    }
                  >
                    {input.title}
                  </button>
                </li>
              );
            })}
          </div>
        </button>
      </div>
    );
  });
}
