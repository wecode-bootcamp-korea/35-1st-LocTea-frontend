import React from 'react';
import HotTea from './HotTea/HotTea';
import Notice from './Notice/Notice';
import TimeSale from './TimeSale/TimeSale';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <Notice />
      <HotTea />
      <TimeSale />
    </div>
  );
};

export default Main;
