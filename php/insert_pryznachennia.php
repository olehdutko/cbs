<?php
	//require_once 'insert_pryznachennia.php';
	include "../php/SQL.php";
	$new_pryznachennia = $_POST['new_pryznachennia'];

	$query = 'INSERT INTO Pryznachennia_Platezhu(Type) VALUES ("' .$new_pryznachennia . '")';
	mysql_query($query);
	mysql_close($new_connection);

?>