const students = [
    { name: "นัท", grade: "A" },
    { name: "นัท2", grade: "B" },
    { name: "นัท3", grade: "C" }
];


students.forEach((student, index) => {
    console.log(`Student [${index}]: ${student.name}, Grade: ${student.grade}`);
});


function showStudentCount() {
    console.log(`Total students: ${students.length}`);
}


showStudentCount();