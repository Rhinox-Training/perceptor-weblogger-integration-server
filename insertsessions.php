<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "webdebugmaster";
	//connection
    $timestamp = $_POST["timestamp"];
	$projectId = $_POST["projectId"];

	$conn = new mysqli($servername,$username,$password,$dbName);
	//check connectino
	if(!$conn){
		die("Connection failed. " . mysql_connect_error());
	}

		
	$sql = "INSERT INTO sessions (timestamp,projectId)
			VALUES ('".$timestamp."','".$projectId."')";
	$result = mysqli_query($conn ,$sql);
	
	if(!$result) echo "there was an error";
	else echo "Everything ok.";


?>