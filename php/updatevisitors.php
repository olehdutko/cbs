<?php
include "../php/SQL.php";

	$id = $_POST['id'];
	$event_id = $_POST['event_id'];
	$idcard = $_POST['idcard'];
	$name1 = $_POST['name1'];
	$name2 = $_POST['name2'];
	$surname = $_POST['surname'];
	$birthday = $_POST['birthday'];
	$workplace = $_POST['workplace'];
	$email = $_POST['email'];
	$interests = $_POST['interests'];
	$other = $_POST['other'];

	
	
	
	
	$query = 'Update visitors Set 
	idcard = "'.$idcard	.'", 
	other = "'.$other.'",
	name1 = "'.$name1.'",
	name2 = "'.$name2.'",
	surname = "'.$surname.'",
	birthday = "'.$birthday.'", 
	workplace = "'.$workplace.'",
	email = "'.$email.'",
	interests = "'.$interests.'",
	event_id = "'.$event_id.'"	
	
	
	where id = "'.$id.'"';
	
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>