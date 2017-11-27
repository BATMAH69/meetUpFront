import React from 'react';
import { NavButton } from '../components/NavButton'

export const Buttons = ({ buttons, onNext, state }) => {

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      width: 180,
      justifyContent: 'space-between'
    }}>
      {
        buttons.map((buttons, key) => (
          <NavButton {...buttons} key={key} onNext={onNext} state={state} />
        ))
      }
    </div>
  );
};
