const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, DevOps World!');
});

// Define an API route that returns JSON
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the DevOps project API' });
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
