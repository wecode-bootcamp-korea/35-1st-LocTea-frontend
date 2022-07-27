import React, { useState, useEffect } from 'react';
import './BtnForUp.scss';

const BtnForUp = () => {
  const [scrollY, setScrollY] = useState(0);
  const isBtnActive = scrollY > 200;

  const fadeUpBtn = () => {
    setScrollY(window.pageYOffset);
  };

  const scrollingToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeUpBtn);

    return () => {
      window.removeEventListener('scroll', fadeUpBtn);
    };
  }, []);

  return (
    <button
      className={isBtnActive ? 'btnForUp active' : 'btnForUp'}
      onClick={scrollingToTop}
    >
      <img src="/images/Footer/up-arrow.png" alt="up" />
    </button>
  );
};

export default BtnForUp;
