<?php
include "../php/SQL.php";

	$zalyshok = $_POST['zalyshok'];
	$ModelId = $_POST['ModelId'];
	$nariadID = $_POST['nariadID'];

	$query = "UPDATE `Dodano_v_Nariad` SET `count` = ".intval($zalyshok)." WHERE `ModelId`=".$ModelId." and `NariadID`=".$nariadID.";";
	echo($query);
	mysql_query($query);
	
?>