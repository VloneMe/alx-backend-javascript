// A Course, Getters, and Setters

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._setName(name);
    this._setLength(length);
    this._setStudents(students);
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  _setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  _setLength(length) {
    if (typeof length === 'number' && length > 0) {
      this._length = length;
    } else {
      throw new Error('Length must be a positive number');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  _setStudents(students) {
    if (Array.isArray(students) && students.every(student => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
