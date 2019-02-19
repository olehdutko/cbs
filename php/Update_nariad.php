<?php
include "../php/SQL.php";
	//require_once 'insert.php';
	$P_kontr = $_POST['P_kontr'];
	$S_kontr = $_POST['S_kontr'];
	$date = $_POST['date'];
	$Prymitka = $_POST['Prymitka'];
	$object = $_POST['object'];
	$ID = $_POST['ID'];
	
		$query = "UPDATE `Nariady` SET 
		`P_kontragent` = '".$P_kontr."', 
		`S_kontragent` = '".$S_kontr."', 
		`Date` = '".$date."', 
		`Object` = '".$object."', 
		`Prymitka` = '".$Prymitka."'
		WHERE ID = ".$ID.";";
		echo($query);
	mysql_query($query);	


mysql_close($new_connection);

?>