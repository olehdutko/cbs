<?php
include "../php/SQL.php";
	$KontragentID = $_POST['KontragentID'];

		$query = "DELETE FROM Kontragenty WHERE ID =".$KontragentID.";";
		mysql_query($query);
		echo($query);
	
?>

some_value