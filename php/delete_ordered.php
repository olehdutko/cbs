<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	$query = 'DELETE FROM `ordered` WHERE id = "'.$id.'"';
	mysql_query($query);	
mysql_close($new_connection);
?>