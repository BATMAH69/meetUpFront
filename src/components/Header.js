import React from 'react';
import logo from '../logo.svg';

export const Header = ({ text }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{text}</h1>
  </header>
);