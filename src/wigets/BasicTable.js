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

export const BasicTable = ({ header, list, actions, state, onNext }) => {
  return (
    <Paper style={{ marginTop: 30 }}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(header).map(key => <TableCell key={key}>{header[key]}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(item => (
            <TableRow
              key={item.id}
              onClick={() => process(state.pid, Object.keys(actions)[0], onNext, { id: item.id })}
            >
              {Object.keys(header).map(key => <TableCell key={key}>{item[key]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};