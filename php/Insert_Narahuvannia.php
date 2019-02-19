<?php
include "../php/SQL.php";
	$nomer = $_POST['nomer'];
	$prymitky = addslashes($_POST['prymitky']);
	$date = $_POST['date'];
	$IsKontrAgent = $_POST['IsKontrAgent'];
	$pryznachennia = addslashes($_POST['pryznachennia']);

//Недавно додано
	$Valiuta = $_POST['Valiuta'];
	$count = $_POST['count'];
	$oblad_Type = $_POST['oblad_Type'];
	$Model = addslashes($_POST['Model']);
	$Description = addslashes($_POST['Description']);
	$OdVym = addslashes($_POST['OdVym']);
	$Vendor = $_POST['Vendor'];
	$Price = $_POST['Price'];
//Недавно додано	
	
	$Suma =$_POST['suma'];
	$query = 'INSERT INTO Narahuvannia(ID, Zalyshok, Price, Valiuta, IsKontrAgent, Prymitky, Date, count, oblad_Type, Model, Description, OdVym, Vendor, Suma, Pryznachennia) VALUES ("' . 
		$nomer . '", "' .
		$Suma . '", "' .
		$Price . '", "' .
		$Valiuta . '", "' .
		$IsKontrAgent . '", "' .
		addslashes($prymitky) . '", "' .
		$date . '", "' .
//Недавно додано		
		$count . '", "' .
		$oblad_Type . '", "' .
		addslashes($Model) . '", "' .
		addslashes($Description) . '", "' .
		$OdVym . '", "' .
		$Vendor . '", "' .
		$Suma . '", "' .
//Недавно додано
		$pryznachennia . '")';
		

	mysql_query($query);
	echo($query);
	mysql_close($new_connection);

?>