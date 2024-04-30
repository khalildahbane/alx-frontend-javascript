// Getting the students by the location
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  return students.filter(student => student.location === city);
}
