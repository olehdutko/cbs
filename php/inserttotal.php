<?php
	$propozycija = $_POST['propozycija'];
	$objId = $_POST['objId'];
	include "../php/SQL.php";
	
	$query = "UPDATE objekty SET `propozycija` = ".$propozycija." WHERE nomer = ".$objId.";";
	mysql_query($query);
	echo $query;
	mysql_close($new_connection);

?>