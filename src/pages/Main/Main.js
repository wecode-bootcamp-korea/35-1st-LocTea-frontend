import React, { useState, useEffect } from 'react';
import HotTea from './HotTea/HotTea';
import Notice from './Notice/Notice';
import TimeSale from './TimeSale/TimeSale';
import Subscribe from './Subscribe/Subscribe';
import SliderImg from './Slider';
import Slide from './slide/slide';
import './Main.scss';
import { API } from '../../Components/Config/Config';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const [timeSaleData, setTimeSaleData] = useState([]);
  useEffect(() => {
    fetch(`${API.mainData}`)
      .then(res => res.json())
      .then(data => setMainData(data.products));
  }, []);

  useEffect(() => {
    fetch(`${API.timeSaleData}`)
      .then(res => res.json())
      .then(data => setTimeSaleData(data.products));
  }, []);

  const weekBestData = () => {
    fetch(`${API.weekBestData}`)
      .then(res => res.json())
      .then(data => setMainData(data.products));
  };

  const summerData = () => {
    fetch(`${API.summerData}`)
      .then(res => res.json())
      .then(data => setMainData(data.products));
  };

  return (
    <div>
      <div className="main-header">
        <SliderImg />
      </div>
      <Notice />
      <HotTea data={mainData} summerData={summerData} weekData={weekBestData} />
      <TimeSale timeSaleData={timeSaleData} />
      <Subscribe />
      <Slide />
    </div>
  );
};

export default Main;
