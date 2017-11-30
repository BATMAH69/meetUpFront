import React from 'react';
import logo from '../logo.svg';

export const Header = ({ text }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{text}</h1>
    <div style={{height:0, overflow:'hidden'}} >
      <img alt="preview" src="http://img11.hostingpics.net/pics/999033vaultboyvectorbybac0nbr0nyd5lo6mw.png" />
      <img alt="preview" src="https://image.playerauctions.com/sellerstore/554129/20160221131953_LogoImage_71%D1%85541.png" />
    </div>
  </header>
);