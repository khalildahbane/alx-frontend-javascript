<<<<<<< HEAD
export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
      },
    };
=======
export default function createEmployeesObject(departmentName, employees) {
  const employee = { [departmentName]: employees };
  return employee;
>>>>>>> b532153b5766ecff57752a769268db58e17ba526
}
