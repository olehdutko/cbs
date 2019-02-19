<?php
include "../php/SQL.php";

	$id = $_POST['id'];
	$date = $_POST['date'];

$adress = $_POST['adress'];
$year = $_POST['year'];
$filija = $_POST['filija'];
	
	$formuliar = addslashes($_POST['formuliar']);
	$nationality = addslashes($_POST['nationality']);
	$phone = addslashes($_POST['phone']);
	$osvita = addslashes($_POST['osvita']);
	$profesia = addslashes($_POST['profesia']);
	$viddil = addslashes($_POST['viddil']);	

	$name1 = $_POST['name1'];
	$name2 = $_POST['name2'];
	$surname = $_POST['surname'];
	$email = $_POST['email'];
	$birthday = $_POST['birthday'];
	$idcard = $_POST['idcard'];
	$workplace = $_POST['workplace'];
	$other = $_POST['other'];
	
	$query = 'Update readers Set 


         adress = "'.$adress.'",
	year = "'.$year.'",
	filija = "'.$filija.'",


	formuliar = "'.$formuliar.'",
	nationality = "'.$nationality.'",
	phone = "'.$phone.'",
	osvita = "'.$osvita.'",
	profesia = "'.$profesia.'",
	viddil = "'.$viddil.'",
	date = "'.$date.'",
	name1 = "'.$name1.'", 
	name2 = "'.$name2.'",
	surname = "'.$surname.'",
	email = "'.$email.'",
	birthday = "'.$birthday.'",
	idcard = "'.$idcard.'",
	workplace = "'.$workplace.'", 
	other = "'.$other.'" where reader_id = "'.$id.'"';
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>	