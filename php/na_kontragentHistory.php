<?php
include "../php/SQL.php";
	$p_Kontragent = $_POST['p_Kontragent'];
	$count = $_POST['count'];
	$price = $_POST['price'];
	$type = $_POST['type'];
	$modelID = $_POST['modelID'];
	$model = $_POST['model'];
	$description = $_POST['description'];
	$vendor = $_POST['vendor'];
	$odVym = $_POST['odVym'];
	$prymitka = $_POST['prymitka'];
	$opercount = $_POST['opercount'];
	
	//Заповнення Kontragent_history
	$query = 'INSERT INTO Kontragent_history (
	ModelId, Model, Description, Count, Price, odVym, Type, Kontragent, Vendor, Prymitka) VALUES ("' . 
		$modelID . '", "' .
		$model . '", "' .
		$description . '", "' .
		$count . '", "' .
		$price . '", "' .
		$odVym . '", "' .
		$type . '", "' .
		$p_Kontragent . '", "' .
		$vendor . '", "' .
		$prymitka . '")';
			
	mysql_query($query);
	echo ($query);
	
	
?>