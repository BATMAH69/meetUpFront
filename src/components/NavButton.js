import React from 'react';
import { filter, process } from '../utils/transfer';

import {
  Button,
} from 'material-ui';

export const NavButton = ({ text = 'Далее', onNext, state, action = 'next', fields, param, color="primary" }) => (
  <Button
    raised
    color={color}
    onClick={() => process(param || state.pid, action, onNext, filter(state, fields))}
  >
    {text}
  </Button>
);
