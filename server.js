const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from deployed Node.js server!');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the new API!' });
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
