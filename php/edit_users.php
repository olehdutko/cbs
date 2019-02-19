<?php
error_reporting(0);
include "../php/SQL.php";
extract($_REQUEST);
		
/*$Id = $_POST['Id'];
$login = $_POST['login'];
$role = $_POST['role'];
$Prymitka = $_POST['Prymitka'];


	$query = "UPDATE `users` SET 
	`login` = '".$login."', 
	`password` = '".$password."', 
	`role` = '".$role."', 
	`Prymitka` = '".$Prymitka."' WHERE `id`=".$Id." ;";
	echo ($query);
	mysql_query($query);

	*/
	
	
			
$index = $_POST['index'];
$login = $_POST['login'];
$role = $_POST['role'];
$prymitka = $_POST['prymitka'];
$newPassword = $_POST['newPassword'];

	
	$string = iconv("UTF-8", "ISO-8859-1", addslashes($row->Description));	 
		$query = "UPDATE `users` SET 
		`login` = '".$login."', 
		`password` = '".$newPassword."', 
		`role` = '".$role."', 
		`Prymitka` = '".$prymitka."' WHERE `id`=".$index." ;";		
		mysql_query($query);

		echo $query;
?>





