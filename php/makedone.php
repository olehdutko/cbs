<?php
include "../php/SQL.php";

	$order_id = $_POST['order_id'];
	$query = "UPDATE orders SET status = 'Виконане' WHERE order_id=".$order_id." ;";
	mysql_query($query);
	echo($query);
?>
