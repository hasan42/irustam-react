<?php
include "config.php";

$personalData = mysqli_query($con,"select * from personal");

$response = array();

while($row = mysqli_fetch_assoc($personalData)){

   $response[] = $row;
}

echo json_encode($response);
exit;
?>