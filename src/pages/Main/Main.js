import React from 'react';
import HeaderImg from './Header';
import BtnSlider from './BtnSlider';
import './Main.scss';
const Main = () => {
  return (
    <div className="main-header">
      <div className="main-header-container">
        <HeaderImg />
        <BtnSlider />
        <BtnSlider />
      </div>
    </div>
  );
};

export default Main;
