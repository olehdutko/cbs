<?php
include "../php/SQL.php";
	$event_name = addslashes($_POST['event_name']);
	$sponsor = addslashes($_POST['sponsor']);
	$date = addslashes($_POST['date']);
	$notes =  addslashes($_POST['notes']);


	$query = 'INSERT INTO events(	
	event_name,
	sponsor,
	date,
	notes) VALUES ("' . 
		$event_name . '", "' .
		$sponsor . '", "' .
		$date . '", "' .
		$notes . '")';
	
	echo($query);
	mysql_query($query);
	
	mysql_close($new_connection);

?>