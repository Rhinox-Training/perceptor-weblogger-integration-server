<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "webdebugmaster";
	//connection
    $name = $_POST["name"];


	$conn = new mysqli($servername,$username,$password,$dbName);
	//check connectino
	if(!$conn){
		die("Connection failed. " . mysql_connect_error());
	}

		
	$sql = "INSERT INTO projects (name)
			VALUES ('".$name."')";
	$result = mysqli_query($conn ,$sql);
	
	if(!$result) echo "there was an error";
	else echo "Everything ok.";


?>