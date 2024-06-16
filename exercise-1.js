// Example input
// const students = [
//   { name: "Alice", scores: [85, 92, 78] },
//   { name: "Bob", scores: [59, 63, 70] },
//   { name: "Charlie", scores: [100, 95, 98] },
//   { name: "David", scores: [45, 52, 60] },
//   { name: "Eve", scores: [75, 80, 82] }
// ];

// function calculateGrades(students)
// grade A >= 90
// grade B >= 80
// grade C >= 70
// grade D >= 60
// grade F


// results.push({ name: student.name, grade: grade });

const students = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [59, 63, 70] },
    { name: "Charlie", scores: [100, 95, 98] },
    { name: "David", scores: [45, 52, 60] },
    { name: "Eve", scores: [75, 80, 82] }
];
function calculateGrades(students) {
    const results = []; // store/push the results here later
    students.forEach(student => {
        const scores = student.scores;
        const average = Math.floor(scores.reduce((acc, score) => acc + score, 0) / scores.length);
        let grade = '';
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        results.push({ name: student.name, scores: average, grade: grade });
    });
    return results;
}
const grades = calculateGrades(students);
console.log(grades);