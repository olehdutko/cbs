<?php
	//require_once 'insert.php';
	include "../php/SQL.php";

	switch($_REQUEST['action']){
	case 'Insert':
		Insert();
	break;
	case 'Update':
		Update();
	break;
	case 'UpdateZalyshok':
		UpdateZalyshok();
	break;	
	
	
}
    
	function Insert($clean=false){
	
	$nomer = $_POST['nomer'];
	$P_kontr = $_POST['P_kontr'];
	$S_kontr = $_POST['S_kontr'];
	$date = $_POST['date'];
	$prymitka = $_POST['prymitka'];
	$object = $_POST['object'];
	$query = 'INSERT INTO Nariady(P_kontragent , S_kontragent , Date, Object, Prymitka) VALUES ("' . 
		
		$P_kontr . '", "' .
		$S_kontr . '", "' .
		$date . '", "' .
		$object . '", "' .
		$prymitka . '")';

	mysql_query($query);
	echo($query);
	}
	
	function Update($clean=false){
	$totalCount = $_POST['totalCount'];
	$ModelId = $_POST['ModelId'];
	$NariadID = $_POST['NariadID'];
	
	//$query1 = "UPDATE `Dodano_v_Nariad` SET `count` = ".$totalCount." and `Kilkist` = ".$totalCount." WHERE `ModelId`=".$ModelId." and NariadID =".$NariadID." ;";
	$query1 = "UPDATE `Dodano_v_Nariad` SET `Kilkist` = ".$totalCount." WHERE `ModelId`=".$ModelId." and NariadID =".$NariadID.";";
	$query2 = "UPDATE `Dodano_v_Nariad` SET `count` = ".$totalCount." WHERE `ModelId`=".$ModelId." and NariadID =".$NariadID.";";
	echo($query1);
	mysql_query($query1);
	mysql_query($query2);
	}	
	
	
	function UpdateZalyshok($clean=false){
	$zalyshok = $_POST['zalyshok'];
	$ModelId = $_POST['ModelId'];
	$nariadID = $_POST['nariadID'];
	
	$query = "UPDATE `Dodano_v_Nariad` SET `count` = ".$zalyshok." WHERE `ModelId`=".$ModelId." and NariadID =".$nariadID.";";
	echo($query);
	mysql_query($query);
	
		//Якщо zalyshok = 0, то товар необхідно видалити зі сторки IsDeleted = 1
		if($zalyshok ==0){
			$query2 = "UPDATE `Dodano_v_Nariad` SET `IsDeleted` = 1 WHERE `ModelId`=".$ModelId." and NariadID =".$nariadID.";";
			mysql_query($query2);
		}
	}	
	
	mysql_close($new_connection);

?>