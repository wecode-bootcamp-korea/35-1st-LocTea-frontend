import React, { useState, useEffect } from 'react';
import './BtnForUp.scss';

const BtnForUp = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const fadeUpBtn = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 200) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const scrollingToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', fadeUpBtn);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', fadeUpBtn);
    };
  });

  return (
    <button
      className={BtnStatus ? 'btnForUp active' : 'btnForUp'}
      onClick={scrollingToTop}
    >
      <img src="/images/Footer/up-arrow.png" alt="up" />
    </button>
  );
};

export default BtnForUp;
