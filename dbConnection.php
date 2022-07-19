<?php


$host="localhost";
$user="root";
$pass="";
$dbName="ajax_crud";

$conn=new mysqli($host,$user,$pass,$dbName);

if($conn->connect_error){
    die("Connection Failed");
}



?>