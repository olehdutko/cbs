<?php
	include "../php/SQL.php";
	$nomer = $_POST['nomer'];
	
	$result = mysql_query("Select * FROM Nariady WHERE ID = ".$nomer.";");
    $row = mysql_num_rows($result);    
    while($row = mysql_fetch_array($result))
	{
		$ID  = $row['ID'];
		$P_kontragent = $row['P_kontragent'];
		$S_kontragent = $row['S_kontragent'];
		$Date = $row['Date'];
		$Object = $row['Object'];
		$Prymitka = $row['Prymitka'];
		$IsFinalized = $row['IsFinalized'];
		$IsClosed = $row['IsClosed'];
    }
	
	$query = 'INSERT INTO Nariady (P_kontragent, S_kontragent, Object,  Prymitka) VALUES ("' . 
		$P_kontragent . '", "' .
		$S_kontragent . '", "' .
		//$Date . '", "' .
		$Object . '", "' .
		$Prymitka . '")';
	mysql_query($query);
	//Echo($query);

	$objnomerArray = mysql_query("Select Max(ID) as 'ID' FROM Nariady");
	$MaxID = mysql_fetch_array($objnomerArray);
	//Echo($MaxID[0]);
	
$query = "INSERT Dodano_v_Nariad (Type, ModelId, ThemeId,  CategoryId,  CategoryName,  Vendor,  Model,  Description,  count,  Kilkist,  OdVym,  Price,  Valiuta,  Prymitka,  OtrymanoVid, SpysanoNa ) 
SELECT Type, ModelId, ThemeId,  CategoryId,  CategoryName,  Vendor,  Model,  Description,  count,  Kilkist,  OdVym,  Price,  Valiuta,  Prymitka,  OtrymanoVid, SpysanoNa
FROM Dodano_v_Nariad WHERE IsDeleted = '0' and NariadID = $ID";
mysql_query($query);
Echo($query);

$query = "Update Dodano_v_Nariad SET NariadID  = $MaxID[0] where NariadID = 0";
mysql_query($query);


//Необхідно закрити батьківський наряд
$query1 = "Update Nariady SET IsClosed = 1 where ID =".$ID.";";
$query2 = "Update Dodano_v_Nariad SET IsDeleted = 1 where NariadID =".$ID.";";
mysql_query($query1);
mysql_query($query2);  


mysql_close($new_connection);

?>