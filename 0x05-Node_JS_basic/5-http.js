// Import the built-in 'http' module to create an HTTP server
const http = require('http');

// Import the countStudents function from the specified file
const countStudents = require('./3-read_file_async');

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server instance
const app = http.createServer(async (req, res) => {
  // Set the HTTP status code to 200 (OK)
  res.statusCode = 200;

  // Handle requests based on the URL path
  if (req.url === '/') {
    // If the URL is '/', respond with 'Hello Holberton School!'
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // If the URL is '/students', fetch student data asynchronously
    let dbInfo = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((msg) => {
        // If data retrieval is successful, append it to the response
        dbInfo += msg;
        res.end(dbInfo);
      })
      .catch((err) => {
        // If an error occurs, append the error message to the response
        dbInfo += err.message;
        res.end(dbInfo);
      });
  }
});

// Start the server and listen on the specified port and hostname
app.listen(port, hostname, () => {
  // Output a message indicating that the server is running
  console.log(`Server running at http://${hostname}:${port}`);
});

// Export the app instance to make it accessible from other modules
module.exports = app;
