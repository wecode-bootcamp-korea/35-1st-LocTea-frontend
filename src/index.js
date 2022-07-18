import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/reset.scss';
import '../src/styles/common.scss';

import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
