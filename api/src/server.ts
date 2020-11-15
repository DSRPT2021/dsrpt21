import express from 'express';

import connect from './database';
import routes from './routes';

const app = express();

connect();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333');
});
