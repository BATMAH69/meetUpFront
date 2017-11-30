import React from 'react';
import logo from '../logo.svg';

export const Header = ({ text }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{text}</h1>
    <div style={{height:0, overflow:'hidden'}} >
      <img alt="preview" src="http://meet.cherenov.ru/assets/success.png" />
      <img alt="preview" src="http://meet.cherenov.ru/assets/logo.png" />
    </div>
  </header>
);