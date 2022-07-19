<?php

include "./dbConnection.php";



$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);  // you given "true" then this data convert associative array, if not given then it convert php object

$id=$mydata['id'];
$sid=$mydata['sid'];
$name=$mydata['name'];
$dpt=$mydata['dpt'];
$dpt_array=['','CSE','EEE','MATH','PHYSICS','CHEMISTRY','ENGLISH'];

if(!empty($sid) && !empty($name) && !empty($dpt)){

    $dpt_name=$dpt_array[$dpt];
    $query="UPDATE `student` SET `sid`='$sid',`name`='$name',`dpt`='$dpt_name' WHERE id=$id;";

    if(mysqli_query($conn,$query)){
        echo "Student Edited Successfully";
    }
    else echo "Unable to Edit Student";

}
else echo "Fill All Fields";



?>