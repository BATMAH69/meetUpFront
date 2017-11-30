import React from 'react';
import { process } from '../utils/transfer';
import {
  Button,

  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from 'material-ui';

export const BasicTable = ({ title, headers, list, actions, state, onNext }) => {
  return (
    <Paper style={{ marginTop: 30 }}>
      {title ? <p>{title}</p> : ''}
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(headers).map(key => <TableCell key={key}>{headers[key]}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(item => (
            <TableRow
              key={item.id}
              onClick={() => process(state.pid, Object.keys(actions)[0], onNext, { id: item.id })}
            >
              {Object.keys(headers).map(key => <TableCell key={key}>{item[key]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};