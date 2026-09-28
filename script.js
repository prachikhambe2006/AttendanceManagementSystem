var records = [];

function markAttendance() {
  var name = document.getElementById("name").value;
  var status = document.getElementById("status").value;

  if (name === "") {
    alert("Please enter student name");
    return;
  }

  records.push({ name: name, status: status });

  var li = document.createElement("li");
  li.textContent = name + " - " + status;
  document.getElementById("attendanceList").appendChild(li);

  document.getElementById("name").value = "";
}

function generateReport() {
  var month = document.getElementById("month").value;
  var total = records.length;
  var present = 0;

  for (var i = 0; i < records.length; i++) {
    if (records[i].status === "Present") {
      present++;
    }
  }

  var absent = total - present;
  var percentage = total === 0 ? 0 : Math.round((present / total) * 100);

  document.getElementById("report").textContent =
    month + " Report: Total = " + total +
    ", Present = " + present +
    ", Absent = " + absent +
    ", Attendance = " + percentage + "%";
}