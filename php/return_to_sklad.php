<?php
include "../php/SQL.php";	
	extract($_REQUEST);
	
			$ThemeId = $_POST['ThemeId'];
			$CategoryName = $_POST['CategoryName'];
			$Nariad = $_POST['Nariad'];
			$Type = '—клад';
			$ModelId = $_POST['ModelId'];
			$Model = $_POST['Model'];
			$Description = $_POST['Description'];
			$Count = $_POST['Count'];
			$Vendor = $_POST['Vendor'];
			$OdVymir = $_POST['OdVymir'];
			$Price = $_POST['price'];
			$valiuta = $_POST['Valiuta'];
			
			
		$CountOfItems = 0;
		$query2 = "SELECT count FROM sklad WHERE ModelId =".$ModelId." and IsDeleted = 0;";
		$result = mysql_query($query2);
		while ($row = mysql_fetch_array($result)) 
		{
		$CountOfItems = $row['count'];
		}
		echo($query);	
				
	if($CountOfItems ==0)
		{
		//якщо на склад≥ такий товар не ≥снуЇ або в≥н не пом≥чений €к витертий, то товар додаЇтьс€ на склад.
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
		}
	else
		{
		$newSkladValue = $CountOfItems + $Count;
		$query = "UPDATE sklad SET `count` = ".$newSkladValue." WHERE ModelId =".$ModelId." and IsDeleted = 0;";
		}
	mysql_query($query);
	echo($query);
		
	
	mysql_close($new_connection);

?>