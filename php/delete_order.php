<?php
include "../php/SQL.php";

extract($_REQUEST);
	$order_id = $_POST['order_id'];
	
	$query = 'Update orders Set isdeleted = 1, status = \'Видалене\' where order_id = "'.$order_id.'"';
	mysql_query($query);
	
	
	$query = 'Update ordered Set isdeleted = 1 where order_id = "'.$order_id.'"';
	mysql_query($query);	
	
	
	mysql_query('INSERT INTO log(message) VALUES ("Замовлення з номером \"'.$order_id.'\" було видалене")');
mysql_close($new_connection);
?>