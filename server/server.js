const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare() /*eslint-disable indent*/
.then(() => {
  const server = express();
  server.get('*', (req, res) => handle(req, res));
  server.listen(3000, err => {
    if (err) throw err; // eslint-disable-line curly
    console.log('> Ready on http://localhost:3000');
  });
})
.catch(ex => {
  console.error(ex.stack);
  prcoess.exit(1);
});
