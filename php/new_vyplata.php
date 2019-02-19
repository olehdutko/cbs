<?php
include "../php/SQL.php";
	$id = $_POST['id'];
	$date = $_POST['date'];
	$pryznachennia = $_POST['pryznachennia'];
	$opersuma = $_POST['opersuma'];
	
	$suma = $_POST['suma'];
	$prymitky = $_POST['prymitky'];
	$additional_comment = $_POST['additional_comment'];
	
	$zalyshok = $_POST['zalyshok'];
	$new_zalyshok = $_POST['new_zalyshok'];

	if($new_zalyshok ==0){
			$query2 = "UPDATE `Narahuvannia` SET `IsClosed` = 1 WHERE ID =".$id.";";
			mysql_query($query2);
	}
		
	$query = 'INSERT INTO Vyplaty(Nomer_Narahuvannia, Pryznachennia , Suma , Prymitky) VALUES ("' . 
		
		$id . '", "' .
		$pryznachennia . '", "' .
		$opersuma . '", "' .
		$prymitky. $additional_comment . '")';
	echo($query);
	mysql_query($query);
	$query3 = "UPDATE `Narahuvannia` SET `Zalyshok` = ".$new_zalyshok." WHERE ID =".$id.";";
	mysql_query($query3);
	
	
	
	
?>