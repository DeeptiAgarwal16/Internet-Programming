<?php

require("model.php");

$custid = $_POST['custid'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$email = $_POST['email'];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "INSERT INTO customer (Customer_ID,FirstName,LastName,Mailing_Address,Phone_Number,Email_ID) VALUES ('$custid', '$fname', '$lname', '$address', '$phone', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>