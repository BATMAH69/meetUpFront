import React from 'react';
import { filter, process } from '../utils/transfer';

import {
  Button,
} from 'material-ui';

export const NextButton = ({ text = 'Далее', onNext, state, step, action = 'next', fields, param }) => (
  <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
    <Button raised color="primary" onClick={() => process(param || state.pid, action, onNext, filter(state, fields))}>
      {text}
    </Button>
  </div>
);
