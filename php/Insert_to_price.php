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


	$count = 0;
	

	$query = 'INSERT INTO '.$Table.' (ThemeId , CategoryId , CategoryName , SubCategoryId , SubCategoryName, Vendor  ,Model , 
									  Description , count,OdVymir ,Price ,Valiuta ,Nacinka,Time ,TypeID) VALUES ("' . 
		$Tema . '", "' .
		$CategoryId . '", "' .
		$Category . '", "' .
		$SubCategoryId . '", "' .
		$SubCategory . '", "' .
		$Vendor . '", "' .
		$Model . '", "' .
		$Description . '", "' .
		$count . '", "' .
		$OdVym . '", "' .
		$Price . '", "' .
		$Valiuta . '", "' .
		$Nacinka . '", "' .
		$Time . '", "' .
		$TypeID . '")';
			
	
	mysql_query($query);
	echo ($query);




	
	
	
	
	

?>