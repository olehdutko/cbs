<?php
error_reporting(0);
//make database connection
include "../php/SQL.php";

extract($_REQUEST);

$nomer = $_REQUEST['nomer']; 
$Kurs = mysql_query("Select * from Kurs;");
	while ($row = mysql_fetch_array($Kurs)) {
	$euro = $row['euro'];
	$dollar = $row['dollar'];
}

$query = "UPDATE `objekty` SET 
		`Moment_Dollar` = ".$dollar.", 
		`Moment_Euro` = ".$euro."
		WHERE  nomer = ".$nomer.";";
		echo($query);
		mysql_query($query);
	
	     


	mysql_close($new_connection);
?>