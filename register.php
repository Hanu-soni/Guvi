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
$data = json_decode(file_get_contents("register.php"), true);

//Extract the values
$name = $data.name;
$dob = $data.dob;
$pan = $data.pan;
$email = $data.email;
$address = $data.address;
$background = $data.background;

// Check if the PAN number already exists
$stmt = $conn->prepare("SELECT * FROM user WHERE pan = ?");
$stmt->bind_param("s", $data);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // PAN number already exists, return an error response
    $response = array(
        "status" => "false",
        "message" => "User already exists"
    );
} else {
    // PAN number doesn't exist, insert the data into the database
    $stmt = $conn->prepare("INSERT INTO user (name, dob, pan, email, address, background) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $dob, $pan, $email, $address, $background);

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
