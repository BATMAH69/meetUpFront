import React from 'react';

export const Content = ({children}) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    minHeight: 300,
    marginBottom:10,
  }}>
    {children}
  </div>
);