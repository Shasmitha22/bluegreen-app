const express = require('express');
const app = express();
const port = 3000;

// Environment variable for Blue-Green color
const color = process.env.DEPLOY_COLOR || 'unknown';

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', color, time: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.send(`<h1>Hello from ${color} instance</h1><p>Uptime: ${process.uptime().toFixed(2)}s</p>`);
});

app.listen(port, () => {
  console.log(`App (${color}) listening on port ${port}`);
});
