import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TextBox from './TextBox';
import './index.css';
import Maps from './map'
import ContactForm from './ContactForm';

const backgroundImage = <img src="office.avif" className="center" />;

ReactDOM.render(
  <React.StrictMode>
    <div>
     
      <App />
      {backgroundImage}
      <TextBox />
      <Maps/>
      <ContactForm/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

