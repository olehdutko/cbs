<?php
include "../php/SQL.php";
		
	$query = "Update calls Set status = 'Прострочений' where status = 'Подзвонити в майбутньому' and nextCallDate < CURDATE()";
	//$query = "Update calls Set status = 'Прострочений' where nextCallDate < CURDATE()";
	mysql_query($query);
	echo($query);
	mysql_close($new_connection);

?>