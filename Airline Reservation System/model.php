<?php
// MySQL server configuration
$servername = "localhost"; // Replace 'localhost' with your MySQL server's hostname
$username = "root"; // Replace 'your_username' with your MySQL username
$password = ""; // Replace 'your_password' with your MySQL password
$database = "project"; // Replace 'your_database' with your MySQL database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "Connected successfully";
}

?>