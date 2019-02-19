<?php
include "../php/SQL.php";		
	$p_Kontragent = $_POST['p_Kontragent'];
	$suma = $_POST['suma'];

	//Селектаю Баланс контрагента
	$result = mysql_query("SELECT Balans FROM Kontragenty WHERE PIB='".$p_Kontragent."' ;");
	while ($row = mysql_fetch_array($result)) 
	{
	$balans = $row['Balans'];
	}
	echo($query);
	
	$currentbalans = (float)$balans -(float)$suma;
	$query = "UPDATE Kontragenty SET 
	Balans = '".$currentbalans."' WHERE PIB='".$p_Kontragent."' ;";
	mysql_query($query);
	
	
?>