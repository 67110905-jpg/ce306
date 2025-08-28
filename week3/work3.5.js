const students = [
    { name: "นัท1", score: 85 },
    { name: "นัท2", score: 45 },
    { name: "นัท3", score: 78 },
    { name: "นัท4", score: 92 },
    { name: "นัท5", score: 38 },
    { name: "นัท6", score: 67 }
];

function filterPassedStudents(minScore) {
    students.forEach((student) => {
        if (student.score >= minScore) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}


filterPassedStudents(50);