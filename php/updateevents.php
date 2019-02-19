<?php
include "../php/SQL.php";

	$event_id = $_POST['event_id'];
	$event_status = $_POST['event_status'];
	$event_status_id = $_POST['event_status_id'];
	$event_name = $_POST['event_name'];
	$sponsor = $_POST['sponsor'];
	$notes = $_POST['notes'];
	$date = $_POST['date'];
	
	
	$query = 'Update events Set 
	event_status = "'.$event_status.'", 
	event_status_id = "'.$event_status_id.'",
	event_name = "'.$event_name.'",
	sponsor = "'.$sponsor.'",
	notes = "'.$notes.'",
	date = "'.$date.'"	where event_id = "'.$event_id.'"';
	
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>