<?php
	$ini =parse_ini_file("config.ini");
	$servername = $ini["servername"];
	$username =  $ini["username"];
	$password = $ini["password"];
	$dbName = $ini["dbName"];
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