<?php
	//require_once 'insert.php';
	include "../php/SQL.php";
	
	$Typ = $_POST['Typ'];
	$Opys_vytrat = $_POST['Opys_vytrat'];
	$Suma = $_POST['Suma'];
	$type = $_POST['type'];
	$Valiuta = $_POST['Valiuta'];
	$strObjid = $_POST['strObjid'];
	$TypeID = $_POST['TypeID'];
	
	
	
	//srand(time());
	$random = (rand()%90000);
	$query = 'INSERT INTO ZamovleniTovary (Model, ModelId, Description, Price, PriceGrn, Propozycija, type, Valiuta, TypeID, zamovleniaID) VALUES ("' . 
		
		$Typ . '", "' .
		$random . '", "' .
		addslashes($Opys_vytrat) . '", "' .
		$Suma . '", "' .
		$Suma . '", "' .
		$Suma . '", "' .
		$type . '", "' .
		$Valiuta . '", "' .
		$TypeID . '", "' .
		$strObjid . '")';

	mysql_query($query);
	echo $query;
	mysql_close($new_connection);

?>