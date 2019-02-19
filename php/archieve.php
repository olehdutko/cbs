<?php
include "../php/SQL.php";

	$event_id = $_POST['event_id'];
	
	$query = 'Update events Set event_status = "Архівна", event_status_id = 2 where event_id = "'.$event_id.'"';
	
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>