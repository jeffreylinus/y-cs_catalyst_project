// src/Layout.js
import React from 'react';
import './App.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul>
        <a href="../index.html"> home </a>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};


const Layout = ({ children }) => {
  return (
    <div>
      <MenuBar />
      {children}
    </div>
  );
};

export default Layout;
