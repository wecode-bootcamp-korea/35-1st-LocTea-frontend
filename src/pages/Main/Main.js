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
    fetch('http://10.58.7.200:8000/products/list?summer-gift=true')
      .then(res => res.json())
      .then(data => setMainData(data.products));
  }, []);

  useEffect(() => {
    fetch('http://10.58.7.200:8000/products/list?time-sale=true')
      .then(res => res.json())
      .then(data => setTimeSaleData(data.products));
  }, []);

  const weekBestData = () => {
    fetch('http://10.58.7.200:8000/products/list?popular-gift=true')
      .then(res => res.json())
      .then(data => setMainData(data.products));
  };

  const summerData = () => {
    fetch('http://10.58.7.200:8000/products/list?summer-gift=true')
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
