// Create web server
const express = require('express');
const app = express();

// Create a comment
app.post('/comments', (req, res) => {
  // create the comment
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  // get the comment
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  // update the comment
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  // delete the comment
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
