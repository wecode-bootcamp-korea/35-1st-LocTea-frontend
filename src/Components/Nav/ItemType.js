import React from 'react';

export default function ITEMTYPE({ values }) {
  console.log(values);
  return (
    Object.keys(values).length !== 0 &&
    values.map(info => {
      return (
        <div key={info.first_category_id} className="category-box">
          <a href={info.href}>{info.title}</a>
          <a href="" className="link-text">
            {info.second_categories.map(input => {
              return (
                <li>
                  <a href="" className="link-text">
                    {input.title}
                  </a>
                </li>
              );
            })}
          </a>
        </div>
      );
    })
  );
}
