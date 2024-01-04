export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return this;
    },
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < currentDepartment.length) {
          const employee = currentDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          // Move to the next department
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Recursive call for the next department
        }
      } else {
        // No more departments or employees
        return { done: true };
      }
    },
  };
}
