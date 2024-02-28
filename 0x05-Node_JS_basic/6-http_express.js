// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number
const PORT = 1245;

// Define a route for the root URL '/'
app.get('/', (_, res) => {
  // Send the response 'Hello Holberton School!' for requests to the root URL
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Output a message indicating that the server is listening
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app instance to make it accessible from other modules
module.exports = app;
