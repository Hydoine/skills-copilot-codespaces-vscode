// Create web server
// Create a new Express app
const express = require('express');
const app = express();
// Require the comments.js file
const comments = require('./comments.js');
// Use the comments router
app.use('/comments', comments);
// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});