<?php
include "../php/SQL.php";

	$kudy = $_POST['kudy'];
	$contactPerson = $_POST['contactPerson'];
	$kontragent = $_POST['kontragentField'];
	$contacts = $_POST['contacts'];
	$email = $_POST['email'];
	$telefon = $_POST['telefon'];
	$nextCall = $_POST['nextCall'];
	$prymitka = $_POST['prymitka'];
	$date = date('Y-m-d H:i:s');
	$status='Новий';
	$query = 'INSERT INTO calls(creationDate, destination, phone, email, 
								contactPerson, contacts, kontragent, 
								nextCallDate, status, prymitka) VALUES ("'.$date.'", "' .$kudy . '", "' .$telefon . '", "' .$email . '", "' .$contactPerson . '", "' .$contacts . '", "' .
		$kontragent . '", "' .
		
		$nextCall . '", "' .
		$status . '", "' .
		$prymitka . '")';

	mysql_query($query);
	echo($query);	
		
?>