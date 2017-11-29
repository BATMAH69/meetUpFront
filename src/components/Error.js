import React from 'react';

export const Error = ({ text }) => (
  <div style={{
    height: 20,
    backgroundColor: '#ff1c2e',
    visibility: text ? 'visible': 'hidden',
    color:'#fff'
  }}>{text}</div>
);