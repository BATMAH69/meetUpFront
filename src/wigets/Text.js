import React from 'react';

import {
  TextField,
} from 'material-ui';

export const Text = ({ text, label }) => (
  <TextField id="name" label={label} value={text} />
);