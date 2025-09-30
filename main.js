var name = prompt("Please enter your name:");
var totalMarks = (prompt("Please enter the total marks:"));
var obtainedMarks = (prompt("Please enter the obtained marks:"));

var percentage = (obtainedMarks / totalMarks) * 100;

var remarks;
if (percentage < 50) {
    remarks = "Fail";
} else if (percentage < 60) {
    remarks = "Below Average.";
} else if (percentage < 70) {
    remarks = "Average.";
} else if (percentage < 90) {
    remarks = "Good.";
} else {
    remarks = "Wowwww.....";
}
alert("Name : " + name + "\n" +
      "Obtained Marks : " + obtainedMarks + "\n" +
      "Total Marks : " + totalMarks + "\n" +
      "Percentage : " + percentage + "%" + "\n" +
      "Remarks : " + remarks);

