<?php
include "../php/SQL.php";			
			
			$Nariad = $_POST['Nariad'];
			$Type = $_POST['Type'];
			$ModelId = $_POST['ModelId'];
			$Model = $_POST['Model'];
			$Description = $_POST['Description'];
			$Price = $_POST['Price'];
			$Valiuta = $_POST['Valiuta'];
			$OdVym = $_POST['OdVym'];
			$Vendor = $_POST['Vendor'];
			$Prymitka = $_POST['Prymitka'];
			$CategoryName = $_POST['CategoryName'];
			//$Date = $_POST['Date'];
			$Count = $_POST['Count'];
			$OperCount = $_POST['OperCount'];
			$Zalyshok = $Count-$OperCount;
	
	$query = 'INSERT INTO borsuk.Dodano_v_Nariad (NariadID,  Type,  ModelId, Model, Description, CategoryName, Price, Valiuta, OdVym, Vendor, Prymitka  ,count, Kilkist) VALUES ("' . 
	$Nariad . '", "' .
	$Type . '", "' .
	$ModelId . '", "' .
 	$Model . '", "' .
	addslashes($Description) . '", "' .
	addslashes($CategoryName) . '", "' .
	$Price . '", "' .
	$Valiuta . '", "' .
	addslashes($OdVym) . '", "' .
	$Vendor . '", "' .
	$Prymitka . '", "' .
	$OperCount . '", "' .
	$OperCount. '")';
	//echo($Count);
	mysql_query($query);
	
	//јпдейтаЇтьс€ склад, проставл€Їтьс€ нова к≥льк≥сть
	$query = "UPDATE `sklad` SET `count` = ".$Zalyshok." WHERE `ModelId`='".$ModelId."' ;";
	echo($query);
	mysql_query($query);
	
	//якщо залишок = 0, то видал€Їтьс€ з≥ складу
	if($Zalyshok ==0)
	{
	$query = "UPDATE `sklad` SET `IsDeleted` = 1 WHERE `ModelId`='".$ModelId."' ;";
	echo($query);
	mysql_query($query);
	}
	
	
	
	$query2 = "SELECT P_kontragent FROM borsuk.Nariady WHERE ID =".$Nariad." ;";
	$result = mysql_query($query2);
		
		while ($row = mysql_fetch_array($result)) 
		{
		$kontragent = $row['P_kontragent'];
		}
	
	/*$robochyj_balans = 0;
	$result = mysql_query("SELECT Price FROM Dodano_v_Nariad WHERE NariadID =".$Nariad." ;");
		while ($row = mysql_fetch_array($result)) 
		{
		$robochyj_balans = $robochyj_balans + $row['Price'];
		}
		//echo($robochyj_balans);		
	$query = "UPDATE `Kontragenty` SET `robochyj_balans` = ".floatval($robochyj_balans)." WHERE `PIB`='".$kontragent."' ;";
	echo($query);
	mysql_query($query);*/
	
	
	
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
	
	
	// јпдейтанн€ Sklad_balans  
	$Sklad_balans  = 0;
	$result = mysql_query("SELECT Sklad_balans FROM Kontragenty WHERE `PIB`='".$kontragent."' ;");
		while ($row = mysql_fetch_array($result)) 
		{
		$Sklad_balans  = $row['Sklad_balans '];
		}

	$NewSklad_balans = $Sklad_balans  + $Suma1;
	$query = "UPDATE `Kontragenty` SET `Sklad_balans` = ".floatval($NewSklad_balans)." WHERE `PIB`='".$kontragent."' ;";
	echo($query);
	mysql_query($query);
	
	
	mysql_close($new_connection);

?>