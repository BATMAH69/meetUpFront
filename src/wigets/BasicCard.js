import React from 'react';
import { process } from '../utils/transfer';
import {
  Button,

  Card,
  CardContent,
  CardActions,

  Typography,
} from 'material-ui';

export const BasicCard = ({ header, list, actions, state, onNext }) => {
  return (
    <div>
      {list.map(item => (
        <Card key={item.id}>
          <CardContent>
            {Object.keys(header).map(key =>
              <Typography key={key}>
                {header[key]}:{item[key]}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            {Object.keys(actions).map(key => (
              <Button dense onClick={() => process(state.pid, key, onNext, { id: item.id })}>{actions[key]}</Button>)
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};