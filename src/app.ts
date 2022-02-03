import express from 'express';

const app = express();

app.listen(4000, () => {
  console.log('Application started on port 4000');
  console.log('using typescript');
});
