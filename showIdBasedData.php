<?php

include "dbConnection.php";

$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);  // you given "true" then this data convert associative array, if not given then it convert php object

$id=$mydata['id'];

$query="SELECT `id`, `sid`, `name`, `dpt` FROM `student` WHERE id=$id;";

$result=mysqli_query($conn,$query);

$row=mysqli_fetch_assoc($result);

/// Return Json Fortmatted data
echo json_encode($row);



?>