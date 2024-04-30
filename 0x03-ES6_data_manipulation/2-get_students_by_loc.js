// Getting the students by the location
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  return students.filter(object => object.location === city);
}
