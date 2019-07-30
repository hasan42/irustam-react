<?php
include "config.php";

$comapanyData = mysqli_query($con,"select * from company");

$response = array();

while($row = mysqli_fetch_assoc($comapanyData)){

   $response[] = $row;
}

echo json_encode($response);
exit;
?>