<?php
include "../php/SQL.php";
	$strnomer = $_POST['strnomer'];

	$query = 'Update Nariady Set IsFinalized  = 1  where ID  = '.$strnomer;
	Echo $query;
	mysql_query($query);
	mysql_close($new_connection);

?>