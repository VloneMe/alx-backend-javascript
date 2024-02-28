const fs = require('fs');

/**
 * Counts the number of students in each field of study and lists their names.
 * @param {string} dataPath - Path to the CSV file containing student data.
 * @throws {Error} Throws an error if the database cannot be loaded.
 */
const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  
  // Check if the path is a file
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  
  // Read the content of the file, split into lines, and remove trailing whitespaces
  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  
  // Initialize an object to store students grouped by field of study
  const studentGroups = {};
  
  // Extract field names from the first line of the file
  const dbFieldNames = fileLines[0].split(',');
  
  // Extract property names for each student record
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
  
  // Iterate over each line in the file, starting from the second line
  for (const line of fileLines.slice(1)) {
    // Split the line into an array of values
    const studentRecord = line.split(',');
    
    // Extract property values for each student
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    
    // Extract the field of study for the student
    const field = studentRecord[studentRecord.length - 1];
    
    // Initialize an array to store student entries for the field
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    
    // Create an array of student entries (property name-value pairs)
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    
    // Push the student entry to the corresponding field group
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate the total number of students
  const totalStudents = Object.values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  
  // Output the total number of students
  console.log(`Number of students: ${totalStudents}`);
  
  // Iterate over each field group and output the number of students in each field
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
