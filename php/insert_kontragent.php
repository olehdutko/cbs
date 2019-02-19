<?php
include "../php/SQL.php";

	switch($_POST['Stan']){
	case 'Chyslytsia':
		Add_Chyslytsia();
		break;
	case 'Zvilneno':
		Add_Zvilneno();
		break;	
	}
	
	function Add_Chyslytsia($clean=false){
	$objnomer = $_POST['objnomer'];
	$PIB = addslashes($_POST['PIB']);
	$prymitka = addslashes($_POST['prymitka']);
	$telefon = $_POST['telefon'];
	$info = addslashes($_POST['info']);
	$date = $_POST['date'];
	$Type = $_POST['Type'];
	$Stan = $_POST['Stan'];
	
	$query = 'INSERT INTO Kontragenty(PIB, Telefon, Info, Type, DateDodanyj, DateZminaBalansu, Stan, Prymitka) VALUES ("' . 
		$PIB . '", "' .
		$telefon . '", "' .
		$info . '", "' .
		$Type . '", "' .
		$date . '", "' .
		$date . '", "' .
		$Stan . '", "' .
		$prymitka . '")';

	mysql_query($query);
	echo($query);
	
	
	}
	
	
function Add_Zvilneno($clean=false){
	$objnomer = $_POST['objnomer'];
	$PIB = addslashes($_POST['PIB']);
	$prymitka = addslashes($_POST['prymitka']);
	$telefon = $_POST['telefon'];
	$info = addslashes($_POST['info']);
	$date = $_POST['date'];
	$Type = $_POST['Type'];
	$Stan = $_POST['Stan'];
	
	$query = 'INSERT INTO Kontragenty(PIB, Telefon, Info, Type, DateDodanyj, DateZvilnenyj, DateZminaBalansu, Stan, Prymitka) VALUES ("' . 
		$PIB . '", "' .
		$telefon . '", "' .
		$info . '", "' .
		$Type . '", "' .
		$date . '", "' .
		$date . '", "' .
		$date . '", "' .
		$Stan . '", "' .
		$prymitka . '")';

	mysql_query($query);
	echo($query);
	
	
	}
	mysql_close($new_connection);
	 
	
	

?>