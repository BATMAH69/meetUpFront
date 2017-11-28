import React from 'react';
import { NavButton } from '../components/NavButton'

export const Buttons = ({ buttons, onNext, state }) => {

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      width: 185,
      justifyContent: 'space-between'
    }}>
      <div />
      {
        buttons.map((buttons, key) => (
          <NavButton {...buttons} key={key} onNext={onNext} state={state} />
        ))
      }
    </div>
  );
};
