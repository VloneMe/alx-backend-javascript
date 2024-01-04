export default function createIteratorObject(report) {
  return (function* _() {
    // This  eslint-disables-next-line no-restricted-syntax
    for (const department of Object.values(report.allEmployees)) {
      
      // This  eslint-disables-next-line no-restricted-syntax
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
