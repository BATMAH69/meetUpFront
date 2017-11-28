import React from 'react';

export const Image = ({src, maxWidth = 180}) => (<img style={{maxWidth}} src={src} alt="success"/>);