<?php
include "../php/SQL.php";
	extract($_REQUEST);
	
			$ThemeId = $_POST['ThemeId'];
			$CategoryName = $_POST['CategoryName'];
			$Nariad = $_POST['Nariad'];
			$Type = 'Склад';
			$ModelId = $_POST['ModelId'];
			$Model = $_POST['Model'];
			$Description = $_POST['Description'];
			$Price = $_POST['Price'];
			$OdVymir = $_POST['OdVymir'];
			$Vendor = $_POST['Vendor'];
			$valiuta = $_POST['valiuta'];
			$Count = $_POST['Count'];

//Перевіряю чи є на складі невидалені товари конкретної МІ
	$query2 = "SELECT count FROM sklad WHERE ModelId =".$ModelId." and IsDeleted = 0;";
	$result1 = mysql_query($query2);
	
		
//TODO: Додати перевітку чи $result >0
   if( mysql_fetch_array($result1) > 0)
   {
   //Якщо на складі існує такий товар і він не помічений як витертий, то витягується його к-сть і до неї додається кількість одиниць що списується на склад.
	$skladcount = 0;
	while ($row = mysql_fetch_array($result1)) 
	{
	$skladcount = $row['count'];
	}
	//intval($skladcount)
	//$newSkladValue = intval($skladcount) + $Count;
	$newSkladValue = $skladcount + $Count;
	$query = "UPDATE sklad SET `count` = ".$newSkladValue." WHERE ModelId =".$ModelId." and IsDeleted = 0;";
	echo($query);
	mysql_query($query);
   }
   else
   {
   //Якщо на складі такий товар не існує або він не помічений як витертий, то товар додається на склад.
	//$query = 'INSERT INTO sklad (Type, ThemeId , CategoryName, Vendor, ModelId, Model, Description , OdVym,  Price, Valiuta, count) VALUES ("' . 
	$query = 'INSERT INTO sklad (Type, ThemeId , CategoryName, Vendor, Model, Description , OdVym,  Price, Valiuta, count) VALUES ("' . 
	$Type . '", "' .
	$ThemeId . '", "' .
	$CategoryName . '", "' .
	$Vendor . '", "' .
	//$ModelId . '", "' .
 	$Model . '", "' .
	addslashes($Description) . '", "' .
	addslashes($OdVymir) . '", "' .
	$Price . '", "' .
	$valiuta . '", "' .
	$Count. '")';
	mysql_query($query);
	echo($query);
   }

   
	
	
	

	mysql_close($new_connection);

?>