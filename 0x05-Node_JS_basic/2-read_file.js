// Import the 'fs' module which allows reading files
const fs = require('fs');

// Define a function named countStudents which takes a file path as input
function countStudents(path) {
  try {
    // Read the content of the file synchronously and split it into an array of lines
    const results = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);

    // Assign the array of lines to a variable named 'lines'
    const lines = results;

    // Initialize a counter variable to keep track of the total number of students
    let countStudents = 0;

    // Initialize an empty object to store counts of students in each field
    const fields = {};

    // Iterate over each line in the file
    for (const line of lines) {
      // Skip empty lines and the first line (assuming it's a header)
      if (line.trim() !== '' && i > 0) {
        // Increment the total number of students
        countStudents += 1;

        // Split the line into an array of values using comma as delimiter
        const [fname, lname, age, field] = line.split(','); // eslint-disable-line

        // Check if the field is already recorded in the 'fields' object
        if (!fields[field]) {
          // If not, initialize an entry for the field
          fields[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          // If yes, update the count and list of students for the field
          const newCount = fields[field].count + 1;
          const newStudents = (fields[field].students).concat(fname);
          fields[field] = {
            count: newCount,
            students: newStudents,
          };
        }
      }
      // Increment the index counter
      i += 1;
    }

    // Output the total number of students
    console.log(`Number of students: ${countStudents}`);

    // Iterate over each field in the 'fields' object
    for (const field of Object.keys(fields)) {
      // Retrieve the count and list of students for the field
      const n = fields[field].count;
      const names = fields[field].students.join(', ');
      // Output the count and list of students for the field
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (error) {
    // If an error occurs during file reading or processing, throw an error
    throw new Error('Cannot load the database');
  }
}

// Export the countStudents function to make it accessible from other modules
module.exports = countStudents;
