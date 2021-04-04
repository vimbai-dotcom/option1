<?php include 'database.php';>

<?php

// create a variable
$student_ID=$_POST['Student ID Number'];
$weight=$_POST['Weight'];
$date=$_POST['Date of Weighin'];
$email=$_POST['Email'];

//Execute the query

mysqli_query($connect"INSERT INTO phoenixrising(student_idnumber,weight,date,email)
				VALUES('$student_idnumber','$weight','$date','$email')");
