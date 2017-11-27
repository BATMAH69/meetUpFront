import React from 'react';

import {
  TextField,
} from 'material-ui';

export const TextInput = ({ onChange, value = '', label, def }) => (
  <TextField
    id="name"
    label={label}
    value={value}
    onChange={(event) => onChange(event.target.value)}
    defaultValue={def}
  />
);