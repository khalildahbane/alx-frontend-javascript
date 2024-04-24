export default function iterateThroughObject(reportWithIterator) {
    return reportWithIterator.join(' | ');
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
