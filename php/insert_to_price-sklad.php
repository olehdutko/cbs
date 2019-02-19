<?php
include "../php/SQL.php";
	
	extract($_REQUEST);

 	$Type = $_POST['Type'];
	$Tema = $_POST['Tema'];
	$Category = $_POST['Category'];
	$CategoryId = $_POST['CategoryId'];
	$SubCategory = $_POST['SubCategory'];
	$SubCategoryId = $_POST['SubCategoryId'];
	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$OdVym = $_POST['OdVym'];
	$Vendor = $_POST['Vendor'];
	$Price = $_POST['Price'];
	$Valiuta = $_POST['Valiuta'];
	$Nacinka = $_POST['Nacinka'];
	$Time = $_POST['Time'];
	$Table = $_POST['Table'];
	$TypeID = $_POST['TypeID'];
	$CountOnSklad = $_POST['CountOnSklad'];


	$count = 0;

	$query = 'INSERT INTO '.$Table.' (ThemeId , CategoryId , CategoryName , SubCategoryId , SubCategoryName, Vendor  ,Model , Description , count, OdVymir ,Price ,Valiuta ,Nacinka,Time ,TypeID) VALUES ("' . 
		$Tema . '", "' .
		$CategoryId . '", "' .
		$Category . '", "' .
		$SubCategoryId . '", "' .
		$SubCategory . '", "' .
		addslashes($Vendor) . '", "' .
		addslashes($Model) . '", "' .
		addslashes($Description) . '", "' .
		$count . '", "' .
		$OdVym . '", "' .
		$Price . '", "' .
		$Valiuta . '", "' .
		$Nacinka . '", "' .
		$Time . '", "' .
		$TypeID . '")';
	mysql_query($query);
	//echo ($query);
	
	$query2 = 'SELECT LAST_INSERT_ID() as LAST_INSERT_ID';
	
	//Дістаю щойно згенерований ModelId
	$result = mysql_query($query2);
	while ($row = mysql_fetch_array($result)) 
	{
	$ModelId = $row['LAST_INSERT_ID'];
	}
		
	//$query = 'INSERT INTO sklad (Type, ThemeId , CategoryName, Vendor, ModelId, Model, Description , OdVym,  Price, Valiuta, count) VALUES ("' . 
	$query3 = 'INSERT INTO sklad (ThemeId , CategoryName, Vendor, ModelId, Model, Description , OdVym,  Price, Valiuta, count) VALUES ("' . 
	//$Type . '", "' .
	$Tema . '", "' .
	$Category . '", "' .
	$Vendor . '", "' .
	$ModelId . '", "' .
 	addslashes($Model) . '", "' .
	addslashes($Description) . '", "' .
	addslashes($OdVym) . '", "' .
	$Price . '", "' .
	$Valiuta . '", "' .
	$CountOnSklad. '")';
	mysql_query($query3);

	echo($query3);

?>