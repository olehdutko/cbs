<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	mysql_query("DELETE FROM `readers` WHERE `reader_id`='".$id."';");

mysql_close($new_connection);
?>