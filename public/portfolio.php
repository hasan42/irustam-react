<?php
include "config.php";

$portfolioData = mysqli_query($con,"select * from portfolio");

$response = array();

while($row = mysqli_fetch_assoc($portfolioData)){

   $response[] = $row;
}

echo json_encode($response);
exit;
?>