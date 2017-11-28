import React from 'react';

import {
  Select,
  Input,
  MenuItem,
  InputLabel,
  FormControl,
} from 'material-ui';

export const BasicSelect = ({ onChange, value = '', list, label, def }) => (
  <FormControl style={{width:180}}>
    <InputLabel htmlFor="select">{label}</InputLabel>
    <Select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      input={<Input id="select" value={value||def}/>}
    >
      {list.map((item, key) => (
        <MenuItem key={key} value={item}>{item}</MenuItem>
      ))}
    </Select>
  </FormControl>
);