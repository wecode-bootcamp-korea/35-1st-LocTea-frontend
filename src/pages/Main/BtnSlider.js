import React from 'react';

function BtnSlider({ direction, moveSlide }) {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        <i
          className={`fa-solid fa-${
            direction === 'prev' ? 'angle-left' : 'chevron-right'
          }`}
        />
      </button>
    </div>
  );
}

export default BtnSlider;
