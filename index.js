// Array of objects
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 91 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 65 },
  ];
  
  // Helper function to filter students based on their scores
  function filterStudentsByScore(students, minScore) {
    return students.filter(student => student.score >= minScore);
  }
  
  // Example usage
  const filteredStudents = filterStudentsByScore(students, 80);
  console.log(filteredStudents);
  // Output will be an array of objects containing students with scores >= 80