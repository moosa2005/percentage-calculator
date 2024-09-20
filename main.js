var name = prompt("Please enter your name:");
var totalMarks = (prompt("Please enter the total marks:"));
var obtainedMarks = (prompt("Please enter the obtained marks:"));

var percentage = (obtainedMarks / totalMarks) * 100;

var remarks;
if (percentage < 50) {
    remarks = "jero ho tum";
} else if (percentage < 60) {
    remarks = "shhhh kisi kaam ke nh ho";
} else if (percentage < 70) {
    remarks = "Mehnat kar bhaii";
} else if (percentage < 90) {
    remarks = "Aag laga di Aag laga di Aag laga di ";
} else {
    remarks = "Matrix Excape karlia";
}
alert("Name : " + name + "\n" +
      "Obtained Marks : " + obtainedMarks + "\n" +
      "Total Marks : " + totalMarks + "\n" +
      "Percentage : " + percentage + "%" + "\n" +
      "Remarks : " + remarks);
