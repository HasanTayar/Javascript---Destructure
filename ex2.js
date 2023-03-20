//destruct all the names of the student and log them
const students = ["Christina", "Jon", "Alexandare"];
// Write your code here
const [name1 , name2 , name3] = students;
console.log(name1);
console.log(name2);
console.log(name3);
// destruct all the names of the student and log them
const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];
// Write your code here
const [student1,[student2 , student3] , [student4 , student5]] = moreStudents;
console.log(student1, student2, student3, student4, student5);