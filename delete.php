<?php

include "dbConnection.php";


$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);  // you given "true" then this data convert associative array, if not given then it convert php object

$id=$mydata['id'];

if(!empty($id)){
    $query="DELETE FROM `student` WHERE id=$id;";
    if(mysqli_query($conn,$query)){
        echo "Student Delete Successfully";
    }
    else echo "Delete Fail";
}



?>