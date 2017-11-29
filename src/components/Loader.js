import React from 'react';
import '../loader.css';
const svg = () => (`
  <svg id="main" width="200" height="200">
    <circle class="colored" cx="100" cy="100" r="40" />
  </svg>
`);

export const Loader = ({loading}) => {
  if (!loading){
    return <div />
  }

  return (
    <div className="loader" dangerouslySetInnerHTML={{ __html: svg() }} />
  )
};