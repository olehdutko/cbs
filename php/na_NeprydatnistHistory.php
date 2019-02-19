<?php
include "../php/SQL.php";
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
	
	//Заповнення Neprydatnist_history
	$query = 'INSERT INTO Neprydatnist_history (
	ModelId, Model, Description, Count, Price, odVym, Type, Vendor, Prymitka) VALUES ("' . 
		$modelID . '", "' .
		$model . '", "' .
		$description . '", "' .
		$opercount . '", "' .
		$price . '", "' .
		$odVym . '", "' .
		$type . '", "' .
		$vendor . '", "' .
		$prymitka . '")';
			
	mysql_query($query);
	echo ($query);
	
	
?>