<?php
 header("Access-Control-Allow-Origin: *");
 $ini =parse_ini_file("config.ini");
 $servername = $ini["servername"];
 $username =  $ini["username"];
 $password = $ini["password"];
 $dbName = $ini["dbName"];
	//connection
	$conn = new mysqli($servername,$username,$password,$dbName);
	//check connectino
	if(!$conn){
		die("Connection failed. " . mysql_connect_error());
	}

		


	if(isset($_GET['sessionId']))
	{
		$id = $_GET["sessionId"];

		$sql = "SELECT * FROM sessioninfos WHERE sessionId = $id";
	$result = mysqli_query($conn ,$sql);
    
	$techarray = array();
	while($row =mysqli_fetch_assoc($result)){
		$techarray[] = $row;
	}
	
	echo json_encode($techarray);


	}
	else {
		$sql = "SELECT * FROM sessioninfos";
	$result = mysqli_query($conn ,$sql);
    
	$techarray = array();
	while($row =mysqli_fetch_assoc($result)){
		$techarray[] = $row;
	}
	
	echo json_encode($techarray);
	}
?>