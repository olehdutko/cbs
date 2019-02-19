<?php
include "../php/SQL.php";

	$KontragentID = $_POST['KontragentID'];
	$DateZvilnenyj = $_POST['DateZvilnenyj'];
	$Stan = "Zvilneno";

	$query = "UPDATE `Kontragenty` SET 
	`DateZvilnenyj` = '".$DateZvilnenyj."',
	`Stan` = '".$Stan."' WHERE `ID`=".$KontragentID." ;";
	mysql_query($query);
	echo($query);
	
?>
