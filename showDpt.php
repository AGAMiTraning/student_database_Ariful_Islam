<?php

include "dbConnection.php";

$query="SELECT * FROM `department` WHERE 1;";

$result=mysqli_query($conn,$query);
$data=array();
while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
}

/// Return Json Fortmatted data
echo json_encode($data);



?>