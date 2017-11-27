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
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(item => (
            <TableRow key={item.id}>
              {Object.keys(item).filter(i => i !== 'id').map(key => <TableCell key={key}>{item[key]}</TableCell>)}
              <TableCell>
                {Object.keys(actions).map(key => (
                  <Button onClick={() => process(state.pid, key, onNext, { id: item.id })}>{actions[key]}</Button>)
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};