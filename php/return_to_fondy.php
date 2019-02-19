<?php
include "../php/SQL.php";
	
	$Vendor = $_POST['Vendor'];
	$Valiuta = $_POST['Valiuta'];
	$Count = $_POST['Count'];
	$ModelId = $_POST['ModelId'];
	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$OdVymir = $_POST['OdVymir'];	
	$price = $_POST['price'];	
	$Prymitka = $_POST['Prymitka'];	
	$IsDeleted = 0;
	$today = date("Y.m.d");
	
	//Селектаю кількість одиниць фондів
	$CountOfItems = 0;
	$result = mysql_query("SELECT Count FROM vyrobnychiFondy WHERE ID='".$ModelId."' and IsDeleted = 0 ;");
	while ($row = mysql_fetch_array($result)) 
	{
	$CountOfItems = $row['Count'];
	}
	echo($query);

	
	if($CountOfItems ==0)
		{
		//$query = 'INSERT INTO vyrobnychiFondy(IsDeleted, ID , Model, Description, Vendor, Count, OdVym, Valiuta, Price) VALUES ("' . 
		$query = 'INSERT INTO vyrobnychiFondy(IsDeleted,Date, Model, Description, Vendor, Prymitka, Count, OdVym, Valiuta, Price) VALUES ("' . 
		$IsDeleted . '", "' .
		$today . '", "' .
		$Model . '", "' .
		$Description . '", "' .
		$Vendor . '", "' .
		$Prymitka . '", "' .
		$Count . '", "' .
		$OdVymir . '", "' .
		$Valiuta . '", "' .
		$price . '")';
		}
	else
		{
		$NewCount = $CountOfItems + $Count;
		$query = "UPDATE `vyrobnychiFondy` SET 
		`Count` = '".$NewCount."' 
		WHERE ID = ".$ModelId.";";
		}
	mysql_query($query);
	echo ($query);
?>