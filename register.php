<?php
include ('index.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method Not Allowed");
}

// Rest of your PHP code for handling the POST request


// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);
if ($data === null) {
    // Handle the case where JSON data is not received or is invalid
    http_response_code(400); // Bad Request
    exit("Invalid JSON data");

}

//Extract the values
$name = $data['name'];
$id = $data['id'];
$pass = $data['password'];

// Check if the PAN number already exists
$stmt = $conn->prepare("SELECT * FROM register WHERE id =?");
$stmt->bind_param("s",$data);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // id already exists, return an error response
    http_response_code(500); // Bad Request
    exit("User already exist");
   
} else {
    // id doesn't exist, insert the data into the database
    $stmt = $conn->prepare("INSERT INTO register (name,id,password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $id, $pass);

    if ($stmt->execute()) {
        $response = array(
            "status" => "success",
            "message" => "User added successfully"
        );
        
    } else {
        $response = array(
            "status" => "false",
            "message" => "Failed to add user"
        );
    }
}

// Close the database connection
$stmt->close();
$conn->close();

// Send the JSON response
header("Content-Type: application/json");
echo json_encode($response);
?>
