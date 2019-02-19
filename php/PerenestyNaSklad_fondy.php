<?php
include "../php/SQL.php";
	$oblad_Type = $_POST['oblad_Type'];
	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$Vendor = $_POST['Vendor'];
	$Price = $_POST['Price'];
	$Valiuta = $_POST['Valiuta'];
	$count = $_POST['count'];
	$OdVym = $_POST['OdVym'];
	$id = $_POST['id'];
	$target = $_POST['target'];
	$additional_comment = $_POST['additional_comment'];
	$today = date("Y.m.d");
	
switch($target){
	case 'sklad':
		$table = 'sklad';
	break;
	case 'fondy':
		$table = 'vyrobnychiFondy';
	break;
}

	$query = 'INSERT INTO '.$table.' (Type, Model , Description , Vendor, Date, Price, Valiuta, count, OdVym, Prymitka) VALUES ("' . 
		
		$oblad_Type . '", "' .
		addslashes($Model) . '", "' .
		addslashes($Description) . '", "' .
		$Vendor . '", "' .
		$today . '", "' .
		$Price . '", "' .
		$Valiuta . '", "' .
		$count . '", "' .
		$OdVym . '", "' .
		addslashes($additional_comment). $id . '")';
	echo($query);
	mysql_query($query);
	
	$query2 = 'SELECT LAST_INSERT_ID() as LAST_INSERT_ID';
	//Дістаю щойно згенерований ModelId
	$result = mysql_query($query2);
	while ($row = mysql_fetch_array($result)) 
	{
	$ModelId = $row['LAST_INSERT_ID'];
	}
			$query3 = "UPDATE `Narahuvannia` SET `ModelId` =".$ModelId." WHERE ID =".$id.";";
			mysql_query($query3);
	
	
	
	
	
?>