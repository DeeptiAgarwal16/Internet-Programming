<?php

require("model.php");

$from = $_POST['from'];
$to = $_POST['to'];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql1 = "select Flight_Number from flight where City_Of_Departure = '$from' and 	City_Of_Arrival = '$to'";

$result1 = $conn->query($sql1);

$flightNumbers = [];
if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $flightNumbers[] = $row['Flight_Number'];
    }
} else {
    echo "0 results";
}
$num = $flightNumbers[0];


$sql2 = "select * from flight_availability where Flight_Number = '$num'";
$result2 = $conn->query($sql2);

if ($result2->num_rows > 0) {
    while ($rows = $result2->fetch_assoc()) {
        echo 
        "<tr><td> <br/>" . $rows['Date_Of_Departure'] . 
        "</td><td> <br/>" . $rows['Time_Of_Departure'] . 
        "</td></tr>";
    }
} else {
    echo "0 results";
}

$conn->close();

?>