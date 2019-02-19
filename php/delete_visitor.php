<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	
	$query = 'Update visitors Set isdeleted = 1 where id = "'.$id.'"';
	mysql_query($query);
	
	mysql_query('INSERT INTO log(message) VALUES ("Відвідувач з номером \"'.$id.'\" був видалений")');
mysql_close($new_connection);
?>