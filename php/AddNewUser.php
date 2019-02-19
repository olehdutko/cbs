<?php
include "../php/SQL.php";

	$login = $_POST['username'];
	$hashed_password = $_POST['password'];
	$role = $_POST['role'];
	$prymitka = $_POST['prymitka'];
	
  $query = "INSERT
					INTO `users`
					SET
						`Prymitka`='{$prymitka}',
						`login`='{$login}',
						`role`='{$role}',
						`password`='{$hashed_password}'";
						
		$sql = mysql_query($query) or die(mysql_error());
		echo "{\"success\":true}";
		
		
?>