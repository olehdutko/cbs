<?php
include "../php/SQL.php";
	
				
	$cina_spysanogo = $_POST['cina_spysanogo'];
	$ModelId = $_POST['ModelId'];
	$model = $_POST['model'];
	$description = $_POST['description'];
	$price = $_POST['price'];
	$nariadID = $_POST['nariadID'];
	$opercount = $_POST['opercount'];
	$odVym = $_POST['odVym'];

	//Селектаю Об*єкт
	$result = mysql_query("SELECT Object FROM  Nariady WHERE ID ='".$nariadID."' ;");
	while ($row = mysql_fetch_array($result)) 
	{
	$Object = $row['Object'];
	}
	$objId = explode(" - ", $Object);
	//echo ($pieces[0]); 
		
	$query2 = "SELECT * FROM limit_card WHERE ModelId =".$ModelId." and Price =".$price.";";
	$result = mysql_query($query2);

		
	while ($row = mysql_fetch_array($result)) 
	{
	$Suma = $row['Suma'];
	$Count = $row['Count'];
	}
	//якщо на лімітній карті нема такого $ModelId, тоді вставляємо
	//якщо на лімітній карті тпакий $ModelId, є, тоді додаються Count, Suma, Price 
	
	if (strlen($Suma)>0)
	{
	
		$newcount = $opercount+$Count;
		$newSuma = $Suma+($price*$opercount);
		$query = "UPDATE `limit_card` SET 
		`Count` = ".$newcount.", 
		`Suma` = ".$newSuma."
		WHERE ModelId =".$ModelId.";";
		mysql_query($query);
		echo($query);
	}
	else
	{
		$query = 'INSERT INTO limit_card (Object, ObjId, ModelId, Model, Description , Price, Count, OdVym, Suma) VALUES ("' . 
		$Object . '", "' .
		$objId[0] . '", "' .
		$ModelId . '", "' .
		$model . '", "' .
		addslashes($description) . '", "' .
		$price . '", "' .
		$opercount . '", "' .
		addslashes($odVym) . '", "' .
		$cina_spysanogo. '")';
		mysql_query($query);
		echo($query);
	}
		
	
?>