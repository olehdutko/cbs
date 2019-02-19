<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	
	$query = 'Update events Set isdeleted = 1 where event_id = "'.$id.'"';
	mysql_query($query);
	echo($query);
	mysql_query('INSERT INTO log(message) VALUES ("Подія з номером \"'.$id.'\" була видалена")');
mysql_close($new_connection);
?>