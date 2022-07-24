import React, { useState, useEffect } from 'react';
import HotTea from './HotTea/HotTea';
import Notice from './Notice/Notice';
import TimeSale from './TimeSale/TimeSale';
import Subscribe from './Subscribe/Subscribe';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    fetch('data/summerData.json')
      .then(res => res.json())
      .then(data => setMainData(data));
  }, []);

  return (
    <div>
      <Notice />
      <HotTea data={mainData} />
      <TimeSale />
      <Subscribe />
    </div>
  );
};

export default Main;
