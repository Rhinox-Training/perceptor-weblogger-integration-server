<?php
	$ini =parse_ini_file("config.ini");
	$servername = $ini["servername"];
	$username =  $ini["username"];
	$password = $ini["password"];
	$dbName = $ini["dbName"];
	//connection

	$timestamp = $_POST["timestamp"];
	$totalReservedMemory= $_POST["totalReservedMemory"];
	$AllocatedMemory= $_POST["AllocatedMemory"];
	$MonoMemory= $_POST["MonoMemory"];
	$fps= $_POST["fps"];
	$averageFps= $_POST["averageFps"];
	$minFps= $_POST["minFps"];
	$maxFps= $_POST["maxFps"];
	$time= $_POST["time"];
	$batches= $_POST["batches"];
	$sessionId= $_POST["sessionId"];
	
	$conn = new mysqli($servername,$username,$password,$dbName);
	//check connectino
	if(!$conn){
		die("Connection failed. " . mysql_connect_error());
	}

		
	$sql = "INSERT INTO sessioninfos (timestamp,totalReservedMemory,AllocatedMemory,MonoMemory,fps,averageFps,minFps,maxFps,time,batches,sessionId)
	VALUES ('".$timestamp."','".$totalReservedMemory."','".$AllocatedMemory."','".$MonoMemory."','".$fps."','".$averageFps."','".$minFps."','".$maxFps."','".$time."','".$batches."','".$sessionId."')";
	$result = mysqli_query($conn ,$sql);
	
	if(!$result) echo "there was an error";
	else echo "Everything ok.";

?>
