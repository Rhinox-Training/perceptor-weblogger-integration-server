<?php
 header("Access-Control-Allow-Origin: *");
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "webdebugmaster";
	//connection
	$conn = new mysqli($servername,$username,$password,$dbName);
	//check connectino
	if(!$conn){
		die("Connection failed. " . mysql_connect_error());
	}
	if(isset($_GET['sessionId']))
	{
		$id = $_GET['sessionId'];

		$sql = "SELECT * FROM errors WHERE sessionId = $id";
	$result = mysqli_query($conn ,$sql);
    
	$techarray = array();
	while($row =mysqli_fetch_assoc($result)){
		$techarray[] = $row;
	}
	
	echo json_encode($techarray);


	}
	else {
		$sql = "SELECT * FROM errors";
	$result = mysqli_query($conn ,$sql);
    
	$techarray = array();
	while($row =mysqli_fetch_assoc($result)){
		$techarray[] = $row;
	}
	
	echo json_encode($techarray);
	}



?>