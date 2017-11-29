import React from 'react';

export const Error = ({ text }) => (
  <div style={{
    height: 20,
    backgroundColor: text ? '#ff1c2e' : 'transparent',
    color:'#fff'
  }}>{text}</div>
);