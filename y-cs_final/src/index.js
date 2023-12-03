import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const backgroundImage = <img src="office.avif" className="center" />;

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      {backgroundImage}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

