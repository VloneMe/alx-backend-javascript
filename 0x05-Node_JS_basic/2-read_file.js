const fs = require('fs');

/**
 * Counts the number of students in each field of study and lists their names.
 * @param {string} path - Path to the CSV file containing student data.
 * @throws {Error} Throws an error if the database cannot be loaded.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);

    // Initialize an object to store field counts and student names
    const fields = {};

    // Iterate over each line in the data
    for (let i = 1; i < data.length; i++) {
      const line = data[i].trim();
      if (line !== '') {
        const [fname, lname, age, field] = line.split(',');
        if (!fields[field]) {
          fields[field] = {
            count: 1,
            students: [`${fname} ${lname}`],
          };
        } else {
          fields[field].count++;
          fields[field].students.push(`${fname} ${lname}`);
        }
      }
    }

    // Output the results
    console.log(`Number of students: ${Object.values(fields).reduce((acc, cur) => acc + cur.count, 0)}`);
    for (const field of Object.keys(fields)) {
      const { count, students } = fields[field];
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
