import React, { useState, useEffect } from 'react';
import HotTea from './HotTea/HotTea';
import Notice from './Notice/Notice';
import TimeSale from './TimeSale/TimeSale';
import Subscribe from './Subscribe/Subscribe';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const [timeSaleData, setTimeSaleData] = useState([]);
  useEffect(() => {
    // fetch('data/summerData.json')
    fetch('http://10.58.7.200:8000/products/list?second-category=5&limit=7')
      .then(res => res.json())
      .then(data => setMainData(data.products));
  }, []);

  useEffect(() => {
    fetch('http://10.58.7.200:8000/products/list?limit=1&sort=discount')
      .then(res => res.json())
      .then(data => setTimeSaleData(data.products));
  }, []);

  const weekBestData = () => {
    fetch(
      'http://10.58.7.200:8000/products/list?first-category=1&limit=7&sort=discount'
    )
      .then(res => res.json())
      .then(data => setMainData(data.products));
  };

  const summerData = () => {
    fetch('http://10.58.7.200:8000/products/list?second-category=5&limit=7')
      .then(res => res.json())
      .then(data => setMainData(data.products));
  };

  return (
    <div>
      <Notice />
      <HotTea data={mainData} summerData={summerData} weekData={weekBestData} />
      <TimeSale timeSaleData={timeSaleData} />
      <Subscribe />
    </div>
  );
};

export default Main;
