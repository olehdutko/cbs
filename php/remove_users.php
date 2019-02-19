<?php
error_reporting(0);
//make database connection
include "../php/SQL.php";

//extract($_REQUEST);
$nomer = $_POST['nomer'];
			
		$query = "DELETE FROM users WHERE `id`=".$nomer." ;";		
		mysql_query($query);
	
		echo $query;
?>





