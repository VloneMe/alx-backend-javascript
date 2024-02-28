// Import the built-in 'http' module to create an HTTP server
const http = require('http');

// Define the port and host for the server
const PORT = 1245;
const HOST = 'localhost';

// Create an HTTP server instance
const app = http.createServer();

// Event listener for handling incoming requests
app.on('request', (_, res) => {
  // Define the response text
  const responseText = 'Hello Holberton School!';

  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the HTTP status code to 200 (OK)
  res.statusCode = 200;

  // Write the response text to the response stream
  res.write(Buffer.from(responseText));

  // End the response
  res.end();
});

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  // Output a message indicating that the server is listening
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app instance to make it accessible from other modules
module.exports = app;
