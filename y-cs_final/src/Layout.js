// src/Layout.js
import React from 'react';
import './App.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul>
        <li><a href="../index.js">Home</a></li>
        <li><a href="../about.js">About</a></li>
        <li><a href="../contact.js">Contact</a></li>

      </ul>
    </div>
  );
};


const Layout = () => {
  return (
    <div>
      <MenuBar />
    </div>
  );
};

export default Layout;
