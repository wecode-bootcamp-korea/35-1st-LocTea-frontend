import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EndPage.scss';
const EndPage = () => {
  const navigate = useNavigate();
  return (
    <div className="end-page">
      <div>
        <img
          onClick={() => navigate('/')}
          className="imgbox"
          src="/images/EndPage/Screenshot 2022-07-28 at 8.34.08 PM.png"
          alt="마무리이미지"
        />
      </div>
    </div>
  );
};

export default EndPage;
