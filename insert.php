<?php

include "./dbConnection.php";



$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);  // you given "true" then this data convert associative array, if not given then it convert php object

$sid=$mydata['sid'];
$name=$mydata['name'];
$dpt=$mydata['dpt'];
$dpt_array=['','CSE','EEE','MATH','PHYSICS','CHEMISTRY','ENGLISH'];

if(!empty($sid) && !empty($name) && !empty($dpt)){

    $dpt_name=$dpt_array[$dpt];
    $query="INSERT INTO `student`(`sid`, `name`, `dpt`) VALUES ('$sid','$name','$dpt_name');";

    if(mysqli_query($conn,$query)){
        echo "Student added Successfully";
    }
    else echo "Unable to Save Student";

}
else echo "Fill All Fields";



?>