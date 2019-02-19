<?php
include "../php/SQL.php";
	
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
	
	$ID = $row->ID;
	//$Type = addslashes($row->Model;);
	$Telefon = addslashes($row->Telefon);
	$PIB = $row->PIB;
	$DateDodanyj = addslashes($row->DateDodanyj);
	$DateZvilnenyj = $row->DateZvilnenyj;
	$Prymitka = $row->Prymitka;
	
	$query = "UPDATE `Kontragenty` SET 
	`PIB` = '".$PIB."', 
	`Telefon` = '".$Telefon."', 
	`DateDodanyj` = '".$DateDodanyj."', 
	`DateZvilnenyj` = '".$DateZvilnenyj."',
	`Prymitka` = '".$Prymitka."' WHERE `ID`=".$ID." ;";
	mysql_query($query);
	echo($query);
	
	}
	
	
	
	mysql_close($new_connection);
//`Type` = '".$Type."', 
?>