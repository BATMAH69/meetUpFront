import React from 'react';

export const Console = ({ text, title }) => {
  if (window.location.pathname !== '/console'){
    return '';
  }

  return (
    <div>
      <span>{title}</span>
      <textarea defaultValue={text} key={Date.now()} style={{width:'100%', height:100}} />
    </div>
  );
}