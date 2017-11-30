import React from 'react';

import {
  TextField,
} from 'material-ui';

export const NumberInput = ({ onChange, value = '', label, def }) => (
  <TextField
    id="name"
    label={label}
    value={value.replace(/\D/g,'')}
    onChange={(event) => onChange(event.target.value)}
    defaultValue={def}
  />
);


