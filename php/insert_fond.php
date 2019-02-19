<?php
include "../php/SQL.php";
	//require_once 'insert.php';

	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$Prymitka = $_POST['Prymitka'];
	$Vendor = $_POST['Vendor'];
	$Price = $_POST['Price'];
	$Valiuta = $_POST['Valiuta'];
	
	$Count = $_POST['Count'];
	$OdVym = $_POST['OdVym'];
	$myDate = $_POST['myDate'];
	
	$query = 'INSERT INTO vyrobnychiFondy(Model, Vendor, Count, Date, Price, Valiuta, OdVym, Description , Prymitka) VALUES ("' . 
	$Model . '", "' .
	$Vendor . '", "' .
	$Count . '", "' .
	$myDate . '", "' .
	$Price . '", "' .
	$Valiuta . '", "' .
	$OdVym . '", "' .
	$Description . '", "' .
	$Prymitka . '")';
	
	mysql_query($query);
	
	echo iconv("ISO-8859-1", "UTF-8", $query);
?>