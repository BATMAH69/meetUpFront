import React from 'react';

import {
  Typography,
} from 'material-ui';

export const ClientInfo = ({ info }) => (
  <div>
    <Typography type="headline" component="h2">
      {info.name}
    </Typography>
    <Typography component="p">
      Инн: {info.inn}
    </Typography>
  </div>
);