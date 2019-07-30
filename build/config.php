<?php

$host = "localhost"; /* Host name */
$user = "u0345666_angular"; /* User */
$password = "L0v2C7u9"; /* Password */
$dbname = "u0345666_angular"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
mysqli_query($con,"SET CHARACTER SET 'utf8'");
mysqli_query($con,"SET SESSION collation_connection ='utf8_unicode_ci'");
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
?>