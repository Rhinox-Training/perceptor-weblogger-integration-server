<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "webdebugmaster";
	//connection
    
	$logType =$_POST["logType"];
	$message = $_POST["message"];
	$timestamp =$_POST["timestamp"];
	$sessionId = $_POST["sessionId"];
	$projectId = $_POST["projectId"];
	$logger = $_POST["logger"];
	

	$conn = new mysqli($servername,$username,$password,$dbName);
	//check connectino
	if(!$conn){
		die("Connection failed. " . mysql_connect_error());
	}

		
	$sql = "INSERT INTO errors (logType,message,timestamp,sessionId,projectId,logger)
			VALUES ('".$logType."','".$message."','".$timestamp."','".$sessionId."','".$projectId."','".$logger."')";
	$result = mysqli_query($conn ,$sql);
	
	if(!$result) echo "there was an error";
	else echo "Everything ok.";


?>