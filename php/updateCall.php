<?php
include "../php/SQL.php";
		
	$ID = $_POST['ID'];
	$destination = addslashes($_POST['destination']);
	$phone = addslashes($_POST['phone']);
	$email = $_POST['email'];
	$contactPerson = $_POST['contactPerson'];
	$contacts = $_POST['contacts'];
	$kontragent = $_POST['kontragent'];
	$nextCallDate = $_POST['nextCallDate'];
	$status = $_POST['status'];
	$prymitka = $_POST['prymitka'];
	$priority = $_POST['priority'];
	
	$now = new DateTime();
	
	$query = 'Update calls Set destination = "'.$destination.'", priority = "'.$priority.'", phone = "'.$phone.'", email = "'.$email.'",contactPerson = "'.$contactPerson.'",contacts = "'.$contacts.'",kontragent = "'.$kontragent.'",nextCallDate = "'.$nextCallDate.'",prymitka = "'.$prymitka.'",status = "'.$status.'" where ID = "'.$ID.'"';
	
	//$query = 'Update calls Set destination = "'.$destination.'",phone = "'.$phone.'", lastUpdateDate = "'.$now.'", email = "'.$email.'",contactPerson = "'.$contactPerson.'",contacts = "'.$contacts.'",kontragent = "'.$kontragent.'",nextCallDate = "'.$nextCallDate.'",prymitka = "'.$prymitka.'",status = "'.$status.'" where ID = "'.$ID.'"';
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>