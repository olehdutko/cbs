<?php
	//require_once 'insert_to_object.php';
	include "../php/SQL.php";
	
			$zamovleniaID = $_POST['zamovleniaid'];
			$subcategoryName = $_POST['subcategoryname'];
			$categoryName = $_POST['categoryName'];
			$vendor = $_POST['vendor'];
			$modelid = $_POST['modelid'];
			$model = $_POST['model'];
			$description = $_POST['description'];
			$OdVymir = $_POST['OdVymir'];
			$price = $_POST['price'];
			$time = $_POST['time'];
			$type = $_POST['type'];
			$valiuta = $_POST['valiuta'];
			$TypeID = $_POST['TypeID'];
		
	$query = 'INSERT INTO ZamovleniTovary (zamovleniaID, type, SubCategoryName, Description, OdVymir, categoryName, Vendor, ModelId, Model, Price, Time, Valiuta,TypeID) VALUES ("' . 
	$zamovleniaID . '", "' .
	$type . '", "' .
	$subcategoryName . '", "' .
	addslashes($description) . '", "' .
	addslashes($OdVymir) . '", "' .
	$categoryName . '", "' .
	$vendor . '", "' .
	$modelid . '", "' .
	$model . '", "' .
	$price . '", "' .
	$time . '", "' .
	$valiuta . '", "' .
	$TypeID. '")';

	
	 
	 
	 
	print $query;
	mysql_query($query);
	mysql_close($new_connection);

?>