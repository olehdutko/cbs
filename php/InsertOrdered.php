<?php
include "../php/SQL.php";
	$book_id = addslashes($_POST['book_id']);
	$order_id = addslashes($_POST['currentOrderId']);
	$query = 'INSERT INTO ordered(book_id, order_id) VALUES ("'.$book_id.'", "'.$order_id.'")';
	mysql_query($query);
	mysql_close($new_connection);
	
?>


