<?php
include "../php/SQL.php";
	$strObjid = $_POST['strObjid'];
	//Селектаю Баланс контрагента
	$result = mysql_query("SELECT SUM(count) FROM `Dodano_v_Nariad` WHERE NariadID ='".$strObjid."' ;");
	while ($row = mysql_fetch_array($result)) 
	{
	$count = $row['SUM(count)'];
	}
	echo($query);
	
 
	if ((int) $count == 0)
	{
		$query = "UPDATE `Nariady` SET `IsClosed` = '1' WHERE ID =".$strObjid.";";
		mysql_query($query);
		echo($query);
	}
	
?>