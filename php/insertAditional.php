<?php
include "../php/SQL.php";

	$Model = $_POST['Model'];
	$description = $_POST['description'];
	$vendor = $_POST['vendor'];
	$type = $_POST['type'];
	$type_trans = $_POST['type_trans'];
	$TypeID = $_POST['TypeID'];
	$price = $_POST['price'];
	$count = 1;
	$Valiuta = $_POST['Valiuta'];
	$strObjid = $_POST['strObjid'];
	
	$OdVym = $_POST['OdVym'];
	$Category = $_POST['Category'];
	$SubCategory = $_POST['SubCategory'];
	

	//srand(time());
	$random = (rand()%90000);
	$query = 'INSERT INTO ZamovleniTovary (TypeID, Model, ModelId, Description, OdVymir, categoryName, SubCategoryName, Vendor , type , Price , Count, Valiuta , zamovleniaID) VALUES ("' . 
		$TypeID . '", "' .
		$Model . '", "' .
		$random . '", "' .
		addslashes($description) . '", "' .
		$OdVym . '", "' .
		$Category . '", "' .
		$SubCategory . '", "' .
		$vendor . '", "' .
		$type . '", "' .
		$price . '", "' .
		$count . '", "' .
		$Valiuta . '", "' .
		$strObjid . '")';


		$query2 = 'INSERT INTO '.$type_trans.' (Model, CategoryName, SubCategoryName, Description , Vendor, Price , Count, OdVymir, Valiuta) VALUES ("' . 
		//$query2 = 'INSERT INTO '.$type_trans.' (TypeID, Model, Description , Vendor, Price , Count, Valiuta) VALUES ("' . 
		//$TypeID . '", "' .
		$Model . '", "' .
		$Category . '", "' .
		$SubCategory . '", "' .
		
		addslashes($description) . '", "' .
		$vendor . '", "' .
		$price . '", "' .
		$count . '", "' .
		$OdVym . '", "' .
		$Valiuta . '")';

		echo($query2);


	mysql_query($query);
	mysql_query($query2);
	
	

	
	
	mysql_close($new_connection);

?>