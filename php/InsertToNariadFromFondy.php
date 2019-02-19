<?php
include "../php/SQL.php";						
			$Nariad = $_POST['Nariad'];
			$Type = $_POST['Type'];
			$ID = $_POST['ID'];
			$Model = $_POST['Model'];
			$Description = $_POST['Description'];
			$Price = $_POST['Price'];
			$OdVym = $_POST['OdVym'];
			$Vendor = $_POST['Vendor'];
			$Valiuta = $_POST['Valiuta'];
			$Prymitka = $_POST['Prymitka'];
			
			
			//$Date = $_POST['Date'];
			$Count = $_POST['Count'];
			$OperCount = $_POST['OperCount'];
			$Zalyshok = $Count-$OperCount;

	//Селектаю кількість одиниць фондів
	$CountOfItems = 0;
	//$query1 = "SELECT count FROM Dodano_v_Nariad WHERE `ModelId`=".$ID." and `NariadID`=".$Nariad.";";
	$result = mysql_query("SELECT count FROM Dodano_v_Nariad WHERE `ModelId`=".$ID." and `NariadID`=".$Nariad.";");
	while ($row = mysql_fetch_array($result)) 
	{
	$CountOfItems = $row['count'];
	}
	echo($query);
	
	if($CountOfItems ==0)
	{
		$query = 'INSERT INTO Dodano_v_Nariad (NariadID,  Type,  ModelId, Model,Description , Price, Valiuta, OdVym, Vendor, Prymitka, Kilkist, count) VALUES ("' . 
		$Nariad . '", "' .
		$Type . '", "' .
		$ID . '", "' .
		$Model . '", "' .
		addslashes($Description) . '", "' .
		$Price . '", "' .
		$Valiuta . '", "' .
		addslashes($OdVym) . '", "' .
		$Vendor . '", "' .
		$Prymitka . '", "' .
		$OperCount . '", "' .
		$OperCount. '")';
	}
	else
	{
		$NewCount = $CountOfItems + $OperCount;//Count
		$query = "UPDATE `Dodano_v_Nariad` SET 
		`count` = '".$NewCount."',
		`Kilkist` = '".$NewCount."'
		WHERE ModelId = ".$ID." and NariadID = ".$Nariad.";";
	}
	
	mysql_query($query);
	echo($query);
	
	
	//Апдейтається склад, проставляється нова кількість
	$query = "UPDATE `vyrobnychiFondy` SET `count` = ".$Zalyshok." WHERE `ID`='".$ID."' ;";
	//echo($query);
	mysql_query($query);
	
	//Якщо залишок = 0, то видаляється зі складу
	if($Zalyshok ==0)
	{
	$query = "UPDATE `vyrobnychiFondy` SET `IsDeleted` = 1 WHERE `ID`='".$ID."' ;";
	//	echo($query);
	mysql_query($query);
	}
	
	
	$query2 = "SELECT P_kontragent FROM Nariady WHERE ID =".$Nariad." ;";
	$result = mysql_query($query2);
		
		while ($row = mysql_fetch_array($result)) 
		{
		$kontragent = $row['P_kontragent'];
		}
	
	/*
	$robochyj_balans = 0;
	$Fondy_balans = 0;
	//Fondy_balans
	
	$result = mysql_query("SELECT Price FROM Dodano_v_Nariad WHERE NariadID =".$Nariad." ;");
		while ($row = mysql_fetch_array($result)) 
		{
		$robochyj_balans = $robochyj_balans + $row['Price'];
		}
		//echo($robochyj_balans);		
	$query = "UPDATE `Kontragenty` SET `robochyj_balans` = ".floatval($robochyj_balans)." WHERE `PIB`='".$kontragent."' ;";
	echo($query);
	mysql_query($query);
	*/
	
	// Апдейтання robochyj_balans 
	
	$Kurs = mysql_query("Select * from Kurs;");
	while ($row = mysql_fetch_array($Kurs)) {
	$euro = $row['euro'];
	$grivna = $row['grivna'];
	$dollar = $row['dollar'];
}
	
	switch($Valiuta){
	case 'dollar':
		$Suma1 = ($OperCount*$Price)*$dollar;
		break;
	case 'grivna':
		$Suma1 = ($OperCount*$Price)*$grivna;
		break;
	case 'euro':
		$Suma1 = ($OperCount*$Price)*$euro;
		break;
	};
	
	$robochyj_balans = 0;
	$result = mysql_query("SELECT robochyj_balans FROM Kontragenty WHERE `PIB`='".$kontragent."' ;");
		while ($row = mysql_fetch_array($result)) 
		{
		$robochyj_balans = $row['robochyj_balans'];
		}

	$NewRobochyj_Balans = $robochyj_balans + $Suma1;
	$query = "UPDATE `Kontragenty` SET `robochyj_balans` = ".floatval($NewRobochyj_Balans)." WHERE `PIB`='".$kontragent."' ;";
	echo($query);
	mysql_query($query);
	
	
	// Апдейтання Fondy_balans 
	$Fondy_balans = 0;
	$result = mysql_query("SELECT Fondy_balans FROM Kontragenty WHERE `PIB`='".$kontragent."' ;");
		while ($row = mysql_fetch_array($result)) 
		{
		$Fondy_balans = $row['Fondy_balans'];
		}

	$NewFondy_balans = $Fondy_balans + $Suma1 ;
	$query = "UPDATE `Kontragenty` SET `Fondy_balans` = ".floatval($NewFondy_balans)." WHERE `PIB`='".$kontragent."' ;";
	echo($query);
	mysql_query($query);
	
	
	mysql_close($new_connection);

?>