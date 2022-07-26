import React from 'react';

function BtnSlider({ direction, moveSlide }) {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        {direction === 'prev' ? (
          <i className="fa-solid fa-angle-left" />
        ) : (
          <i className="fa-solid fa-chevron-right" />
        )}
      </button>
    </div>
  );
}

export default BtnSlider;
